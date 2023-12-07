import type { NextPage } from "next";
import Layout from "@/components/navbar";
import { useForm } from "react-hook-form";
import useMutation from "@/libs/client/useMutation";
import Input from "@/components/input";
import { Service } from "@prisma/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TextArea from "@/components/textarea";
import Link from "next/link";

interface UploadServiceForm {
  title: String;
  content: String;
  category: String;
  maxNum: Number;
}

interface UploadServiceMutation {
  ok: boolean;
  service: Service;
}
const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadServiceForm>();

  const [uploadService, { loading, data }] =
    useMutation<UploadServiceMutation>("/api/services");

  const onValid = (data: UploadServiceForm) => {
    console.log(data);
    if (loading) return;
    uploadService(data);
  };
  useEffect(() => {
    if (data?.ok) {
      router.replace("/");
    }
  }, [data, router]);
  return (
    <Layout hasTabBar canGoBack title="모임 개설">
      <div className="mt-7"></div>
      <form className="px-8 py-4" onSubmit={handleSubmit(onValid)}>
        <div className="my-2 pt-6">
          <div className="flex items-center">
            <img
              src="/clubName.png"
              alt="category"
              className="w-10 h-10 mr-2"
            />
            <div className="px-3"></div>
            <Input
              register={register("title", { required: true })}
              required
              type="text"
              placeholder="모임 이름"
              name="title"
              kind="text"
              label={""}
            />
          </div>
        </div>

        <div className="py-3">
          <div className="flex items-center">
            <img
              src="/categoryList.png"
              alt="category"
              className="w-10 h-10 mr-2"
            />
            <div className="px-3"></div>
            <select
              {...register("category", { required: true })}
              className="w-[250px] rounded-lg border border-zinc-300 p-2 text-slate-500"
            >
              <option value="" disabled hidden>
                모임 분야
              </option>
              <option value="Sport">스포츠</option>
              <option value="Trip">여행/여가</option>
              <option value="Study">스터디</option>
              <option value="Culture">문화/생활</option>
              <option value="Volunteer">봉사활동</option>
              <option value="Club">동아리</option>
              <option value="Food">밥친구</option>
              <option value="Contest">공모전/대외활동</option>
            </select>
          </div>
        </div>

        <div className="py-[4px]">
          <div className="flex items-center">
            <img
              src="/personal.png"
              alt="category"
              className="w-10 h-10 mr-2"
            />
            <div className="px-3"></div>
            <Input
              register={register("maxNum", { required: true })}
              required
              type="number"
              placeholder="모임 인원(100명 제한)"
              name="maxNum"
              kind="number"
              label={""}
            />
          </div>
        </div>

        <TextArea
          register={register("content", { required: true })}
          required
          label=""
          placeholder="모임설명"
          name="content"
        />
        <Link href="#">
          <div className="flex justify-center">
            <div className="flex-col-2 flex">
              <button className=" mt-5 w-[320px] flex-1  border-transparent bg-white px-10 py-3 text-lg font-bold text-black rounded-[10px] border border-zinc-300 justify-center items-center inline-flex">
                모임 만들기
              </button>
            </div>
          </div>
        </Link>
      </form>
    </Layout>
  );
};

export default Upload;
