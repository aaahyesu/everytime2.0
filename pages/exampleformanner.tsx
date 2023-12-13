import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { PrismaClient } from "@prisma/client";
import Layout from "@/components/navbar";
import Link from "next/link";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Layout hasTabBar title="한경대학교">
      {showModal && (
        <div className="fixed bottom-10 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-80 h-auto">
            <div className="flex flex-row justify-between border-b-2">
              <button
                className="text-black text-2xl mb-4 font-bold"
                onClick={closeModal}
              >
                X
              </button>
              <p className="text-black text-lg font-bold mr-10 mb-4 mt-1">
                {" "}
                매너학점을 눌러주세요!
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mt-6 w-70 h-32 border-2 rounded-md flex flex-col">
                <div className="flex flex-row mb-2">
                  <img
                    src="/profile.png"
                    alt="description"
                    className="ml-3 mt-2 rounded-full"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <p className="ml-3 mt-4 text-black text-xl font-medium">
                    아차차
                  </p>
                  <select className="mt-2 ml-16 border-none">
                    <option value="1">A+</option>
                    <option value="2">A</option>
                    <option value="3">B+</option>
                    <option value="4">B</option>
                    <option value="5">C+</option>
                    <option value="6">C</option>
                    <option value="7">D+</option>
                    <option value="8">D</option>
                    <option value="9">F</option>
                  </select>
                </div>
                <div className="ml-3 w-64 h-14 bg-gray-200 rounded-md">
                  <p className="ml-2 mt-2">열심히 참여했음</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mt-6 w-70 h-32 border-2 rounded-md flex flex-col">
                <div className="flex flex-row mb-2">
                  <img
                    src="/profile.png"
                    alt="description"
                    className="ml-3 mt-2 rounded-full"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <p className="ml-3 mt-4 text-black text-xl font-medium">
                    오리오리
                  </p>
                  <select className="mt-2 ml-11 border-none">
                    <option value="1">A+</option>
                    <option value="2">A</option>
                    <option value="3">B+</option>
                    <option value="4">B</option>
                    <option value="5">C+</option>
                    <option value="6">C</option>
                    <option value="7">D+</option>
                    <option value="8">D</option>
                    <option value="9">F</option>
                  </select>
                </div>
                <div className="ml-3 w-64 h-14 bg-gray-200 rounded-md">
                  <p className="ml-2 mt-2">재밌고 분위기 띄어주심</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mt-6 w-70 h-32 border-2 rounded-md flex flex-col">
                <div className="flex flex-row mb-2">
                  <img
                    src="/profile.png"
                    alt="description"
                    className="ml-3 mt-2 rounded-full"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <p className="ml-3 mt-4 text-black text-xl font-medium">
                    꼬질멍
                  </p>
                  <select className="mt-2 ml-16 border-none">
                    <option value="1">A+</option>
                    <option value="2">A</option>
                    <option value="3">B+</option>
                    <option value="4">B</option>
                    <option value="5">C+</option>
                    <option value="6">C</option>
                    <option value="7">D+</option>
                    <option value="8">D</option>
                    <option value="9">F</option>
                  </select>
                </div>
                <div className="ml-3 w-64 h-14 bg-gray-200 rounded-md">
                  <p className="ml-2 mt-2">재미없어하는 티를 냄</p>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-md w-auto h-auto bg-red-700">
              <button
                className="w-auto h-auto ml-20 mt-2 bg-red-700 text-white text-xl mb-4 font-bold"
                onClick={closeModal}
              >
                학점 등록하기
              </button>
            </div>
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
                      문제해결프로젝트1
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
            <div className="w-26 h-5 text-base mt-2 ml-4 font-bold">스포츠</div>
            <div className="h-5 text-sm mt-2 text-gray-500 mr-6">
              즐겁게 공찰 사람람
            </div>
            <div className="h-5 text-sm mt-2 ml-2 mr-2 text-gray-500">
              4분 전
            </div>
          </div>
          <div className="w-full justify-between flex flex-row">
            <div className="w-26 h-5 text-base mt-2 ml-4 font-bold">밥친구</div>
            <div className="h-5 text-sm mt-2 text-gray-500 ml-4">
              오늘 학식같이 먹을 사람
            </div>
            <div className="h-5 text-sm mt-2 ml-2 mr-2 text-gray-500">
              36분 전
            </div>
          </div>
          <div className="w-full justify-between flex flex-row">
            <div className="w-26 h-5 text-base mt-2 ml-4 font-bold">
              봉사활동
            </div>
            <div className="h-5 text-sm mt-2 text-gray-500 ml-4">
              해외봉사 같이 신청할 사람
            </div>
            <div className="h-5 text-sm mt-2 ml-2 mr-2 text-gray-500">
              23분 전
            </div>
          </div>
          <div className="w-full justify-between flex flex-row">
            <div className="w-26 h-5 text-base mt-2 ml-4 font-bold">
              여가/여행
            </div>
            <div className="h-5 text-sm mt-2 text-gray-500">
              주말에 설경 찍으러 갈 분
            </div>
            <div className="h-5 text-sm mt-2 mr-2 text-gray-500">1시간 전</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
