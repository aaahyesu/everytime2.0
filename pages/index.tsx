import type { NextPage } from "next";
import Layout from "@/components/navbar";

const Home: NextPage = () => {
  return (
    <Layout hasTabBar title="메인화면 💬">
      <div className="bg-white">
        <h1 className="text-black font-2xl">에브리타임 2.0</h1>
      </div>
    </Layout>
  );
};
export default Home;
