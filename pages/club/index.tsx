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
  services: Count[];
  service_count: number;
}

const Home: NextPage<ServiceResponse> = () => {
  const { data } = useSWR<ServiceResponse>("/api/services");
  const [selectedCategoryOption, setSelectedCategoryOption] = useState("주제");

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
    });
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      <div className="mt-6 flex flex-col px-4 py-10 ">
        <form>
          <div className="mt-4 flex">
            <button
              id="dropdown-button"
              className={`min-w-[115px] ml-auto inline-flex items-center rounded-[10px] border-[1.5px] bg-white px-4 py-2.5 text-center text-sm font-medium text-black hover:bg-white hover:text-black hover:text-center ${
                isDropdownOpen ? "bg-gray-200" : ""
              }absolute left-2`}
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
          </div>
        </form>
        {data &&
          filterSearchResults(data?.services)?.map((service) => (
            <List
              key={service.id}
              id={service.id}
              title={service.title}
              category={service.category ?? "Sport"}
              liked={service._count.liked}
              room={service._count.room}
              link={`/services/${service.id}`}
              status={service.status ?? "Ing"}
            />
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
        <div></div>
      </div>
    </Layout>
  );
};

export default Home;
