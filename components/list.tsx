import Link from "next/link";
import { timeFormat } from "@/libs/client/dateFormat";
import { useEffect, useState } from "react";

interface ListProps {
  id: number;
  title: string;
  liked: number;
  link: string;
  room: number;
  content: string;
  userName: string;
  maxNum: number;
  updatedAt: Date;
  status: "Ing" | "End" | "Recent" | "Old" | "Max" | "Min";
  category:
    | "Sport"
    | "Trip"
    | "Study"
    | "Culture"
    | "Volunteer"
    | "Club"
    | "Food"
    | "Contest";
}

export default function List({
  title,
  room,
  link,
  userName,
  content,
  category,
  status,
  updatedAt,
  maxNum,
}: ListProps) {
  let categoryText = "";
  let categoryClass = "";
  let bgClass = "";

  if (category === "Sport") {
    categoryText = "스포츠";
    categoryClass = "bg-green-500";
    bgClass = " bg-green-100 text-green-800";
  } else if (category === "Trip") {
    categoryText = "여행/여가";
    categoryClass = "bg-red-500";
    bgClass = "bg-red-100 text-red-800 ";
  } else if (category === "Study") {
    categoryText = "스터디";
    categoryClass = "bg-gray-500";
    bgClass = "bg-gray-300 text-gray-800 ";
  } else if (category === "Culture") {
    categoryText = "문화/생활";
    categoryClass = "bg-blue-500";
    bgClass = "bg-blue-200 text-blue-800 ";
  } else if (category === "Volunteer") {
    categoryText = "봉사활동";
    categoryClass = "bg-blue-500";
    bgClass = "bg-blue-200 text-blue-800 ";
  } else if (category === "Club") {
    categoryText = "동아리";
    categoryClass = "bg-blue-500";
    bgClass = "bg-blue-200 text-blue-800 ";
  } else if (category === "Food") {
    categoryText = "밥친구";
    categoryClass = "bg-blue-500";
    bgClass = "bg-blue-200 text-blue-800 ";
  } else if (category === "Contest") {
    categoryText = "공모전/대외활동";
    categoryClass = "bg-blue-500";
    bgClass = "bg-blue-200 text-blue-800 ";
  }
  let statusText = "";
  let statusClass = "";

  if (status === "Ing") {
    statusText = "모집 중";
    statusClass = "bg-green-500";
    bgClass = " bg-green-100 text-green-800";
  } else if (status === "End") {
    statusText = "모집 완료";
    statusClass = "bg-red-500";
    bgClass = "bg-red-100 text-red-800 ";
  } else if (status === "Recent") {
    statusText = "최신 순";
    statusClass = "bg-gray-500";
    bgClass = "bg-gray-300 text-gray-800 ";
  } else if (status === "Old") {
    statusText = "오래된 순";
    statusClass = "bg-blue-500";
    bgClass = "bg-blue-200 text-blue-800 ";
  } else if (status === "Max") {
    statusText = "인원 적은 순";
    statusClass = "bg-blue-500";
    bgClass = "bg-blue-200 text-blue-800 ";
  } else if (status === "Min") {
    statusText = "인원 많은 순";
    statusClass = "bg-blue-500";
    bgClass = "bg-blue-200 text-blue-800 ";
  }

  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    // Calculate the time difference using the timeFormat function
    const timeDifference = timeFormat(updatedAt);

    // Set the formatted time
    setFormattedTime(timeDifference);
  }, [updatedAt]);

  return (
    <Link href={link} className="hover:bg-gray-100">
      <div className="flex px-4 border-b pb-5 pt-5 cursor-pointer justify-between">
        <div className="flex-row items-center">
          <div className="flex-row flex items-center justify-between space-x-1.5">
            <div className="w-10 px-1 pt-1 pb-1.5 rounded border border-red-700 justify-center items-center flex-row ">
              <div className="text-center text-red-700 text-[10px] font-bold font-['Apple SD Gothic Neo']">
                {statusText}
              </div>
            </div>
            <div className="w-13 px-1 pt-1 pb-1.5 rounded border border-red-700 flex justify-center items-center">
              <div className="text-center text-red-700 text-[10px] font-bold font-['Apple SD Gothic Neo']">
                {categoryText}
              </div>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="flex items-end justify-end">
                <img src="/num.png" alt="Number" className="w-5 h-5" />
              </div>
              <div className="text-zinc-500 text-sm font-['Apple SD Gothic Neo'] font-normal text-right">
                {room}/{maxNum}
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 ">{title}</h3>
            <span className="text-sm font-medium mt-1 text-gray-700">
              {content}
            </span>
            <span className="pt-1 text-xs text-gray-500">
              {userName} {formattedTime}
            </span>
          </div>
        </div>
        <div className="flex space-x-1.5 items-end justify-end">
          <img
            src="/profile2.png"
            alt="Image"
            className="w-20 h-20 border border-gray-200 rounded-md"
          />
        </div>
      </div>
    </Link>
  );
}
