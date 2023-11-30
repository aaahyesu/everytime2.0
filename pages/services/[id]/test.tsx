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
import useMe from "@/libs/client/useMe";
import { toast } from "react-toastify";
import Button from "@/components/Button";

interface ConnectUser extends Service {
  user: SimpleUser;
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

const ServiceDetail: NextPage<ServiceResponse> = ({ service }) => {
  const router = useRouter();
  const { me } = useMe();

  const { mutate } = useSWRConfig();
  const { data, mutate: boundMutate } = useSWR<ListDetail>(
    router.query.id ? `/api/services/${router.query.id}` : null
  );
  console.log(data);
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
  const onCreateRoom = useCallback(() => {
    if (data?.service?.userId === me?.id)
      return toast.error("본인 요청서에는 채팅을 할 수 없습니다.");
    if (createRoomLoading)
      return toast.warning("채팅방을 생성중입니다.\n잠시 기다려주세요!");
    if (data?.service?.status?.includes("Complete"))
      return toast.warning(
        "이미 완료된 서비스이면 사용자와 대화할 수 없습니다."
      );
    if (data?.service?.status?.includes("Incomplete"))
      return toast.warning(
        "이미 미완료된 서비스이면 사용자와 대화할 수 없습니다."
      );
    createRoom({
      ownerId: data?.service?.userId,
      title: data?.service?.title,
      serviceId: data?.service?.id,
    });
  }, [createRoom, service, me, createRoomLoading]);

  // 채팅방 생성 시 채팅방으로 이동
  useEffect(() => {
    if (!createRoomResponse?.ok) return;

    toast.success("채팅방으로 이동합니다.");
    router.push(`/chats/${createRoomResponse.roomId}`);
  }, [router, createRoomResponse]);
  console.log(data?.service?.user);

  return (
    <Layout hasTabBar canGoBack title="모임 개설">
      <div className="mt-10">
        <div className="w-30 px-3 pt-2 pb-1.5 left-2 top-[90px] absolute rounded border border-red-700 justify-center items-center inline-flex">
          <div className="w-11 h-3 text-center text-red-700 text-sm font-bold font-['Apple SD Gothic Neo']">
            모집중
          </div>
        </div>
        <div className="w-16 px-3 pt-2 pb-1.5 left-[85px] top-[90px] absolute rounded border border-red-700 justify-center items-center inline-flex">
          <div className="w-11 h-3 text-center text-red-700 text-sm font-bold font-['Apple SD Gothic Neo']">
            스포츠
          </div>
        </div>

        <div
          className="flex flex-col space-x-3  shadow-sm rounded-lg border border-zinc-300 px-3 focus:border-black focus:outline-none py-3"
          style={{ width: "2400px", height: "65px" }}
        >
          <p className="mb-1 block text-sm font-bold">모임 이름</p>
          <span className=" display: inline-block px-2 text-black text-sm font-medium font-['Apple SD Gothic Neo'] leading-tight">
            {/* {data?.service?.title} */} 안녕
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetail;
