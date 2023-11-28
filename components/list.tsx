import Link from "next/link";

interface ListProps {
  id: number;
  title: string;
  liked: number;
  link: string;
  room: number;
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
  id,
  title,
  liked,
  room,
  link,
  category,
  status,
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

  return (
    <Link href={link} className="hover:bg-gray-100">
      <div className="flex space-x-3">
        <div className="flex flex-col pt-5">
          <div className="flex items-center space-x-2">
            <span className="mb-1 text-[20px] font-bold text-black">
              {title}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span
          className={`mr-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${bgClass}`}
        >
          <span className={`mr-1 h-2 w-2 rounded-full ${categoryClass}`}></span>
          {categoryText}
        </span>
        <div className="text-5 flex flex-grow justify-end space-x-0.5  text-gray-600">
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          <span>{liked}</span>
        </div>
        <div className="text-5 flex items-center space-x-0.5  text-gray-600">
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          <span>{room}</span>
        </div>
      </div>
      <div className="border-b border-gray-300 pb-4"></div>
    </Link>
  );
}
