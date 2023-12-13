import { useState } from "react";
import logo from "../public/logo.png";
import Link from "next/link";
import Layout from "@/components/navbar";

export default function attended() {
  return (
    <Layout head2 hasTabBar>
        <div className="">
        <img src="gradecalopt.png" className="mt-14 w-full h-full" />
      </div>
      <div className="w-full h-full">
        <img src="gradecal.png" className="w-full h-full" />
      </div>
    </Layout>
  );
}
