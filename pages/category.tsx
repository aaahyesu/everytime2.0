import { useState } from "react";
import logo from "../public/logo.png";
import Link from "next/link";
import Layout from "@/components/navbar";

export default function attended() {
    return (
        <Layout hasTabBar canGoBack title="게시판">
            <div className = "w-full flex flex-col">
                <div className="w-11/12 h-44 border-2 rounded-lg border-grey mt-20 ml-4 mb-5 flex-col">
                    <div className="w-full justify-between flex flex-col">
                        <div className="flex flex-row">
                            <img src="writtenbyme.png" className="mt-3 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-3 ml-4 font-semibold">내가 쓴 글</div>
                        </div>
                        <div className="flex flex-row">
                            <img src="commentfeed.png" className="mt-3 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-2 ml-4 font-semibold">댓글 단 글</div>
                        </div>
                        <div className="flex flex-row">
                            <img src="scrapfeed.png" className="mt-3 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-2 ml-4 font-semibold">스크랩</div>
                        </div>
                        <div className="flex flex-row">
                            <img src="hotfeed.png" className="mt-3 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-2 ml-4 font-semibold">HOT 게시판</div>
                        </div>
                        <div className="flex flex-row">
                            <img src="bestfeed.png" className="mt-3 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-2 ml-4 font-semibold">BEST 게시판</div>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 h-36 border-2 rounded-lg border-grey mt-1 ml-4 mb-5 flex-col">
                    <div className="w-full justify-between flex flex-col">
                        <div className="flex flex-row">
                            <img src="todayeat.png" className="mt-3 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-2 ml-4 font-semibold">오늘의 학식</div>
                        </div>
                        <div className="flex flex-row"> 
                            <img src="lectureroom.png" className="mt-3 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-2 ml-4 font-semibold">강의실</div>
                        </div>
                        <div className="flex flex-row">
                            <img src="booklib.png" className="mt-3 ml-3"/>
                            <div className="w-26 h-5 text-l mt-2 ml-4 font-semibold">책방</div>
                        </div>
                        <div className="flex flex-row">
                            <img src="marketfeed.png" className="mt-3 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-2 ml-4 font-semibold">장터</div>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 h-auto border-2 rounded-lg border-grey mt-1 ml-4 mb-5 flex-col">
                    <div className="w-full justify-between flex flex-col">
                        <div className="flex flex-row">
                            <img src="feedpin.png" className="mt-2 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-1 ml-4 font-semibold">자유게시판</div>
                        </div>
                        <div className="flex flex-row mt-1"> 
                            <img src="feedpin.png" className="mt-2 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-1 ml-4 font-semibold">비밀게시판</div>
                        </div>
                        <div className="flex flex-row mt-1">
                            <img src="feedpin.png" className="mt-2 ml-3"/>
                            <div className="w-26 h-5 text-l mt-1 ml-4 font-semibold">새내기게시판</div>
                        </div>
                        <div className="flex flex-row mt-1">
                            <img src="feedpin.png" className="mt-2 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-1 ml-4 font-semibold">졸업생게시판</div>
                        </div>
                        <div className="flex flex-row mt-1">
                            <img src="feedpin.png" className="mt-2 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-1 ml-4 font-semibold">정보게시판</div>
                        </div>
                        <div className="flex flex-row mt-1 mb-1">
                            <img src="feedpin.png" className="mt-2 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-1 ml-4 font-semibold">시사, 이슈게시판</div>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 h-auto border-2 rounded-lg border-grey mt-1 ml-4 mb-5 flex-col">
                    <div className="w-full justify-between flex flex-col">
                        <div className="flex flex-row">
                            <img src="feedpin.png" className="mt-2 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-1 ml-4 font-semibold">연애, 성고민</div>
                        </div>
                        <div className="flex flex-row mt-1"> 
                            <img src="feedpin.png" className="mt-2 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-1 ml-4 font-semibold">오타쿠 게시판</div>
                        </div>
                        <div className="flex flex-row mt-1">
                            <img src="feedpin.png" className="mt-2 ml-3"/>
                            <div className="w-26 h-5 text-l mt-1 ml-4 font-semibold">성소수자 게시판</div>
                        </div>
                        <div className="flex flex-row mt-1 mb-1">
                            <img src="feedpin.png" className="mt-2 ml-3"/> 
                            <div className="w-26 h-5 text-l mt-1 ml-4 font-semibold">덕질 게시판</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}