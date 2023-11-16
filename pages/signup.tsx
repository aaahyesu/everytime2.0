import { useState } from "react";
import Link from "next/link";

export default function Enter() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === "userId") setUserId(value);
    else if (name === "userPw") setUserPw(value);
    else if (name === "userName") setUserName(value);
    else if (name === "email") setEmail(value);
    else if (name === "birthdate") setBirthdate(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 추가
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-wrap">
      <div className="w-full max-w-xs p-4">
        <div className="flex items-center justify-between my-12">
          <img src="/logo.png" alt="logo" className="inline-block w-14 h-14" />
          <h2 className="text-gray-700 text-base font-normal pl-5">
            회원가입을 통해
            <br />
            에브리타임을 시작하세요!
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
          <input
            type="text"
            name="userName"
            placeholder="이름"
            onChange={onChange}
            value={userName}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="이메일"
            onChange={onChange}
            value={email}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="date"
            name="birthdate"
            placeholder="생년월일"
            onChange={onChange}
            value={birthdate}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />
          <Link href="/">
            <button className="w-full p-2 bg-red-500 text-white rounded">
              로그인
            </button>
          </Link>
        </form>
        <div className="text-red-600 text-center mt-5 font-medium text-base">
          <span className="text-gray-600 font-light mr-2">
            이미 가입하셨나요?
          </span>
          <Link href="/login" className="underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
