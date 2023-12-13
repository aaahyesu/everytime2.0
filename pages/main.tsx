import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Layout from "@/components/navbar";
import Link from "next/link";
import List from "@/components/list";
import useSWR from "swr";
import { Service } from "@prisma/client";
import services from "./api/services";

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
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  enum Category {
    Sport,
    Trip,
    Study,
    Culture,
    Volunteer,
    Club,
    Food,
    Contest,
    Null,
  }

  // Assuming you have this function defined somewhere in your code
  function convertCategoryToKorean(category: string | null) {
    switch (category) {
      case "Sport":
        return "스포츠";
      case "Trip":
        return "여행/여가";
      case "Study":
        return "스터디";
      case "Volunteer":
        return "봉사 활동";
      case "Culture":
        return "문화/여가";
      case "Club":
        return "동아리";
      case "Food":
        return "밥 친구";
      case "Contest":
        return "공모전/대외활동";
      default:
        return category; // Return the original category if not found in the translation
    }
  }

  const getTimeDifference = (updatedAt: Date): string => {
    const currentTime = new Date();
    const updatedTime = new Date(updatedAt);

    const difference = Math.floor(
      (currentTime.getTime() - updatedTime.getTime()) / 1000
    ); // in seconds

    // Calculate time in seconds, minutes, hours, or days
    const seconds = difference;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}일 전`;
    } else if (hours > 0) {
      return `${hours}시간 전`;
    } else if (minutes > 0) {
      return `${minutes}분 전`;
    } else {
      return `${seconds}초 전`;
    }
  };

  return (
    <Layout hasTabBar head3>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <img className="w-80" src="/popup.png"></img>
            <button
              className="mt-6 absolute bottom-100 ml-32 text-white text-lg font-bold"
              onClick={closeModal}
            >
              X Close
            </button>
          </div>
        </div>
      )}
      <div className="bg-white flex-col">
        <div className="overflow-x-auto mt-20 mb-4">
          <div className="inline-flex">
            <div className="w-80 h-48 border-2 border-grey-400 rounded-lg ml-4 mr-4">
              <div className="flex flex-col">
                <div className="flex flex-row ml-4 mt-4">
                  <img className="" src="table.png"></img>
                  <div>
                    <div className="w-30 ml-2 text-xl font-bold">
                      말하기와 글쓰기
                    </div>
                    <div className="w-30 ml-2 text-xs text-red-600">
                      1시간 19분 후 수업 끝
                    </div>
                  </div>
                </div>
                <div className="font-bold-l ml-16 mt-6">
                  말하기와 글쓰기 교제 <br /> 레포트 제출하기 <br /> 글쓰기 과제
                  제출하기
                </div>
              </div>
            </div>

            <div className="w-80 h-48 border-2 border-grey-400 rounded-lg ml-4 mr-4">
              <div className="flex flex-col">
                <div className="flex flex-row ml-4 mt-4">
                  <img className="" src="table.png"></img>
                  <div>
                    <div className="w-30 ml-2 text-xl font-bold">
                      문제해결프로제트1
                    </div>
                    <div className="w-30 ml-2 text-xs text-red-600">
                      3시간 49분 후 수업 끝
                    </div>
                  </div>
                </div>
                <div className="font-bold-l ml-16 mt-6">
                  {" "}
                  레포트 제출하기 <br /> define 단계 정리
                </div>
              </div>
            </div>

            <div className="w-80 h-48 border-2 border-grey-400 rounded-lg ml-4 mr-4">
              <div className="flex flex-col">
                <div className="flex flex-row ml-4 mt-4">
                  <img className="" src="table.png"></img>
                  <div>
                    <div className="w-30 ml-2 text-xl font-bold">
                      웹프로그래밍
                    </div>
                    <div className="w-30 ml-2 text-xs text-red-600">
                      2시간 19분 후 수업 끝
                    </div>
                  </div>
                </div>
                <div className="font-bold-l ml-16 mt-6">
                  웹프로그래밍 교제 <br /> MashUp 코드 제출하기 <br />
                  MashUp 설명레포트 제출하기
                </div>
              </div>
            </div>

            <div className="w-80 h-48 border-2 border-grey-400 rounded-lg ml-4 mr-4">
              <div className="flex flex-col">
                <div className="flex flex-row ml-4 mt-4">
                  <img className="" src="table.png"></img>
                  <div>
                    <div className="w-30 ml-2 text-xl font-bold">
                      창의와 소통
                    </div>
                    <div className="w-30 ml-2 text-xs text-red-600">
                      4시간 49분 후 수업 끝
                    </div>
                  </div>
                </div>
                <div className="font-bold-l ml-16 mt-6">
                  레포트 제출하기 <br /> 교제 요약본 제출하기
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-scroll mt-4 mb-2 h-24">
          <div className="inline-flex h">
            <div className="h-16 w-16 ml-3 mr-3 justify-center">
              <Link href="https://www.hknu.ac.kr/kor/index.do?main=Y">
                <img className="ml-2" src="/schoolBanner/schoolHome.png"></img>
                <div className="text-center font-sm">학교홈</div>
              </Link>
            </div>
            <div className="h-16 w-16 text-center ml-3 mr-3 justify-center">
              <Link href="https://www.hknu.ac.kr/kor/145/subview.do">
                <img className="ml-2" src="/schoolBanner/schoolEvent.png"></img>
                <div className="text-center font-sm">학사일정</div>
              </Link>
            </div>
            <div className="h-16 w-16 text-center ml-3 mr-3 justify-center">
              <Link href="https://www.hknu.ac.kr/kor/145/subview.do">
                <img className="ml-2" src="/schoolBanner/schoolNoti.png"></img>
                <div className="text-center font-sm">학사공지</div>
              </Link>
            </div>
            <div className="h-16 w-16 text-center ml-3 mr-3 justify-center">
              <Link href="https://lib.hknu.ac.kr/">
                <img className="ml-2" src="/schoolBanner/schoolLib.png"></img>
                <div className="text-center font-sm">도서관</div>
              </Link>
            </div>
            <div className="h-16 w-16 text-center ml-3 mr-3 justify-center">
              <Link href="https://mail.hknu.ac.kr/index.html?sso=ok">
                <img className="ml-2" src="/schoolBanner/schoolMail.png"></img>
                <div className="text-center font-sm ">웹메일</div>
              </Link>
            </div>
            <div className="h-16 w-16 text-center ml-3 mr-3 justify-center">
              <Link href="https://www.hknu.ac.kr/kor/176/subview.do">
                <img className="ml-2" src="/schoolBanner/schoolDiet.png"></img>
                <div className="text-center font-sm ">학생식당</div>
              </Link>
            </div>
            <div className="h-16 w-16 text-center ml-3 mr-3 justify-center">
              <Link href="https://www.hknu.ac.kr/kor/222/subview.do">
                <img className="ml-2" src="/schoolBanner/schoolCom.png"></img>
                <div className="text-center font-sm ">통학버스</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-11/12 h-44 border-2 rounded-lg border-grey ml-4 mb-5 flex-col">
          <div className="w-full justify-between flex flex-row">
            <div className="w-26 h-5 text-xl mt-4 ml-4 font-bold">
              즐겨찾는 게시판
            </div>
            <div className="text-red-600 mr-4 mt-5 w-18 h-5 text-sm">
              더보기 &gt;
            </div>
          </div>
          <div className="w-full justify-between flex flex-row">
            <div className="w-26 h-5 text-base mt-2 ml-4 font-bold">
              자유게시판
            </div>
            <div className="h-5 text-sm mt-2 text-gray-500 mr-6">
              설문조사 부탁드립니다.
            </div>
            <div className="h-5 text-sm mt-2 ml-2 mr-2 text-gray-500">
              1분 전
            </div>
          </div>
          <div className="w-full justify-between flex flex-row">
            <div className="w-26 h-5 text-base mt-2 ml-4 font-bold">
              비밀게시판
            </div>
            <div className="h-5 text-sm mt-2 text-gray-500 ml-3">
              말 예쁘게하기 챌린지 1일차
            </div>
            <div className="h-5 text-sm mt-2 ml-2 mr-2 text-gray-500">
              51분 전
            </div>
          </div>
          <div className="w-full justify-between flex flex-row">
            <div className="w-26 h-5 text-base mt-2 ml-4 font-bold">
              장터게시판
            </div>
            <div className="h-5 text-sm mt-2 text-gray-500 mr-1">
              에어팟 프로 2세대 오른쪽
            </div>
            <div className="h-5 text-sm mt-2 ml-2 mr-2 text-gray-500">
              13분 전
            </div>
          </div>
          <div className="w-full justify-between flex flex-row">
            <div className="w-26 h-5 text-base mt-2 ml-4 font-bold">
              정보게시판
            </div>
            <div className="h-5 text-sm mt-2 text-gray-500 ml-1">
              한경국립대학교 학생역량진
            </div>
            <div className="h-5 text-sm mt-2 mr-2 text-gray-500">2시간 전</div>
          </div>
        </div>
        <div className="w-11/12 h-52 border-2 rounded-lg border-grey ml-4 mb-5 flex-col">
          <div className="w-full justify-between flex flex-row">
            <div className="w-26 h-5 text-xl mt-4 ml-4 font-bold">
              최근 모임
            </div>
            <Link href="/club">
              <div className="text-red-600 mr-4 mt-5 w-18 h-5 text-sm">
                더보기 &gt;
              </div>
            </Link>
          </div>
          {data?.services.slice(-5).map((item, index) => (
            <div key={index} className="w-full justify-between flex flex-row">
              <div className="w-26 h-5 text-base mt-2 ml-4 font-bold">
                {convertCategoryToKorean(item.category)}
              </div>
              <div className="h-5 text-sm mt-2 text-gray-500 ml-4">
                {item.title}
              </div>
              <div className="h-5 text-sm mt-2 ml-2 mr-2 text-gray-500">
                {getTimeDifference(item.updatedAt)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
