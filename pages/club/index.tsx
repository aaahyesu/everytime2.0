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
  };
}

interface ServiceResponse {
  ok: boolean;
  services: Service[];
  service_count: number;
}

const Home: NextPage<ServiceResponse> = () => {
  const { data } = useSWR<ServiceResponse>("/api/services");
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
      <div className="mt-6 flex flex-col px-1 py-8 ">
        <form>
          <div className="mt-4 flex">
            <button
              id="dropdown-button"
              className={`min-w-[115px] ml-auto inline-flex items-center rounded-[10px] border-[1.5px] bg-white px-4 py-2.5 text-center text-sm font-medium text-black hover:bg-white hover:text-black hover:text-center ${
                isDropdownOpen ? "bg-gray-200" : ""
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
              } absolute left-2 mt-11 min-w-[45px] divide-y rounded-[10px] border `}
            >
              <ul
                className="text-sm text-gray-700 "
                aria-labelledby="category-dropdown-button"
              >
                {categoryDropdownOptions.map((categoryOption) => (
                  <li key={categoryOption}>
                    <button
                      type="button"
                      className={`w-full px-3 py-3 hover:bg-gray-100 ${
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
                className={`w-45 ml-auto inline-flex items-center rounded-lg border-[1.5px]  bg-white px-4 py-2.5 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-gray-100 ${
                  isDropdownOpen ? "bg-gray-200" : ""
                }`}
                type="button"
                onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
              >
                {selectedStatusOption}{" "}
                <svg
                  className={`ml-2 h-2.5 w-2.5 ${
                    isDropdownOpen ? "rotate-180 transform" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="status-dropdown"
                className={`${
                  isStatusDropdownOpen ? "block" : "hidden"
                }   divide-y rounded-[10px] border border-gray-300`}
              >
                <ul
                  className=" py-1 text-sm text-gray-700 "
                  aria-labelledby="status-dropdown-button"
                >
                  {statusDropdownOptions.map((statusOption) => (
                    <li key={statusOption}>
                      <button
                        type="button"
                        className={`w-full px-3 py-2 hover:bg-gray-100 ${
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
        <div className="flex flex-col space-y-5 py-10">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
            <div
              key={i}
              className="flex px-4 border-b pb-4 cursor-pointer justify-between"
            >
              <div className="flex space-x-2 items-center">
                <div className="px-1 pt-1 pb-1.5 rounded border border-red-700 flex justify-center items-center">
                  <div className="text-center text-red-700 text-[10px] font-bold font-['Apple SD Gothic Neo']">
                    모집중
                  </div>
                </div>
                <div className="px-1 pt-1 pb-1.5 rounded border border-red-700 flex justify-center items-center">
                  <div className="text-center text-red-700 text-[10px] font-bold font-['Apple SD Gothic Neo']">
                    스포츠
                  </div>
                </div>

                {/* <div className="relative">
                  <div
                    className="absolute top-[75px] left-[300px]"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src="/num.png" alt="Number" className="w-5 h-5 mr-3" />
                    <div className="w-5 h-5 flex justify-center items-center">
                      <div className="text-zinc-500 text-sm font-['Apple SD Gothic Neo'] font-normal">
                        5/12
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="pt-2 flex flex-col">
                  <h3 className="text-sm font-bold text-gray-900 ">
                    제목제목제목
                  </h3>
                  <span className="font-medium mt-1 text-gray-700">
                    축구하실 분 구해요 <br /> 12시 학교 운동장
                  </span>
                  <span className="text-[10px] text-gray-500">
                    1시간 전 김도영
                  </span>
                </div>
              </div>
              <div className="flex space-x-1.5 items-end justify-end">
                <div className="w-20 h-20 bg-gray-400 rounded-md" />
              </div>
            </div>
          ))}

          <Link href="/services/upload">
            <button className="fixed bottom-20 right-5 flex cursor-pointer justify-center rounded-full bg-white px-4 py-4  shadow-sm border border-gray-200">
              <svg
                className="h-7 w-7"
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
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
                title={service.title}
                category={service.category ?? "Sport"}
                liked={1}
                room={1}
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
