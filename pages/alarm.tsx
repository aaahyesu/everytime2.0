import { useState } from "react";
import logo from "../public/logo.png";
import Link from "next/link";
import Layout from "@/components/navbar";

export default function attended() {
    

    return (
        <Layout hasTabBar canGoBack title="쪽지함">
            <div className = "w-full flex flex-col">
                <div className="mt-12 w-full h-full flex flex-col">
                    <div className="mt-4 w-4/5 ml-10 h-20 rounded-md border-2 border-color-grey-500">
                        <div className="flex flex-row h-8 justify-between">
                            <div className="ml-2 mt-2 font-bold">
                                익명
                            </div>
                            <div className="mt-3 mr-2 text-xs text-gray-500">
                                11/22 12:25
                            </div>
                        </div>
                        <div className="text-xs mt-1 ml-2 font-medium">
                            안녕하세요 북극 여행 참여할 수 있을까요?
                        </div>
                    </div>

                    <div className="mt-4 w-4/5 ml-10 h-20 rounded-md border-2 border-color-grey-500">
                        <div className="flex flex-row h-8 justify-between">
                            <div className="ml-2 mt-2 font-bold">
                                익명
                            </div>
                            <div className="mt-3 mr-2 text-xs text-gray-500">
                                11/21 16:32
                            </div>
                        </div>
                        <div className="text-xs mt-1 ml-2 font-medium">
                            감사합니다! 잘쓰겠습니다.
                        </div>
                    </div>

                    <div className="mt-4 w-4/5 ml-10 h-20 rounded-md border-2 border-color-grey-500">
                        <div className="flex flex-row h-8 justify-between">
                            <div className="ml-2 mt-2 font-bold">
                                익명
                            </div>
                            <div className="mt-3 mr-2 text-xs text-gray-500">
                                11/21 09:56
                            </div>
                        </div>
                        <div className="text-xs mt-1 ml-2 font-medium">
                            그럼 나래관 앞에서 뵐게여!
                        </div>
                    </div>

                    <div className="mt-4 w-4/5 ml-10 h-20 rounded-md border-2 border-color-grey-500">
                        <div className="flex flex-row h-8 justify-between">
                            <div className="ml-2 mt-2 font-bold">
                                익명
                            </div>
                            <div className="mt-3 mr-2 text-xs text-gray-500">
                                11/18 13:25
                            </div>
                        </div>
                        <div className="text-xs mt-1 ml-2 font-medium">
                            오늘 점심 잘먹었어요.
                        </div>
                    </div>

                    <div className="mt-4 w-4/5 ml-10 h-20 rounded-md border-2 border-color-grey-500">
                        <div className="flex flex-row h-8 justify-between">
                            <div className="ml-2 mt-2 font-bold">
                                익명
                            </div>
                            <div className="mt-3 mr-2 text-xs text-gray-500">
                                11/17 22:25
                            </div>
                        </div>
                        <div className="text-xs mt-1 ml-2 font-medium">
                            아 오늘 축구재밌었어요
                        </div>
                    </div>

                    <div className="mt-4 w-4/5 ml-10 h-20 rounded-md border-2 border-color-grey-500">
                        <div className="flex flex-row h-8 justify-between">
                            <div className="ml-2 mt-2 font-bold">
                                익명
                            </div>
                            <div className="mt-3 mr-2 text-xs text-gray-500">
                                11/12 20:25
                            </div>
                        </div>
                        <div className="text-xs mt-1 ml-2 font-medium">
                            2학기에 스키장 가는걸로하겠습니다.
                        </div>
                    </div>

                    <div className="mt-4 w-4/5 ml-10 h-20 rounded-md border-2 border-color-grey-500">
                        <div className="flex flex-row h-8 justify-between">
                            <div className="ml-2 mt-2 font-bold">
                                익명
                            </div>
                            <div className="mt-3 mr-2 text-xs text-gray-500">
                                10/29 14:45
                            </div>
                        </div>
                        <div className="text-xs mt-1 ml-2 font-medium">
                            이번에 공모전 참여하는걸로 하겠습니다.
                        </div>
                    </div>

                    <div className="mt-4 w-4/5 ml-10 h-20 rounded-md border-2 border-color-grey-500">
                        <div className="flex flex-row h-8 justify-between">
                            <div className="ml-2 mt-2 font-bold">
                                익명
                            </div>
                            <div className="mt-3 mr-2 text-xs text-gray-500">
                                10/03 18:42
                            </div>
                        </div>
                        <div className="text-xs mt-1 ml-2 font-medium">
                            네 알겠습니다 감사해요!
                        </div>
                    </div>

                    <div className="mt-4 w-4/5 ml-10 h-20 rounded-md border-2 border-color-grey-500">
                        <div className="flex flex-row h-8 justify-between">
                            <div className="ml-2 mt-2 font-bold">
                                익명
                            </div>
                            <div className="mt-3 mr-2 text-xs text-gray-500">
                                09/22 15:25
                            </div>
                        </div>
                        <div className="text-xs mt-1 ml-2 font-medium">
                            네 알겠습니다.
                        </div>
                    </div>

                    <div className="mt-4 w-4/5 ml-10 h-20 rounded-md border-2 border-color-grey-500">
                        <div className="flex flex-row h-8 justify-between">
                            <div className="ml-2 mt-2 font-bold">
                                익명
                            </div>
                            <div className="mt-3 mr-2 text-xs text-gray-500">
                                09/25 22:25
                            </div>
                        </div>
                        <div className="text-xs mt-1 ml-2 font-medium">
                            내일 밥 드실거에요?
                        </div>
                    </div>

                    <div className="mt-4 w-4/5 ml-10 h-20 rounded-md border-2 border-color-grey-500">
                        <div className="flex flex-row h-8 justify-between">
                            <div className="ml-2 mt-2 font-bold">
                                익명
                            </div>
                            <div className="mt-3 mr-2 text-xs text-gray-500">
                                09/01 11:25
                            </div>
                        </div>
                        <div className="text-xs mt-1 ml-2 font-medium">
                            네고 가능할까요?
                        </div>
                    </div>

                    <div className="mt-4 w-4/5 ml-10 h-20 rounded-md border-2 border-color-grey-500">
                        <div className="flex flex-row h-8 justify-between">
                            <div className="ml-2 mt-2 font-bold">
                                익명
                            </div>
                            <div className="mt-3 mr-2 text-xs text-gray-500">
                                08/22 12:25
                            </div>
                        </div>
                        <div className="text-xs mt-1 ml-2 font-medium">
                            죄송해요 지원신청 마감했습니다.
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
}