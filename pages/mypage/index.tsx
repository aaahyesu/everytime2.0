import { useState } from "react";
import logo from "../public/logo.png";
import Link from "next/link";
import Layout from "@/components/navbar";
export default function Profile() {
    const [name, setName] = useState("김에타");
    const [grade, setgrade] = useState("2");
    const [department, setDepartment] = useState("경영학과");
    const [credit, setCredit] = useState("F");
    
    return (
        <Layout hasTabBar canGoBack title="프로필">
            <div className="bg-white mt-10 w-full flex flex-col">
                <div className="flex justify-left mx-8 my-10" style={{ height: '100px' }}>
                    <img src="/profile.png" alt="description" className="rounded-full" style={{ width: '100px', height: '100px' }}/>
                    <div className="flex-col mx-6">
                        <h2 style={{ fontSize: '24px'}}>{name}</h2>
                        <p style = {{ fontSize: '20px', marginTop: '26px 0'}}>{grade}학년</p>
                        <p style = {{ fontSize: '20px', marginTop: '10px 0'}}>{department}</p>
                    </div>
                </div>

                <div className="flex justify-center mb-10">
                    <img src="/mannerpoint.png"/>
                </div>

                <div className="flex-col justify-self-center">
                    <div className="flex h-8 w-75 justify-between mb-2 border-grey-300 rounded border-1">
                        <div className="ml-10 flex h-4 w-1/2">
                            <p className="" style = {{ fontSize: '16px'}}>참여한 모임</p>
                        </div>
                        <Link href="/mypage/attended">
                            <div className="flex justify-self-end">
                                <div className="bg-white text-gray-500 mr-10" style = {{ fontSize: '16px'}}>전체 보기</div>
                            </div>
                        </Link> 
                    </div>
                    <div className="overflow-x-scroll mb-2 h-30">
                        <div className="inline-flex ml-5">
                            <div className="h-24 w-24 ml-3 mr-3 justify-center">
                                <img className="rounded-lg ml-2 h-24 w-24" src="/liked2.jpg"></img>
                            </div>
                            <div className="h-24 w-24 text-center ml-3 mr-3 justify-center">
                                <img className="rounded-lg ml-2 h-24 w-24" src="/liked7.jpg"></img>
                            </div>
                            <div className="h-24 w-24 text-center ml-3 mr-3 justify-center">
                                <img className="rounded-lg ml-2 h-24 w-24" src="/liked3.jpg"></img>
                            </div>  
                            <div className="h-24 w-24 text-center ml-3 mr-3 justify-center">
                                <img className="rounded-lg ml-2 h-24 w-24" src="/liked4.jpg"></img>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-8 w-75 justify-between mb-2 border-grey-300 rounded border-1">
                        <div className="ml-10 flex h-4 w-1/2">
                            <p className="" style = {{ fontSize: '16px'}}>찜한 모임</p>
                        </div>
                        <Link href="/mypage/liked">
                            <div className="flex justify-self-end">
                                <div className="bg-white text-gray-500 mr-10" style = {{ fontSize: '16px'}}>전체 보기</div>
                            </div>
                        </Link> 
                    </div>
                    <div className="overflow-x-scroll mb-2 h-30">
                        <div className="inline-flex ml-5">
                            <div className="h-24 w-24 ml-3 mr-3 justify-center">
                                <img className="rounded-lg ml-2 h-24 w-24" src="/liked6.jpg"></img>
                            </div>
                            <div className="h-24 w-24 text-center ml-3 mr-3 justify-center">
                                <img className="rounded-lg ml-2 h-24 w-24" src="/liked2.jpg"></img>
                            </div>
                            <div className="h-24 w-24 text-center ml-3 mr-3 justify-center">
                                <img className="rounded-lg ml-2 h-24 w-24" src="/liked1.jpg"></img>
                            </div>
                            <div className="h-24 w-24 text-center ml-3 mr-3 justify-center">
                                <img className="rounded-lg ml-2 h-24 w-24" src="/liked5.jpg"></img>
                            </div> 
                        </div>
                    </div>
                    <div className="flex h-8 w-75 justify-between border-grey-300 rounded border-1">
                        <div className="ml-10 flex h-4 w-1/2 justify-between">
                            <p className="" style = {{ fontSize: '16px'}}>최근 본 모임</p>
                        </div>
                        <Link href="/mypage/watched">
                            <div className="flex justify-self-end">
                                <div className="bg-white text-gray-500 mr-10" style = {{ fontSize: '16px'}}>전체 보기</div>
                            </div>
                        </Link> 
                    </div>
                    <div className="overflow-x-scroll mb-2 h-30">
                        <div className="inline-flex ml-5">
                            <div className="h-24 w-24 ml-3 mr-3 justify-center">
                                <img className="rounded-lg ml-2 h-24 w-24" src="/liked7.jpg"></img>
                            </div>
                            <div className="h-24 w-24 text-center ml-3 mr-3 justify-center">
                                <img className="rounded-lg ml-2 h-24 w-24" src="/liked3.jpg"></img>
                            </div>
                            <div className="h-24 w-24 text-center ml-3 mr-3 justify-center">
                                <img className="rounded-lg ml-2 h-24 w-24" src="/liked5.jpg"></img>
                            </div>
                            <div className="h-24 w-24 text-center ml-3 mr-3 justify-center">
                                <img className="rounded-lg ml-2 h-24 w-24" src="/liked6.jpg"></img>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
    </Layout>
    );
}