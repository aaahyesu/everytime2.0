import { cls } from "@/libs/client/utils";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
// import useUser from "@/libs/client/useUser";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  head?: boolean;
  head2?: boolean;
  head3?: boolean;
  head4?: boolean;
  head5?: boolean;
  exit?: () => Promise<void>;
  review?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
  head,
  head2,
  head3,
  head4,
  head5,
  review,
  exit,
}: LayoutProps) {
  const router = useRouter();
  //   const { user } = useUser();
  const onClick = () => {
    if (canGoBack) {
      router.back();
    } else if (exit) {
      exit();
    }
  };
  return (
    <div>
      <div
        className={cls(
          !canGoBack ? "justify-right " : "",
          !exit ? "justify-end" : "",
          "justify-right fixed top-0 flex h-[72px] w-full max-w-xl items-center border-b-2 bg-white px-4 text-xl font-bold font-['Apple SD Gothic Neo'] leading-tight font-[600] text-gray-800"
        )}
      >
        {head ? (
          <div className="flex justify-between w-full items-center px-2 ">
            <div className="flex flex-col">
              <p className="text-red-700 text-xs font-medium font-['Apple SD Gothic Neo'] leading-3">
                한경국립대학교
              </p>
              <div className="flex w-96 h-18 justify-start items-center gap-4">
                <Link
                  href="/club"
                  className="text-black text-2xl font-bold font-['Apple SD Gothic Neo'] leading-normal"
                >
                  모임목록
                </Link>
                <Link
                  href="/chats"
                  className="text-zinc-300 text-2xl font-bold font-['Apple SD Gothic Neo'] leading-normal ml-2"
                >
                  채팅
                </Link>
                <div className="flex ml-[100px]">
                  <Link href="services/search" className="text-black relative">
                    <rect width="100%" height="100%" fill="red" />
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Frame 17">
                        <path
                          id="Vector"
                          d="M21.2889 23L13.5889 15.3C12.9778 15.7889 12.275 16.1759 11.4806 16.4611C10.6861 16.7463 9.84074 16.8889 8.94445 16.8889C6.72407 16.8889 4.84511 16.1197 3.30756 14.5813C1.77 13.043 1.00081 11.164 1 8.94445C1 6.72407 1.76919 4.84511 3.30756 3.30756C4.84593 1.77 6.72489 1.00081 8.94445 1C11.1648 1 13.0438 1.76919 14.5813 3.30756C16.1189 4.84593 16.8881 6.72489 16.8889 8.94445C16.8889 9.84074 16.7463 10.6861 16.4611 11.4806C16.1759 12.275 15.7889 12.9778 15.3 13.5889L23 21.2889L21.2889 23ZM8.94445 14.4444C10.4722 14.4444 11.771 13.9095 12.8409 12.8397C13.9107 11.7698 14.4453 10.4714 14.4444 8.94445C14.4444 7.41667 13.9095 6.11785 12.8397 5.048C11.7698 3.97815 10.4714 3.44363 8.94445 3.44444C7.41667 3.44444 6.11785 3.97937 5.048 5.04922C3.97815 6.11907 3.44363 7.41748 3.44444 8.94445C3.44444 10.4722 3.97937 11.771 5.04922 12.8409C6.11907 13.9107 7.41748 14.4453 8.94445 14.4444Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {head2 ? (
          <div className="flex justify-between w-full items-center px-2 ">
            <div className="flex flex-col">
              <p className="text-red-700 text-xs font-medium font-['Apple SD Gothic Neo'] leading-3">
                한경국립대학교
              </p>
              <div className="flex w-96 h-18 justify-start items-center gap-4">
                <Link
                  href="/club"
                  className="text-zinc-300 text-2xl font-bold font-['Apple SD Gothic Neo'] leading-normal"
                >
                  모임목록
                </Link>
                <Link
                  href="/chats"
                  className="text-black text-2xl font-bold font-['Apple SD Gothic Neo'] leading-normal ml-2"
                >
                  채팅
                </Link>
              </div>
            </div>
          </div>
        ) : null}
        {head4 ? (
          <div className="flex justify-between w-full items-center px-2 ">
            <div className="flex flex-col">
              <p className="text-red-700 text-xs font-medium font-['Apple SD Gothic Neo'] leading-3">
                2023년도 2학기
              </p>
              <div className="flex w-96 h-18 justify-start items-center gap-4">
                <Link
                  href="/schedule"
                  className="text-black text-2xl font-bold font-['Apple SD Gothic Neo'] leading-normal"
                >
                  시간표
                </Link>
                <Link
                  href="/gradcal"
                  className="text-zinc-300 text-2xl font-bold font-['Apple SD Gothic Neo'] leading-normal ml-2"
                >
                  학점계산기
                </Link>
                <div className="flex ml-[100px]">
                  <Link href="services/search" className="text-black relative">
                    <rect width="100%" height="100%" fill="red" />
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Frame 17">
                        <path
                          id="Vector"
                          d="M21.2889 23L13.5889 15.3C12.9778 15.7889 12.275 16.1759 11.4806 16.4611C10.6861 16.7463 9.84074 16.8889 8.94445 16.8889C6.72407 16.8889 4.84511 16.1197 3.30756 14.5813C1.77 13.043 1.00081 11.164 1 8.94445C1 6.72407 1.76919 4.84511 3.30756 3.30756C4.84593 1.77 6.72489 1.00081 8.94445 1C11.1648 1 13.0438 1.76919 14.5813 3.30756C16.1189 4.84593 16.8881 6.72489 16.8889 8.94445C16.8889 9.84074 16.7463 10.6861 16.4611 11.4806C16.1759 12.275 15.7889 12.9778 15.3 13.5889L23 21.2889L21.2889 23ZM8.94445 14.4444C10.4722 14.4444 11.771 13.9095 12.8409 12.8397C13.9107 11.7698 14.4453 10.4714 14.4444 8.94445C14.4444 7.41667 13.9095 6.11785 12.8397 5.048C11.7698 3.97815 10.4714 3.44363 8.94445 3.44444C7.41667 3.44444 6.11785 3.97937 5.048 5.04922C3.97815 6.11907 3.44363 7.41748 3.44444 8.94445C3.44444 10.4722 3.97937 11.771 5.04922 12.8409C6.11907 13.9107 7.41748 14.4453 8.94445 14.4444Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {head5 ? (
          <div className="flex justify-between w-full items-center px-2 ">
            <div className="flex flex-col">
              <p className="text-red-700 text-xs font-medium font-['Apple SD Gothic Neo'] leading-3">
                2023년도 2학기
              </p>
              <div className="flex w-96 h-18 justify-start items-center gap-4">
                <Link
                  href="/schedule"
                  className="text-zinc-300 text-2xl font-bold font-['Apple SD Gothic Neo'] leading-normal"
                >
                  시간표
                </Link>
                <Link
                  href="/gradcal"
                  className="text-black text-2xl font-bold font-['Apple SD Gothic Neo'] leading-normal ml-2"
                >
                  학점계산기
                </Link>
                <div className="flex ml-[100px]">
                  <Link href="services/search" className="text-black relative">
                    <rect width="100%" height="100%" fill="red" />
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Frame 17">
                        <path
                          id="Vector"
                          d="M21.2889 23L13.5889 15.3C12.9778 15.7889 12.275 16.1759 11.4806 16.4611C10.6861 16.7463 9.84074 16.8889 8.94445 16.8889C6.72407 16.8889 4.84511 16.1197 3.30756 14.5813C1.77 13.043 1.00081 11.164 1 8.94445C1 6.72407 1.76919 4.84511 3.30756 3.30756C4.84593 1.77 6.72489 1.00081 8.94445 1C11.1648 1 13.0438 1.76919 14.5813 3.30756C16.1189 4.84593 16.8881 6.72489 16.8889 8.94445C16.8889 9.84074 16.7463 10.6861 16.4611 11.4806C16.1759 12.275 15.7889 12.9778 15.3 13.5889L23 21.2889L21.2889 23ZM8.94445 14.4444C10.4722 14.4444 11.771 13.9095 12.8409 12.8397C13.9107 11.7698 14.4453 10.4714 14.4444 8.94445C14.4444 7.41667 13.9095 6.11785 12.8397 5.048C11.7698 3.97815 10.4714 3.44363 8.94445 3.44444C7.41667 3.44444 6.11785 3.97937 5.048 5.04922C3.97815 6.11907 3.44363 7.41748 3.44444 8.94445C3.44444 10.4722 3.97937 11.771 5.04922 12.8409C6.11907 13.9107 7.41748 14.4453 8.94445 14.4444Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {head3 ? (
          <div className="flex justify-between w-full items-center px-2 ">
            <div className="flex flex-col">
              <p className="text-red-700 text-xs font-medium font-['Apple SD Gothic Neo'] leading-3">
                에브리타임
              </p>
              <div className="flex w-96 h-18 justify-start items-center gap-4 mt-1">
                한경국립대학교
                <div className="flex ml-[200px]">
                  <Link href="services/search" className="text-black relative ">
                    <img src="/alarm.png" alt="alarm" className="w-7 h-7" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {head ? (
          <div className="flex justify-between w-full items-center px-2 ">
            <div className="flex flex-col">
              <p className="text-red-700 text-xs font-medium font-['Apple SD Gothic Neo'] leading-3">
                한경국립대학교
              </p>
              <div className="flex w-96 h-18 justify-start items-center gap-4">
                <Link
                  href="/club"
                  className="text-black text-2xl font-bold font-['Apple SD Gothic Neo'] leading-normal"
                >
                  모임목록
                </Link>
                <Link
                  href="/chats"
                  className="text-zinc-300 text-2xl font-bold font-['Apple SD Gothic Neo'] leading-normal ml-2"
                >
                  채팅
                </Link>
                <div className="flex ml-[100px]">
                  <Link href="services/search" className="text-black relative">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Frame 17">
                        <path
                          id="Vector"
                          d="M21.2889 23L13.5889 15.3C12.9778 15.7889 12.275 16.1759 11.4806 16.4611C10.6861 16.7463 9.84074 16.8889 8.94445 16.8889C6.72407 16.8889 4.84511 16.1197 3.30756 14.5813C1.77 13.043 1.00081 11.164 1 8.94445C1 6.72407 1.76919 4.84511 3.30756 3.30756C4.84593 1.77 6.72489 1.00081 8.94445 1C11.1648 1 13.0438 1.76919 14.5813 3.30756C16.1189 4.84593 16.8881 6.72489 16.8889 8.94445C16.8889 9.84074 16.7463 10.6861 16.4611 11.4806C16.1759 12.275 15.7889 12.9778 15.3 13.5889L23 21.2889L21.2889 23ZM8.94445 14.4444C10.4722 14.4444 11.771 13.9095 12.8409 12.8397C13.9107 11.7698 14.4453 10.4714 14.4444 8.94445C14.4444 7.41667 13.9095 6.11785 12.8397 5.048C11.7698 3.97815 10.4714 3.44363 8.94445 3.44444C7.41667 3.44444 6.11785 3.97937 5.048 5.04922C3.97815 6.11907 3.44363 7.41748 3.44444 8.94445C3.44444 10.4722 3.97937 11.771 5.04922 12.8409C6.11907 13.9107 7.41748 14.4453 8.94445 14.4444Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link href="/mypage" className="relative ml-6 ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="iconamoon:profile-bold">
                        <path
                          id="Vector"
                          d="M3 19.5155C3 18.101 3.47411 16.7444 4.31802 15.7442C5.16193 14.744 6.30653 14.1821 7.5 14.1821H16.5C17.6935 14.1821 18.8381 14.744 19.682 15.7442C20.5259 16.7444 21 18.101 21 19.5155C21 20.2227 20.7629 20.901 20.341 21.4011C19.919 21.9012 19.3467 22.1821 18.75 22.1821H5.25C4.65326 22.1821 4.08097 21.9012 3.65901 21.4011C3.23705 20.901 3 20.2227 3 19.5155Z"
                          stroke="black"
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                        />
                        <path
                          id="Vector_2"
                          d="M12 10.2729C14.2091 10.2729 16 8.48209 16 6.27295C16 4.06381 14.2091 2.27295 12 2.27295C9.79086 2.27295 8 4.06381 8 6.27295C8 8.48209 9.79086 10.2729 12 10.2729Z"
                          stroke="black"
                          strokeWidth="2.5"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {canGoBack ? (
          <button onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-0"
            >
              <path
                d="M17 4L7 12L17 20"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : null}
        {title ? (
          <div className="flex items-center justify-center w-full">
            <span
              className={cls(
                canGoBack
                  ? "px-2 font-bold font-['Apple SD Gothic Neo'] text-center text-xl"
                  : ""
              )}
            >
              {title}
            </span>
          </div>
        ) : null}

        {exit ? (
          <button onClick={onClick}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame 84">
                <path
                  id="Vector 93"
                  d="M18.3333 3H5V21H18.3333M10 12H22M22 12L17.5556 7.42857M22 12L17.5556 16.5714"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </button>
        ) : null}
      </div>

      <div className={cls("pt-6", hasTabBar ? "pb-24" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 flex w-full max-w-xl justify-between border-t bg-white px-4 pb-5 pt-3 text-center text-xs text-gray-800">
          <Link href="/main">
            <span
              className={cls(
                "flex flex-col items-center space-y-2",
                router.pathname === "/main"
                  ? "text-gray-200"
                  : "transition-colors hover:text-gray-500"
              )}
            >
              {router.pathname === "/main" ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="akar-icons:home-alt1">
                    <path
                      id="Vector 81"
                      d="M15 14.5V20C15 20.5523 15.4477 21 16 21H19C20.1046 21 21 20.1046 21 19V11.7931C21 10.9678 20.6599 10.1788 20.0599 9.6121L13.3732 3.29696C12.6025 2.56899 11.3975 2.56899 10.6268 3.29695L3.94013 9.6121C3.34006 10.1788 3 10.9678 3 11.7931V19C3 20.1046 3.89543 21 5 21H8C8.55228 21 9 20.5523 9 20V14.5C9 13.9477 9.44772 13.5 10 13.5H14C14.5523 13.5 15 13.9477 15 14.5Z"
                      fill="#C62917"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="akar-icons:home-alt1">
                    <path
                      id="Vector 81"
                      d="M15 14.5V20C15 20.5523 15.4477 21 16 21H19C20.1046 21 21 20.1046 21 19V11.7931C21 10.9678 20.6599 10.1788 20.0599 9.6121L13.3732 3.29696C12.6025 2.56899 11.3975 2.56899 10.6268 3.29695L3.94013 9.6121C3.34006 10.1788 3 10.9678 3 11.7931V19C3 20.1046 3.89543 21 5 21H8C8.55228 21 9 20.5523 9 20V14.5C9 13.9477 9.44772 13.5 10 13.5H14C14.5523 13.5 15 13.9477 15 14.5Z"
                      stroke="#DCDCDC"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              )}
            </span>
          </Link>
          <Link href="/schedule">
            <span
              className={cls(
                "flex flex-col items-center space-y-2",
                router.pathname === "/schedule"
                  ? "text-gray-500"
                  : "transition-colors hover:text-gray-500"
              )}
            >
              {router.pathname === "/schedule" ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="tabler:table">
                    <g id="Vector">
                      <path
                        d="M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5ZM3 10H21H3ZM10 3V21V3Z"
                        fill="#C62917"
                      />
                      <path
                        d="M3 10H21M10 3V21M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="tabler:table">
                    <path
                      id="Vector"
                      d="M3 10H21M10 3V21M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5Z"
                      stroke="#DCDCDC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              )}
            </span>
          </Link>
          <Link href="/category">
            <span
              className={cls(
                "flex flex-col items-center space-y-2",
                router.pathname === ""
                  ? "text-gray-500"
                  : "transition-colors hover:text-gray-500"
              )}
            >
              {router.pathname === "/category" ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="majesticons:list-box-line">
                    <g id="Vector">
                      <path
                        d="M10.875 7.5H16.5H10.875ZM16.5 12H10.875H16.5ZM16.5 16.5H10.875H16.5ZM5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V5.25C21 4.65326 20.7629 4.08097 20.341 3.65901C19.919 3.23705 19.3467 3 18.75 3H5.25C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21ZM7.5 7.5H7.50113H7.5ZM7.5 12H7.50113H7.5ZM7.5 16.5H7.50113H7.5Z"
                        fill="#C62917"
                      />
                      <path
                        d="M10.875 7.5H16.5M16.5 12H10.875M16.5 16.5H10.875M7.5 7.5H7.50113M7.5 12H7.50113M7.5 16.5H7.50113M5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V5.25C21 4.65326 20.7629 4.08097 20.341 3.65901C19.919 3.23705 19.3467 3 18.75 3H5.25C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="majesticons:list-box-line">
                    <path
                      id="Vector"
                      d="M10.875 7.5H16.5M16.5 12H10.875M16.5 16.5H10.875M7.5 7.5H7.50113M7.5 12H7.50113M7.5 16.5H7.50113M5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V5.25C21 4.65326 20.7629 4.08097 20.341 3.65901C19.919 3.23705 19.3467 3 18.75 3H5.25C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21Z"
                      stroke="#DCDCDC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              )}
            </span>
          </Link>
          <Link href="/alarm">
            <span
              className={cls(
                "flex flex-col items-center space-y-2",
                router.pathname === "/alarm"
                  ? "text-gray-500"
                  : "transition-colors hover:text-gray-500"
              )}
            >
              {router.pathname === "/alarm" ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="streamline:mail-send-email-message">
                    <path
                      id="Vector"
                      d="M10.6154 13.3846L3 9.92308L21 3L14.0769 21L10.6154 13.3846ZM10.6154 13.3846L14.7692 9.23077"
                      stroke="#C62917"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="streamline:mail-send-email-message">
                    <path
                      id="Vector"
                      d="M10.6154 13.3847L3 9.9232L21 3.00012L14.0769 21.0001L10.6154 13.3847ZM10.6154 13.3847L14.7692 9.23089"
                      stroke="#DCDCDC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              )}
            </span>
          </Link>
          <Link href="/club">
            <span
              className={cls(
                "flex flex-col items-center space-y-2",
                router.pathname === "/club"
                  ? "text-gray-300"
                  : "transition-colors hover:text-gray-300",
                "services-svg-icon"
              )}
            >
              {router.pathname === "/club" ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="fluent:people-team-16-filled">
                    <path
                      id="Vector"
                      d="M12 3C11.6252 3 11.254 3.07755 10.9077 3.22822C10.5614 3.3789 10.2468 3.59974 9.98172 3.87815C9.71667 4.15656 9.50642 4.48708 9.36298 4.85084C9.21954 5.21459 9.14571 5.60447 9.14571 5.9982C9.14571 6.39192 9.21954 6.7818 9.36298 7.14556C9.50642 7.50931 9.71667 7.83983 9.98172 8.11824C10.2468 8.39665 10.5614 8.6175 10.9077 8.76817C11.254 8.91884 11.6252 8.99639 12 8.99639C12.757 8.99639 13.483 8.68051 14.0183 8.11824C14.5536 7.55597 14.8543 6.79337 14.8543 5.9982C14.8543 5.20302 14.5536 4.44042 14.0183 3.87815C13.483 3.31588 12.757 3 12 3ZM18.4286 4.4976C17.8603 4.4976 17.3152 4.73474 16.9133 5.15687C16.5115 5.579 16.2857 6.15152 16.2857 6.7485C16.2857 7.34547 16.5115 7.918 16.9133 8.34012C17.3152 8.76225 17.8603 8.99939 18.4286 8.99939C18.9969 8.99939 19.5419 8.76225 19.9438 8.34012C20.3457 7.918 20.5714 7.34547 20.5714 6.7485C20.5714 6.15152 20.3457 5.579 19.9438 5.15687C19.5419 4.73474 18.9969 4.4976 18.4286 4.4976ZM5.57143 4.4976C5.00311 4.4976 4.45806 4.73474 4.0562 5.15687C3.65434 5.579 3.42857 6.15152 3.42857 6.7485C3.42857 7.34547 3.65434 7.918 4.0562 8.34012C4.45806 8.76225 5.00311 8.99939 5.57143 8.99939C6.13975 8.99939 6.68479 8.76225 7.08666 8.34012C7.48852 7.918 7.71429 7.34547 7.71429 6.7485C7.71429 6.15152 7.48852 5.579 7.08666 5.15687C6.68479 4.73474 6.13975 4.4976 5.57143 4.4976ZM7.71429 11.9901C7.71693 11.5939 7.8686 11.2149 8.13622 10.9358C8.40385 10.6566 8.7657 10.5 9.14286 10.5H14.8571C15.236 10.5 15.5994 10.6581 15.8673 10.9395C16.1352 11.2209 16.2857 11.6026 16.2857 12.0006V16.5024C16.2856 16.9747 16.2152 17.444 16.0771 17.8934C15.7608 18.9119 15.1092 19.7785 14.2393 20.3378C13.3694 20.897 12.3382 21.1121 11.3309 20.9446C10.3236 20.777 9.40612 20.2377 8.74326 19.4236C8.0804 18.6094 7.71558 17.5737 7.71429 16.5024V11.9901ZM6.28571 12.0006C6.28571 11.4529 6.42429 10.9412 6.66857 10.5H3.42857C3.04969 10.5 2.68633 10.6581 2.41842 10.9395C2.15051 11.2209 2 11.6026 2 12.0006V15.7521C1.99981 16.3663 2.14318 16.9711 2.41753 17.5135C2.69189 18.0559 3.08882 18.5193 3.57349 18.8629C4.05815 19.2065 4.61572 19.4198 5.19722 19.4842C5.77873 19.5485 6.36638 19.4619 6.90857 19.232C6.4974 18.3865 6.28389 17.4503 6.28571 16.5009V12.0006ZM17.7143 12.0006V16.5024C17.7143 17.4853 17.49 18.4126 17.0914 19.232C17.6336 19.4619 18.2213 19.5485 18.8028 19.4842C19.3843 19.4198 19.9418 19.2065 20.4265 18.8629C20.9112 18.5193 21.3081 18.0559 21.5825 17.5135C21.8568 16.9711 22.0002 16.3663 22 15.7521V12.0006C22 11.6026 21.8495 11.2209 21.5816 10.9395C21.3137 10.6581 20.9503 10.5 20.5714 10.5H17.3314C17.5743 10.9412 17.7143 11.4529 17.7143 12.0006Z"
                      fill="#C62917"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="fluent:people-team-16-filled">
                    <path
                      id="Vector"
                      d="M2.75 15.7522V15.7524C2.74984 16.2502 2.86613 16.7389 3.08679 17.1751C3.30738 17.6112 3.62452 17.9798 4.00725 18.2512C4.38975 18.5223 4.82678 18.6887 5.27972 18.7389C5.48556 18.7616 5.69257 18.7602 5.89703 18.7349C5.657 18.0182 5.53433 17.2627 5.53571 16.5003M2.75 15.7522L6.28571 16.501M2.75 15.7522V12.0007C2.75 11.7901 2.83001 11.595 2.96163 11.4568C3.09205 11.3198 3.26084 11.2501 3.42857 11.2501H5.60783M2.75 15.7522L6.66857 10.5001H5.83601C5.73554 10.7387 5.65865 10.9897 5.60783 11.2501M5.53571 16.5003C5.53572 16.5001 5.53572 16.4998 5.53572 16.4996L6.28571 16.501M5.53571 16.5003V16.501H6.28571M5.53571 16.5003V12.0007C5.53571 11.7441 5.56043 11.493 5.60783 11.2501M6.28571 16.501V12.0007C6.28571 11.7412 6.31682 11.4898 6.37554 11.2501H5.60783M9.14284 11.2501H9.14286H14.8571C15.0249 11.2501 15.1937 11.3198 15.3241 11.4568C15.4557 11.595 15.5357 11.7901 15.5357 12.0007V16.5024C15.5357 16.5024 15.5357 16.5025 15.5357 16.5025C15.5356 16.9 15.4764 17.2946 15.3606 17.672C15.0947 18.5273 14.5501 19.2465 13.8337 19.707C13.1182 20.167 12.2751 20.3414 11.454 20.2049C10.6323 20.0682 9.87597 19.6271 9.32487 18.9502C8.7732 18.2726 8.46546 17.4048 8.46429 16.502C8.46429 16.5019 8.46429 16.5017 8.46429 16.5016L8.46429 11.9931C8.46621 11.7843 8.54666 11.5915 8.67761 11.4549C8.80782 11.3191 8.97585 11.2501 9.14284 11.2501ZM6.90857 19.2321C6.81657 19.0429 6.73446 18.8492 6.66245 18.6518L6.90857 19.2321ZM21.25 15.7522V15.7524C21.2502 16.2502 21.1339 16.7389 20.9132 17.1751C20.6926 17.6112 20.3755 17.9798 19.9927 18.2512C19.6103 18.5223 19.1732 18.6887 18.7203 18.7389C18.5145 18.7616 18.3075 18.7602 18.103 18.7349C18.3374 18.0349 18.4643 17.2835 18.4643 16.5025V12.0007C18.4643 11.7438 18.4393 11.4928 18.3918 11.2501H20.5714C20.7392 11.2501 20.9079 11.3198 21.0384 11.4568C21.17 11.595 21.25 11.7901 21.25 12.0007V15.7522ZM11.2069 3.91607C11.4596 3.80615 11.7289 3.75012 12 3.75012C12.5459 3.75012 13.0773 3.97755 13.4751 4.39541C13.8741 4.81451 14.1043 5.39048 14.1043 5.99832C14.1043 6.60615 13.8741 7.18212 13.4751 7.60123C13.0773 8.01908 12.5459 8.24651 12 8.24651C11.7289 8.24651 11.4596 8.19048 11.2069 8.08057C10.9542 7.97061 10.7221 7.80837 10.5249 7.60123C10.3276 7.39401 10.1693 7.14602 10.0607 6.87055C9.95205 6.59502 9.89571 6.29854 9.89571 5.99832C9.89571 5.6981 9.95205 5.40161 10.0607 5.12609C10.1693 4.85061 10.3276 4.60263 10.5249 4.39541C10.7221 4.18826 10.9542 4.02603 11.2069 3.91607ZM17.4565 5.67413C17.7209 5.39642 18.0714 5.24772 18.4286 5.24772C18.7857 5.24772 19.1362 5.39642 19.4006 5.67412C19.6662 5.95309 19.8214 6.33898 19.8214 6.74862C19.8214 7.15826 19.6662 7.54415 19.4006 7.82311C19.1362 8.10082 18.7857 8.24952 18.4286 8.24952C18.0714 8.24952 17.7209 8.10082 17.4565 7.82311C17.191 7.54415 17.0357 7.15826 17.0357 6.74862C17.0357 6.33897 17.191 5.95309 17.4565 5.67413ZM4.59941 5.67413C4.86378 5.39642 5.21426 5.24772 5.57143 5.24772C5.9286 5.24772 6.27907 5.39642 6.54345 5.67413C6.80902 5.95309 6.96429 6.33898 6.96429 6.74862C6.96429 7.15826 6.80902 7.54415 6.54345 7.82311C6.27907 8.10082 5.9286 8.24952 5.57143 8.24952C5.21426 8.24952 4.86378 8.10082 4.59941 7.82311C4.33384 7.54415 4.17857 7.15826 4.17857 6.74862C4.17857 6.33898 4.33384 5.95309 4.59941 5.67413Z"
                      stroke="#DCDCDC"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
              )}
            </span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
