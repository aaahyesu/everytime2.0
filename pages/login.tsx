import { useState } from "react";
import logo from "../public/logo.png";
import Link from "next/link";

export default function Enter() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === "userId") setUserId(value);
    else if (name === "userPw") setUserPw(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 추가
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-wrap">
      <div className="w-full max-w-xs p-4">
        <div className="flex justify-between my-12">
          <img src="/logo.png" alt="logo" className="inline-block w-12 h-14" />
          <h2 className="text-gray-700 text-base font-normal pt-7 pl-2">
            지금 <strong>에브리타임</strong>을 시작하세요!
          </h2>
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="userId"
            placeholder="아이디"
            onChange={onChange}
            value={userId}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name="userPw"
            placeholder="비밀번호"
            onChange={onChange}
            value={userPw}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />
          <button className="w-full p-2 bg-red-500 text-white rounded">
            로그인
          </button>
        </form>
        <div className="text-red-600 text-center mt-5 font-medium text-base">
          <span className="text-gray-600 font-light mr-2">
            에브리타임에 처음이신가요?
          </span>
          <Link href="/signup" className="underline">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
