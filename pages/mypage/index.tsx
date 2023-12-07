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
                    <div className="flex justify-center border-grey-300 rounded border-2 h-10 w-40 w-1/2">
                        <p className="justify-center" style = {{ fontSize: '20px'}}>매너학점</p>
                    </div>
                    <div className="flex justify-center border-grey-300 rounded border-2 h-10 w-40">
                        <p className="justify-center" style = {{ fontSize: '20px'}}>{credit}</p>
                    </div>
                </div>

                <div className="flex-col justify-self-center w-4/5">
                    <div className="flex h-8 w-75 justify-between mb-6 border-grey-300 rounded border-1">
                        <div className="ml-10 flex h-4 w-1/2">
                            <p className="" style = {{ fontSize: '16px'}}>참여한 모임</p>
                        </div>
                        <Link href="/mypage/attended">
                            <div className="flex justify-self-end">
                                <div className="bg-white text-gray-500" style = {{ fontSize: '16px'}}>전체 보기</div>
                            </div>
                        </Link> 
                    </div>
                    <div className="flex h-8 w-75 justify-between mb-6 border-grey-300 rounded border-1">
                        <div className="ml-10 flex h-4 w-1/2">
                            <p className="" style = {{ fontSize: '16px'}}>찜한 모임</p>
                        </div>
                        <Link href="/mypage/liked">
                            <div className="flex justify-self-end">
                                <div className="bg-white text-gray-500" style = {{ fontSize: '16px'}}>전체 보기</div>
                            </div>
                        </Link> 
                    </div>
                    <div className="flex h-8 w-75 justify-between border-grey-300 rounded border-1">
                        <div className="ml-10 flex h-4 w-1/2 justify-between">
                            <p className="" style = {{ fontSize: '16px'}}>최근 본 모임</p>
                        </div>
                        <Link href="/mypage/watched">
                            <div className="flex justify-self-end">
                                <div className="bg-white text-gray-500" style = {{ fontSize: '16px'}}>전체 보기</div>
                            </div>
                        </Link> 
                    </div>
                </div>
            </div>
    </Layout>
    );
}

























/*
profile pic
user_name
user_grade
user_department
user_level  
user_join
<div className="flex justify-left my-12" style={{ height: '100px' }}></div>
<div className="text-black-700 text-base font-normal pt-7 pl-2">
</div>


<div>
                        <img src={logo} alt="Logo" />
                        <h1>{name}</h1>
                        <p>{email}</p>
                        <p>{bio}</p>
                        <Link href="/edit-profile">
                                <a>Edit Profile</a>
                        </Link>
                </div>






<div className="flex justify-left my-12" style={{ height: '100px' }}>
                <img src="/profile.png" alt="description" className="rounded-full" style={{ width: '100px', height: '100px' }} />
                <div style={{ height: '100px' }}>
                    <h2 style={{ fontSize: '24px', margin: '26px 0' }}>{name}</h2>
                    <p style = {{ fontSize: '20px'}}>{grade}학년</p>
                    <p style = {{ fontSize: '20px'}}>{department}</p>
                </div>
            </div>
*/