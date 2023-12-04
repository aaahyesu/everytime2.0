import type { NextPage } from "next";
import { PrismaClient } from "@prisma/client";
import Layout from "@/components/navbar";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <Layout hasTabBar title="한경대학교">
      <div className="bg-white flex-col">
        <div className="overflow-x-auto mt-20 mb-4">
          <div className="inline-flex">

            <div className="w-80 h-48 border-2 border-black ml-4 mr-4">
              <div className="flex flex-col">
                <div className="flex flex-row ml-3 mt-3">
                  <img className="" src="table.png"></img>
                  <div>
                    <div className="w-30 ml-2 text-xl font-bold">말하기와 글쓰기</div>
                    <div className="w-30 ml-2 text-xs text-red-600">1시간 19분 후 수업 끝</div>
                  </div>
                </div>
                <div className="font-bold ml-16 mt-6">말하기와 글쓰기 교제 <br /> 레포트 제출하기 <br /> 글쓰기 과제 제출하기</div>
              </div>
            </div>

            <div className="w-80 h-48 border-2 border-black ml-4 mr-4">
              <div className="flex flex-col">
                <div className="flex flex-row ml-3 mt-3">
                  <img className="" src="table.png"></img>
                  <div>
                    <div className="w-30 ml-2 text-xl font-bold">말하기와 글쓰기</div>
                    <div className="w-30 ml-2 text-xs text-red-600">1시간 19분 후 수업 끝</div>
                  </div>
                </div>
                <div className="font-bold ml-16 mt-6">말하기와 글쓰기 교제 <br /> 레포트 제출하기 <br /> 글쓰기 과제 제출하기</div>
              </div>
            </div>

            <div className="w-80 h-48 border-2 border-black ml-4 mr-4">
              <div className="flex flex-col">
                <div className="flex flex-row ml-3 mt-3">
                  <img className="" src="table.png"></img>
                  <div>
                    <div className="w-30 ml-2 text-xl font-bold">말하기와 글쓰기</div>
                    <div className="w-30 ml-2 text-xs text-red-600">1시간 19분 후 수업 끝</div>
                  </div>
                </div>
                <div className="font-bold ml-16 mt-6">말하기와 글쓰기 교제 <br /> 레포트 제출하기 <br /> 글쓰기 과제 제출하기</div>
              </div>
            </div>

            <div className="w-80 h-48 border-2 border-black ml-4 mr-4">
              <div className="flex flex-col">
                <div className="flex flex-row ml-3 mt-3">
                  <img className="" src="table.png"></img>
                  <div>
                    <div className="w-30 ml-2 text-xl font-bold">말하기와 글쓰기</div>
                    <div className="w-30 ml-2 text-xs text-red-600">1시간 19분 후 수업 끝</div>
                  </div>
                </div>
                <div className="font-bold ml-16 mt-6">말하기와 글쓰기 교제 <br /> 레포트 제출하기 <br /> 글쓰기 과제 제출하기</div>
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
        <div className ="w-11/12 h-44 border-2 border-grey ml-4 mb-5 flex-col">
          <div className="w-full justify-between flex flex-row">
            <div className="w-26 h-5 text-xl mt-4 ml-4 font-bold">즐겨찾는 게시판</div>
            <div className="text-red-600 mr-4 mt-5 w-18 h-5 text-sm">더보기 &gt;</div>
          </div>
        </div>
        <div className ="w-11/12 h-44 border-2 border-grey ml-4 mb-5 flex-col">
          <div className="w-full justify-between flex flex-row">
            <div className="w-26 h-5 text-xl mt-4 ml-4 font-bold">최근 모임</div>
            <div className="text-red-600 mr-4 mt-5 w-18 h-5 text-sm">더보기 &gt;</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
