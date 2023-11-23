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
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
  head,
}: LayoutProps) {
  const router = useRouter();
  //   const { user } = useUser();
  const onClick = () => {
    router.back();
  };
  return (
    <div>
      <div
        className={cls(
          !canGoBack ? "justify-right" : "",
          "justify-right fixed top-0 flex h-[80px] w-full max-w-xl items-center border-b-2 bg-white px-4 text-lg font-[600] text-gray-800"
        )}
      >
        {head ? (
          <div className="flex justify-between w-full items-center px-2 ">
            <div className="space-x-4 w-96 h-18  pr-24 justify-start items-start gap-4 inline-flex">
              <Link
                href="#"
                className="text-black text-2xl font-bold font-['Apple SD Gothic Neo'] leading-normal"
              >
                모임목록
              </Link>
              <Link
                href="#"
                className="text-zinc-300 text-2xl font-bold font-['Apple SD Gothic Neo'] leading-normal"
              >
                채팅
              </Link>
            </div>
            <div className="flex space-x-4 ">
              <Link href="#" className="hover:underline">
                <img
                  src="/search.png"
                  alt="검색"
                  className="hover:underline"
                  width="25px"
                  height="25px"
                />
              </Link>

              <Link href="#" className="hover:underline">
                <img
                  src="/mypage.png"
                  alt="마이페이지"
                  className="hover:underline"
                  width="25px"
                  height="25px"
                />
              </Link>
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
            >
              <path
                d="M17 4L7 12L17 20"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        ) : null}
        {title ? (
          <div className="flex items-center justify-center w-full">
            <span
              className={cls(
                canGoBack
                  ? "px-2 font-bold  font-['Apple SD Gothic Neo'] text-center text-lg"
                  : ""
              )}
            >
              {title}
            </span>
          </div>
        ) : null}
      </div>
      <div className={cls("pt-6", hasTabBar ? "pb-24" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 flex w-full max-w-xl justify-between border-t bg-white px-4 pb-5 pt-3 text-center text-xs text-gray-800">
          <Link href="/">
            <span
              className={cls(
                "flex flex-col items-center space-y-2",
                router.pathname === "/"
                  ? "text-gray-400"
                  : "transition-colors hover:text-gray-500"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_523_1499)">
                  <path
                    d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM4 21V9L12 3L20 9V21H13V15H11V21H4Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_523_1499">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 8H16M16 12H11M16 16H11M8 8H8.001M8 12H8.001M8 16H8.001M6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.121 15.5559C20.3072 14.1562 19.875 12.1472 19.875 9.75C19.875 7.66142 19.0453 5.65838 17.5685 4.18153C16.0916 2.70469 14.0886 1.875 12 1.875C9.91145 1.875 7.90841 2.70469 6.43156 4.18153C4.95471 5.65838 4.12503 7.66142 4.12503 9.75C4.12503 12.1481 3.69471 14.1562 2.88096 15.5559C2.71491 15.8414 2.6269 16.1656 2.62574 16.4958C2.62459 16.8261 2.71035 17.1509 2.8744 17.4375C3.03742 17.7243 3.27402 17.9624 3.5598 18.1272C3.84557 18.292 4.17015 18.3775 4.50003 18.375H7.8919C7.98493 19.4003 8.45797 20.3537 9.21811 21.048C9.97825 21.7423 10.9705 22.1273 12 22.1273C13.0295 22.1273 14.0218 21.7423 14.7819 21.048C15.5421 20.3537 16.0151 19.4003 16.1082 18.375H19.5C19.8294 18.377 20.1534 18.2913 20.4387 18.1265C20.7239 17.9617 20.9601 17.7239 21.1228 17.4375C21.2876 17.1513 21.3742 16.8267 21.3738 16.4965C21.3735 16.1662 21.2863 15.8418 21.121 15.5559ZM12 19.875C11.5678 19.8751 11.1488 19.7258 10.8139 19.4525C10.4791 19.1791 10.249 18.7985 10.1625 18.375H13.8375C13.7511 18.7985 13.521 19.1791 13.1861 19.4525C12.8513 19.7258 12.4323 19.8751 12 19.875ZM5.1244 16.125C5.95409 14.4375 6.37503 12.2944 6.37503 9.75C6.37503 8.25816 6.96766 6.82742 8.02255 5.77252C9.07744 4.71763 10.5082 4.125 12 4.125C13.4919 4.125 14.9226 4.71763 15.9775 5.77252C17.0324 6.82742 17.625 8.25816 17.625 9.75C17.625 12.2934 18.045 14.4375 18.8747 16.125H5.1244Z"
                  fill="black"
                />
              </svg>
            </span>
          </Link>
          <Link href="/club">
            <span
              className={cls(
                "flex flex-col items-center space-y-2",
                router.pathname === "/services"
                  ? "text-gray-400"
                  : "transition-colors hover:text-gray-500",
                "services-svg-icon"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="services-svg-icon"
              >
                <path
                  d="M12 3.00299C11.6064 3.00299 11.2167 3.08051 10.8531 3.23112C10.4895 3.38174 10.1591 3.60249 9.8808 3.88079C9.6025 4.15909 9.38175 4.48948 9.23113 4.85309C9.08052 5.2167 9.003 5.60642 9.003 5.99999C9.003 6.39356 9.08052 6.78328 9.23113 7.14689C9.38175 7.51051 9.6025 7.84089 9.8808 8.11919C10.1591 8.39749 10.4895 8.61824 10.8531 8.76886C11.2167 8.91947 11.6064 8.99699 12 8.99699C12.7949 8.99699 13.5572 8.68124 14.1192 8.11919C14.6812 7.55714 14.997 6.79484 14.997 5.99999C14.997 5.20514 14.6812 4.44284 14.1192 3.88079C13.5572 3.31875 12.7949 3.00299 12 3.00299ZM18.75 4.49999C18.1533 4.49999 17.581 4.73704 17.159 5.159C16.7371 5.58096 16.5 6.15325 16.5 6.74999C16.5 7.34673 16.7371 7.91902 17.159 8.34098C17.581 8.76294 18.1533 8.99999 18.75 8.99999C19.3467 8.99999 19.919 8.76294 20.341 8.34098C20.7629 7.91902 21 7.34673 21 6.74999C21 6.15325 20.7629 5.58096 20.341 5.159C19.919 4.73704 19.3467 4.49999 18.75 4.49999ZM5.25 4.49999C4.65326 4.49999 4.08097 4.73704 3.65901 5.159C3.23705 5.58096 3 6.15325 3 6.74999C3 7.34673 3.23705 7.91902 3.65901 8.34098C4.08097 8.76294 4.65326 8.99999 5.25 8.99999C5.84674 8.99999 6.41903 8.76294 6.84099 8.34098C7.26295 7.91902 7.5 7.34673 7.5 6.74999C7.5 6.15325 7.26295 5.58096 6.84099 5.159C6.41903 4.73704 5.84674 4.49999 5.25 4.49999ZM7.5 11.9895C7.50277 11.5935 7.66203 11.2146 7.94304 10.9356C8.22404 10.6566 8.60399 10.5 9 10.5H15C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12V16.5C16.4999 16.9721 16.426 17.4412 16.281 17.8905C15.9489 18.9085 15.2647 19.7748 14.3513 20.3338C13.4379 20.8928 12.3551 21.1079 11.2974 20.9404C10.2398 20.7729 9.27642 20.2338 8.58042 19.42C7.88442 18.6062 7.50135 17.5709 7.5 16.5V11.9895ZM6 12C6 11.4525 6.1455 10.941 6.402 10.5H3C2.60218 10.5 2.22064 10.658 1.93934 10.9393C1.65804 11.2206 1.5 11.6022 1.5 12V15.75C1.4998 16.3639 1.65034 16.9686 1.93841 17.5107C2.22648 18.0529 2.64326 18.5161 3.15216 18.8595C3.66106 19.203 4.24651 19.4163 4.85708 19.4806C5.46766 19.5449 6.0847 19.4584 6.654 19.2285C6.22227 18.3833 5.99808 17.4475 6 16.4985V12ZM18 12V16.5C18 17.4825 17.7645 18.4095 17.346 19.2285C17.9153 19.4584 18.5323 19.5449 19.1429 19.4806C19.7535 19.4163 20.3389 19.203 20.8478 18.8595C21.3567 18.5161 21.7735 18.0529 22.0616 17.5107C22.3497 16.9686 22.5002 16.3639 22.5 15.75V12C22.5 11.6022 22.342 11.2206 22.0607 10.9393C21.7794 10.658 21.3978 10.5 21 10.5H17.598C17.853 10.941 18 11.4525 18 12Z"
                  fill="black"
                />
              </svg>
            </span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
