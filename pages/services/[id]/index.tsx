import Layout from "@/components/navbar";
import useMutation from "@/libs/client/useMutation";
import { cls } from "@/libs/client/utils";
import { Service } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { ApiResponse, SimpleUser } from "@/types";
import { useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import Button from "@/components/Button";
import { timeFormat } from "@/libs/client/dateFormat";
import useUser from "@/libs/client/useUser";

interface ConnectUser extends Service {
  user: SimpleUser;
  _count: {
    room: number;
  };
}

interface ListDetail {
  ok: boolean;
  service: ConnectUser;
  liked: boolean;
}

interface ServiceResponse extends ApiResponse {
  service: ConnectUser;
}

interface RoomResponse extends ApiResponse {
  roomId: number;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const ServiceDetail: NextPage<ServiceResponse> = ({ service }) => {
  const router = useRouter();
  const { user } = useUser();

  const { mutate } = useSWRConfig();
  const { data, mutate: boundMutate } = useSWR<ListDetail>(
    router.query.id ? `/api/services/${router.query.id}` : null,
    fetcher
  );

  const [togglelike] = useMutation(`/api/services/${router.query.id}/like`);
  const onLikeClick = () => {
    if (!data) return;
    boundMutate((prev) => prev && { ...prev, liked: !prev.liked }, false);
    togglelike({});
  };
  // 채팅방 생성 메서드
  const [createRoom, { data: createRoomResponse, loading: createRoomLoading }] =
    useMutation<RoomResponse>(`/api/chats/room`);
  // 채팅방 생성
  console.log(data);
  const onCreateRoom = useCallback(() => {
    if (data?.service?.userId === user?.id)
      return toast.error("본인 요청서에는 채팅을 할 수 없습니다.");
    if (createRoomLoading)
      return toast.warning("채팅방을 생성중입니다.\n잠시 기다려주세요!");
    if (data?.service?.status?.includes("End"))
      return toast.warning(
        "이미 완료된 서비스이면 사용자와 대화할 수 없습니다."
      );
    createRoom({
      ownerId: data?.service?.userId,
      title: data?.service?.title,
      serviceId: data?.service?.id,
    });
  }, [createRoom, service, user, createRoomLoading]);

  // 채팅방 생성 시 채팅방으로 이동
  useEffect(() => {
    if (!createRoomResponse?.ok) return;

    toast.success("채팅방으로 이동합니다.");
    router.push(`/chats/${createRoomResponse.roomId}`);
  }, [router, createRoomResponse]);

  const statusMap: Record<string, string> = {
    Ing: "모집 중",
    End: "모집 완료",
    Recent: "최신 순",
    Old: "오래된 순",
    Max: "인원 많은 순",
    Min: "인원 적은 순",
  };

  const categoryMap: Record<string, string> = {
    Sport: "스포츠",
    Trip: "여행/여가",
    Study: "스터디",
    Culture: "문화/생활",
    Volunteer: "봉사활동",
    Club: "동아리",
    Food: "밥친구",
    Contest: "공모전/대외활동",
  };

  const translatedStatus =
    data?.service?.status && statusMap[data.service.status]
      ? statusMap[data.service.status]
      : data?.service?.status;

  const translatedCategory =
    data?.service?.category && categoryMap[data.service.category]
      ? categoryMap[data.service.category]
      : data?.service?.category;

  return (
    <Layout hasTabBar canGoBack>
      <div className="flex items-center">
        <div className="w-10 px-1 pt-1 pb-1.5 left-[30px] top-[100px] absolute rounded border border-red-700 flex justify-center items-center">
          <div className="text-center text-red-700 text-[10px] font-bold font-['Apple SD Gothic Neo']">
            {translatedStatus}
          </div>
        </div>
        <div className="w-13 px-1 pt-1 pb-1.5 left-[83px] top-[100px] absolute rounded border border-red-700 flex justify-center items-center">
          <div className="text-center text-red-700 text-[10px] font-bold font-['Apple SD Gothic Neo']">
            {translatedCategory}
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute top-[75px] left-[300px]"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src="/num.png" alt="Number" className="w-5 h-5 mr-3" />
            <div className="w-5 h-5 flex justify-center items-center">
              <div className="text-zinc-500 text-xl font-['Apple SD Gothic Neo'] font-normal">
                {data?.service?._count.room}/12
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[55px]"></div>
      <div className="px-8 py-4">
        <div className="my-2 pt-6">
          <div className="flex items-center mt-4">
            <span className="px-0 text-black text-[25px] font-bold font-['Apple SD Gothic Neo'] leading-tight">
              {data?.service?.title}
            </span>
          </div>
          <div className="pt-1" />
          <p>
            <img
              src="/time.png"
              alt="Time Icon"
              className="inline-block w-4 h-4 mr-1.5"
            />
            {data?.service?.updatedAt
              ? timeFormat(data?.service?.updatedAt)
              : ""}
          </p>

          <div className="pt-5" />
          <Link href={`/serviceProfile/${data?.service?.user?.id}`}>
            <div className="flex flex-col space-x-3 shadow-sm rounded-lg border border-zinc-300 px-3 py-2 focus:border-black focus:outline-none">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-500">
                  {/* 이미지 */}
                  <img
                    className="w-full h-full object-cover"
                    src="/profile1.png"
                    alt="Profile Image"
                  />
                </div>
                <div className="px-4">
                  <p className="text-md font-medium text-black">
                    {data?.service?.user?.name}
                  </p>
                  <p className="text-xs font-medium text-gray-500">
                    요청자 프로필 보기
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <div className="pt-1" />

          <div className="flex flex-col space-x-3  shadow-sm rounded-lg border border-zinc-300 px-3 focus:border-black focus:outline-none py-5 mt-4">
            <span className="px-2 py-32 text-black text-lg font-normal font-['Apple SD Gothic Neo'] leading-tight text-left flex items-center">
              {data?.service?.content}
            </span>
          </div>
          <div className="pt-3" />
          <img className="w-82 h-52" src="/profile2.png" />

          <div className="flex items-center justify-between space-x-1 pt-4 mt-5">
            <Button
              text="모임 참여하기"
              type="button"
              className="flex-1"
              $primary
              onClick={onCreateRoom}
              $loading={createRoomLoading}
            />
            <button
              onClick={onLikeClick}
              className={cls(
                "flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500",
                data?.liked
                  ? "text-red-500 hover:text-red-600"
                  : "text-gray-400 hover:text-gray-500"
              )}
            >
              {data?.liked ? (
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 23 23"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetail;
