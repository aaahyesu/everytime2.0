import React, { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Socket, io } from "socket.io-client";
import useSWR from "swr";
import Link from "next/link";

// component
import Message from "@/components/message";

// type
import {
  ApiResponse,
  ClientToServerEvents,
  ServerToClientEvents,
  SimpleUser,
} from "@/types/index";
import { Chat } from "@prisma/client";

// hook
import useMe from "@/libs/client/useMe";
import useSWRInfinite from "swr/infinite";
import useMutation from "@/libs/client/useMutation";
import Spinner from "@/components/Spinner";
import Layout from "@/components/navbar";
import useUser from "@/libs/client/useUser";

interface IChatWithUser extends Chat {
  User: SimpleUser;
}
interface IChatResponse extends ApiResponse {
  chats: IChatWithUser[];
  isMine: boolean;
}

interface IExitRoomResponse extends ApiResponse {}
type ChatForm = {
  chat: string;
};

const ChatDetail: NextPage = () => {
  const router = useRouter();

  const fetcher = async (url: string) => {
    const res = await fetch(url);
    return res.json();
  };
  const { data } = useSWR(`/api/chats/${router.query.id}`, fetcher);

  console.log(data);

  const { me } = useMe();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 모달 아이콘 설정
  const modalIconClose = (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={closeModal}
      style={{ cursor: "pointer" }}
    >
      <g id="Frame 117">
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="17"
          stroke="#8A8A8A"
          stroke-width="2"
        />
        <path
          id="Vector 37"
          d="M25.0711 11.0711L10.9289 25.2132M25.0711 25.2132L10.9289 11.0711"
          stroke="#8A8A8A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
  const modalIconOpen = (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 117">
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="17"
          stroke="#8A8A8A"
          stroke-width="2"
        />
        <path
          id="Vector 37"
          d="M18 8V28M28 18H8"
          stroke="#8A8A8A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );

  // 채팅 폼
  const { register, handleSubmit, reset } = useForm<ChatForm>();
  // 연결한 소켓
  const [socket, setSocket] = useState<null | Socket<
    ServerToClientEvents,
    ClientToServerEvents
  >>(null);

  // 기존 채팅 load
  const [hasMoreChat, setHasMoreChat] = useState(true);
  const {
    data: chatsResponse,
    mutate: chatMutate,
    setSize,
    isValidating: loadChatsLoading,
  } = useSWRInfinite<IChatResponse>((pageIndex, prevPageData) => {
    if (!router.query.id) return;
    if (prevPageData && !prevPageData.chats.length) {
      setHasMoreChat(false);
      return null;
    }

    return `/api/chats/${router.query.id}?page=${pageIndex}&offset=${50}`;
  });

  // 채팅 스크롤 -> 가장 아래에서 실행
  useEffect(() => {
    if (chatsResponse && chatsResponse.length === 1 && !loadChatsLoading) {
      document.documentElement.scrollTop =
        document.documentElement.scrollHeight;
    }
  }, [chatsResponse, loadChatsLoading]);

  // 서버와 소켓 연결 + 채팅방 입장
  useEffect(() => {
    if (!me) return;

    const mySocket = io("http://localhost:3000", {
      path: "/api/chats/socketio",
      withCredentials: true,
      transports: ["websocket"],
    });

    setSocket((prev) => prev || mySocket);

    // 소켓 연결 성공 했다면
    mySocket.on("connect", () => {
      console.log("소켓 연결 성공 >> ", mySocket.id);
      // 채팅방 입장
      mySocket.emit("onJoinRoom", router.query.id as string);

      // 채팅받기 이벤트 등록
      mySocket.on("onReceive", ({ user, chat }) => {
        chatMutate(
          (prev) =>
            prev && [
              ...prev,
              {
                ok: true,
                message: "mutate로 추가",
                isMine: true,
                chats: [
                  {
                    User: user,
                    chat,
                    id: Date.now(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    roomId: +(router.query.id as string),
                    userId: user.id,
                  },
                ],
              },
            ]
        );
      });
    });
  }, [me, router, chatMutate]);

  // 채팅 전송
  const onAddChatting = useCallback(
    ({ chat }: ChatForm) => {
      console.log("chat : " + chat);
      if (!me) return;
      if (chat.trim() === "") return toast.error("내용을 입력하세요!");

      socket?.emit("onSend", {
        userId: me.id,
        roomId: router.query.id as string,
        chat,
      });

      chatMutate(
        (prev) =>
          prev && [
            ...prev,
            {
              ok: true,
              message: "mutate로 추가",
              isMine: true,
              chats: [
                {
                  User: {
                    id: me.id,
                    name: me.name,
                    // avatar: me.avatar,
                  },
                  chat,
                  id: Date.now(),
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  roomId: +(router.query.id as string),
                  userId: me.id,
                },
              ],
            },
          ]
      );

      document.documentElement.scrollTop =
        document.documentElement.scrollHeight;

      reset();
    },
    [me, reset, router, socket, chatMutate]
  );

  //  권한 없이 채팅방 입장
  useEffect(() => {
    if (chatsResponse && !chatsResponse[0].isMine) {
      toast.error("채팅방에 접근할 권한이 없습니다.");
      router.replace("/chats");
    }
  }, [chatsResponse, router]);

  // 채팅방 나가기 메서드
  const [exitRoom, { data: exitRoomResponse, loading: exitRoomLoading }] =
    useMutation<IExitRoomResponse>(`/api/chats/room`, "DELETE");
  // 채팅방 나가기
  const onExitRoom = useCallback(async () => {
    try {
      await exitRoom({
        roomId: router.query.id,
      });
      toast.success("채팅방을 나갔습니다.");
      router.push("/chats"); // 채팅 목록 페이지로 이동
    } catch (error) {
      // 오류 처리
      console.error("채팅방 나가기 오류:", error);
      toast.error("채팅방 나가기 중 오류가 발생했습니다.");
    }
  }, [exitRoom, router]);

  // 채팅방 나가기 성공 메시지
  useEffect(() => {
    if (exitRoomResponse?.ok) {
      toast.success(exitRoomResponse.message);
      router.back();
    }
  }, [exitRoomResponse, router]);

  // 모달 스타일을 설정
  const modalStyles: React.CSSProperties = {
    position: "fixed",
    left: "50%",
    top: "80%",
    transform: "translate(-50%, -50%)",
    maxHeight: "90vh", // 모달의 최대 높이 조절
    width: "100%", // 모달의 가로 길이 설정
    maxWidth: "500px",
  };

  return (
    <Layout canGoBack hasTabBar title="채팅">
      <article className="mb-10 min-h-[78vh] space-y-4 rounded-sm bg-white p-4 pt-20">
        {loadChatsLoading && (
          <h3 className="rounded-md bg-red-600 p-2 text-center text-lg text-white">
            <Spinner kinds="button" />
            채팅을 불러오는 중입니다...
          </h3>
        )}
        {!hasMoreChat && (
          <li className="list-none rounded-md bg-red-600 py-2 text-center text-lg text-white">
            더 이상 불러올 채팅이 없습니다.
          </li>
        )}
        {chatsResponse?.[0].isMine ? (
          <ul className="space-y-2">
            {[...chatsResponse]
              .reverse()
              .map(({ chats }) =>
                chats.map((chat) => (
                  <Message
                    key={chat.id}
                    message={chat.chat}
                    user={chat.User}
                    updatedAt={chat.updatedAt}
                    $reversed={me?.id === chat.User.id}
                  />
                ))
              )}
          </ul>
        ) : (
          <>
            {!loadChatsLoading && (
              <span className="block text-center">
                현재 채팅이 없습니다. 채팅을 입력해주세요!
              </span>
            )}
          </>
        )}
      </article>
      <article>
        <div>
          <button
            onClick={isModalOpen ? closeModal : openModal}
            className="fixed bottom-[90px] flex items-center justify-center rounded-md p-3 text-gray-400 hover:text-gray-500"
          >
            {isModalOpen ? modalIconClose : modalIconOpen}
          </button>

          {isModalOpen && (
            <div className="" onClick={closeModal}>
              <div
                style={modalStyles}
                className="h-[220px] max-h-full overflow-y-auto overflow-x-hidden md:inset-0"
                id="crypto-modal"
                aria-hidden="true"
              >
                {/* Modal body */}
                <div className="space-y-6 p-6">
                  <nav className="flex w-full max-w-xl justify-between bg-white px-4 pb-5 pt-3 text-center text-xs text-gray-800">
                    <Link href={"#"}>
                      <span className="flex flex-col items-center space-y-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>
                    </Link>

                    <span className="flex flex-col items-center space-y-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                        />
                      </svg>
                    </span>

                    <Link href="#">
                      <button className="flex flex-col items-center space-y-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                          />
                        </svg>
                      </button>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          )}
          <form
            onSubmit={handleSubmit(onAddChatting)}
            className="fixed bottom-[90px] mx-12 flex w-10/12 max-w-lg justify-start rounded-md"
          >
            <input
              type="text"
              className="flex-[8.5] border-none bg-zinc-100 rounded-3xl placeholder:text-gray-400 focus:border-zinc-100 ml-4"
              {...register("chat")}
              autoFocus
              placeholder="메시지 입력"
            />
            <button type="submit" className="flex-[1.5] py-[10px] ml-3">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Frame 118">
                  <rect
                    x="1"
                    y="1"
                    width="34"
                    height="34"
                    rx="17"
                    stroke="#8A8A8A"
                    strokeWidth="2"
                  />
                  <path
                    id="Vector 37"
                    d="M18 8V28M18 8L23 13M18 8L13 13"
                    stroke="#8A8A8A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </form>
        </div>
      </article>
    </Layout>
  );
};

export default ChatDetail;
