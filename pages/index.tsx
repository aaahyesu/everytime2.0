import type { NextPage } from "next";
import { PrismaClient } from "@prisma/client";
import Layout from "@/components/navbar";

const Home: NextPage = () => {
  return (
    <Layout hasTabBar title="한경대학교">
      <div className="bg-white flex-col">
        <div className="inline-flex overflow-x-auto mt-20 mb-4">
          <div className="w-80 h-44 border-2 border-black ml-4 mr-4"></div>
          <div className="w-80 h-44 border-2 border-black ml-4 mr-4"></div>
          <div className="w-80 h-44 border-2 border-black ml-4 mr-4"></div>
          <div className="w-80 h-44 border-2 border-black ml-4 mr-4"></div>
        </div>
        <div className="inline-flex overflow-x-auto mt-20 mb-4">
          <div className="w-80 h-44 border-2 border-black ml-4 mr-4"></div>
          <div className="w-80 h-44 border-2 border-black ml-4 mr-4"></div>
          <div className="w-80 h-44 border-2 border-black ml-4 mr-4"></div>
          <div className="w-80 h-44 border-2 border-black ml-4 mr-4"></div>
        </div>

        <div className="snap-center overflow-x-scroll-x">
          <div className="flex snap-align-start">
            <div className="ml-10 flex h-4 w-1/2 justify-between"style={{ width: '48px', height: '62px' }}>
              <p style={{ width: '48px', height: '48px' }}>
                <img src="/schoolBanner/schoolHome.png"></img>
              </p>
            </div>
            <div className="ml-10 flex h-4 w-1/2 justify-between" style={{ width: '48px', height: '62px' }}>
              <p style={{ width: '48px', height: '48px' }}>
                <img src="/schoolBanner/schoolMail.png"></img>
              </p>
            </div>
            <div className="ml-10 flex h-4 w-1/2 justify-between" style={{ width: '48px', height: '62px' }}>
              <p style={{ width: '48px', height: '48px' }}>
                <img src="/schoolBanner/schoolNoti.png"></img>
              </p>
            </div>
            <div className="ml-10 flex h-4 w-1/2 justify-between" style={{ width: '48px', height: '62px' }}>
              <p style={{ width: '48px', height: '48px' }}>
                <img src="/schoolBanner/schoolEvent.png"></img>
              </p>
            </div>
            <div className="ml-10 flex h-4 w-1/2 justify-between" style={{ width: '48px', height: '62px' }}>
              <p style={{ width: '48px', height: '48px' }}>
                <img src="/schoolBanner/schoolHome.png"></img>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
