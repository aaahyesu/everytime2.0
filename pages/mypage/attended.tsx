import { useState } from "react";
import Layout from "@/components/navbar";

export default function Attended() {
  const [name, setName] = useState("김에타");
  const [grade, setgrade] = useState("2");
  const [department, setDepartment] = useState("경영학과");
  const [credit, setCredit] = useState("F");
  const [recruitment, setRecruitment] = useState("모집 중");
  const [wirter, setWirter] = useState("김에타");

  return (
    <Layout hasTabBar canGoBack title="참여한 모임">
      <div className="bg-white max-w-screen-sm w-96 flex flex-col">
        <div className="bg-white flex-row w-full mt-20 ">
          <ul id="attendMeeting" className="mb-4 w-80">
            <li className="">
              <div className="mx-9 justify-between w-80 h-24 border-2 border-black flex">
                <div className="w-40">
                  <p className="w-40" style={{ fontSize: "15px" }}>
                    {recruitment}
                  </p>
                </div>
                <div className="w-40">
                  <p className="w-40" style={{ fontSize: "15px" }}>
                    {wirter}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
