import { useState } from "react";
import logo from "../public/logo.png";
import Link from "next/link";
import Layout from "@/components/navbar";

export default function attended() {
  return (
    <Layout hasTabBar head2>
      <div className="w-full h-full">
        <img src="schooltimetable.jpg" className="mt-10 w-full h-full" />
      </div>
    </Layout>
  );
}
