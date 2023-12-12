import type { NextPage } from "next";
import React, { useState } from "react";
import Layout from "@/components/navbar";
import Link from "next/link";
import useSWR from "swr";
import { Service } from "@prisma/client";
import List from "@/components/list";

interface Count extends Service {
  _count: {
    liked: number;
    room: number;
    users: number;
  };
}

interface ServiceResponse {
  ok: boolean;
  services: Service[];
  service_count: number;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const Home: NextPage<ServiceResponse> = () => {
  const { data } = useSWR<ServiceResponse>("/api/services", fetcher);
  console.log(data);
  const [selectedCategoryOption, setSelectedCategoryOption] = useState("주제");
  const [selectedStatusOption, setSelectedStatusOption] = useState("모집 중");

  const filterSearchResults = (services: Count[]) => {
    return services?.filter((service) => {
      // 서비스 상태 필터링 추가
      let categoryMatches = false;
      if (selectedCategoryOption === "스포츠") {
        categoryMatches = service.category === "Sport";
      } else if (selectedCategoryOption === "여행/여가") {
        categoryMatches = service.category === "Trip";
      } else if (selectedCategoryOption === "스터디") {
        categoryMatches = service.category === "Study";
      } else if (selectedCategoryOption === "문화/생활") {
        categoryMatches = service.category === "Culture";
      } else if (selectedCategoryOption === "봉사 활동") {
        categoryMatches = service.category === "Volunteer";
      } else if (selectedCategoryOption === "동아리") {
        categoryMatches = service.category === "Club";
      } else if (selectedCategoryOption === "밥 친구") {
        categoryMatches = service.category === "Food";
      } else if (selectedCategoryOption === "공모전/대외활동") {
        categoryMatches = service.category === "Contest";
      } else {
        categoryMatches = true;
      }

      // 서비스 상태 필터링 추가
      let statusMatches = false;
      if (selectedStatusOption === "모집 중") {
        statusMatches = service.status === "Ing";
      } else if (selectedStatusOption === "모집 완료") {
        statusMatches = service.status === "End";
      } else if (selectedStatusOption === "최신 순") {
        statusMatches = service.status === "Recent";
      } else if (selectedStatusOption === "오래된 순") {
        statusMatches = service.status === "Old";
      } else if (selectedStatusOption === "인원 적은 순") {
        statusMatches = service.status === "Max";
      } else if (selectedStatusOption === "인원 많은 순") {
        statusMatches = service.status === "Min";
      } else {
        statusMatches = true;
      }
    });
  };
  const statusDropdownOptions = [
    "모집 중",
    "모집 완료",
    "최신 순",
    "오래된 순",
    "인원 적은 순",
    "인원 많은 순",
  ];
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  const [isDropdownOpen] = useState(false);

  const categoryDropdownOptions = [
    "스포츠",
    "여행/여가",
    "스터디",
    "문화/생활",
    "봉사 활동",
    "동아리",
    "밥 친구",
    "공모전/대외활동",
  ];
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  return (
    <Layout head hasTabBar>
      <div className="mt-5 flex flex-col px-1 py-8 ">
        <form>
          <div className="mt-4 flex">
            <button
              id="dropdown-button"
              className={`min-w-[115px] ml-auto inline-flex items-center rounded-[10px] bg-white px-4 py-2.5 text-center text-sm font-medium text-black hover:bg-white hover:text-black hover:text-center ${
                isDropdownOpen ? "bg-white" : ""
              }absolute left-4`}
              type="button"
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            >
              <img
                src="/category.png"
                alt="카테고리"
                className="hover:underline mr-2"
                width={20}
                height={20}
              />
              {selectedCategoryOption}{" "}
            </button>
            <div
              id="category-dropdown"
              className={`${
                isCategoryDropdownOpen ? "block" : "hidden"
              } absolute z-10 left-4 mt-11 min-w-[45px] divide-y rounded-[10px] border `}
            >
              <ul
                className="text-sm text-gray-700 "
                aria-labelledby="category-dropdown-button"
              >
                {categoryDropdownOptions.map((categoryOption) => (
                  <li key={categoryOption}>
                    <button
                      type="button"
                      className={`w-full px-3 py-3 bg-white hover:bg-white ${
                        categoryOption === selectedCategoryOption
                          ? "font-semibold"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedCategoryOption(categoryOption);
                        setIsCategoryDropdownOpen(false);
                      }}
                    >
                      {categoryOption}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-96 h-12 pl-[263px] ">
              <button
                id="dropdown-button"
                className={`w-45 ml-auto inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-gray-100 ${
                  isDropdownOpen ? "bg-white" : ""
                }`}
                type="button"
                onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
              >
                <span className="mr-2">{selectedStatusOption}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="mingcute:arrow-down-line"
                    clipPath="url(#clip0_497_7865)"
                  >
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M8.25001 12.9323L5.28751 9.96975C5.21833 9.89812 5.13557 9.84098 5.04407 9.80167C4.95256 9.76237 4.85415 9.74168 4.75456 9.74081C4.65498 9.73995 4.55622 9.75892 4.46405 9.79663C4.37188 9.83434 4.28814 9.89003 4.21772 9.96045C4.1473 10.0309 4.09161 10.1146 4.0539 10.2068C4.01619 10.299 3.99721 10.3977 3.99808 10.4973C3.99894 10.5969 4.01963 10.6953 4.05894 10.7868C4.09824 10.8783 4.15538 10.9611 4.22701 11.0302L8.46976 15.273C8.61041 15.4136 8.80114 15.4926 9.00001 15.4926C9.19889 15.4926 9.38962 15.4136 9.53026 15.273L13.773 11.0302C13.9096 10.8888 13.9852 10.6993 13.9835 10.5027C13.9818 10.3061 13.9029 10.1179 13.7639 9.97889C13.6248 9.83983 13.4367 9.76095 13.2401 9.75924C13.0434 9.75754 12.854 9.83313 12.7125 9.96975L9.75001 12.9323V3C9.75001 2.80109 9.671 2.61032 9.53034 2.46967C9.38969 2.32902 9.19893 2.25 9.00001 2.25C8.8011 2.25 8.61034 2.32902 8.46968 2.46967C8.32903 2.61032 8.25001 2.80109 8.25001 3V12.9323Z"
                        fill="black"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_497_7865">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <div
                id="status-dropdown"
                className={`${
                  isStatusDropdownOpen ? "block" : "hidden"
                }  absolute z-10 divide-y rounded-[10px] border bg-white border-gray-300`}
              >
                <ul
                  className=" py-1 text-sm text-gray-700 "
                  aria-labelledby="status-dropdown-button"
                >
                  {statusDropdownOptions.map((statusOption) => (
                    <li key={statusOption}>
                      <button
                        type="button"
                        className={`w-full px-4 py-2 bg-white hover:bg-white ${
                          statusOption === selectedStatusOption
                            ? "font-semibold"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedStatusOption(statusOption);
                          setIsStatusDropdownOpen(false);
                        }}
                      >
                        {statusOption}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </form>
        <div className="w-20 h-4 pl-3.5 pr-1.5 py-2 justify-end items-center gap-0.5 inline-flex">
          <Link href="/services/upload">
            <button className="w-25 h-12 fixed bottom-20 right-[120px] flex items-center justify-center rounded-full text-white bg-red-700 px-4 py-4 shadow-sm border border-red-600">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M4.86593 12.466C4.52461 12.8076 4.06167 12.9996 3.57884 13H1V10.4373C1 9.95466 1.19196 9.49133 1.53323 9.14999M4.86593 12.466L1.53323 9.14999M4.86593 12.466L11.514 5.81398M1.53323 9.14999L8.18795 2.48664L9.13844 1.53464C9.30757 1.36521 9.50844 1.23079 9.72955 1.13905C9.95066 1.04731 10.1877 1.00006 10.4271 1C10.6664 0.999938 10.9035 1.04707 11.1246 1.13869C11.3458 1.23031 11.5467 1.36463 11.7159 1.53397L12.4665 2.28531C12.8081 2.627 13 3.09042 13 3.57364C13 4.05686 12.8081 4.52029 12.4665 4.86198L11.514 5.81398M11.514 5.81398L8.18729 2.48664"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="mr-2 flex" />
              <span className="text-sm text-white font-bold font-['Apple SD Gothic Neo']">
                모임 만들기
              </span>
            </button>
          </Link>
        </div>

        {!data ? (
          <div>Loading...</div>
        ) : (
          <>
            {data?.services?.map((service) => (
              <List
                key={service.id}
                id={service.id}
                updatedAt={service.updatedAt}
                title={service.title}
                userName={service.readerName ?? ""}
                category={service.category ?? "Sport"}
                liked={1}
                room={3}
                maxNum={service.maxNum}
                content={service.content}
                link={`/services/${service.id}`}
                status={service.status ?? "Ing"}
              />
            ))}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Home;
