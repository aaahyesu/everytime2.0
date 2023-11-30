import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useMutation from "@/libs/client/useMutation";
import Input from "@/components/input";
import Link from "next/link";

interface MutationResult {
  ok: boolean;
}

interface EnterForm {
  email?: string;
  password?: string;
  name?: string;
  userId: string;
  birth: string;
}

const SignUp: NextPage = () => {
  const router = useRouter();
  const [enter, { loading, data, error }] =
    useMutation<MutationResult>("/api/users/enter");
  const { register, handleSubmit } = useForm<EnterForm>();
  const onValid = (validForm: EnterForm) => {
    if (loading) return;
    enter(validForm);
  };
  useEffect(() => {
    if (data?.ok) {
      router.replace(`/`);
    }
  }, [data, router]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-wrap">
      <div className="w-full max-w-xs p-4">
        <div className="flex items-center justify-between my-12">
          <img src="/logo.png" alt="logo" className="inline-block w-14 h-14" />
          <h2 className="text-gray-700 text-base font-normal pl-5">
            회원가입을 통해
            <br />
            에브리타임을 시작하세요!
          </h2>
        </div>

        <form onSubmit={handleSubmit(onValid)}>
          <div className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500">
            <Input
              register={register("userId", { required: true })}
              type="text"
              name="userId"
              placeholder="아이디"
              label="아이디"
              kind="text"
              required
            />

            <Input
              register={register("password", { required: true })}
              type="password"
              name="password"
              placeholder="비밀번호"
              label="아이디"
              kind="text"
              required
            />
            <Input
              register={register("name", { required: true })}
              type="text"
              name="userName"
              placeholder="이름"
              label="아이디"
              kind="text"
              required
            />
            <Input
              register={register("email", { required: true })}
              type="email"
              name="email"
              placeholder="이메일"
              label="아이디"
              kind="text"
              required
            />
            <Input
              register={register("birth", { required: true })}
              type="date"
              name="birth"
              placeholder="생년월일"
              label="아이디"
              kind="text"
              required
            />
          </div>

          <button className="w-full p-2 bg-red-500 text-white rounded">
            로그인
          </button>
        </form>
        <div className="text-red-600 text-center mt-5 font-medium text-base">
          <span className="text-gray-600 font-light mr-2">
            이미 가입하셨나요?
          </span>
          <Link href="/login" className="underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
