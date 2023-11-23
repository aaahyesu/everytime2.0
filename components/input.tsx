import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "number" | "textArea" | "select"; // "select" 타입 추가
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
  placeholder: string;
  maxLength?: number;
  minLength?: number;
  options?: string[]; // 선택 옵션을 받을 배열 추가
}

export default function Input({
  label,
  name,
  kind,
  register,
  type,
  required,
  placeholder,
  options, // 선택 옵션을 받아옴
}: InputProps) {
  return (
    <div>
      <label
        className="mb-1 block text-sm font-bold text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      {kind === "text" ? (
        <div className="flex rounded-md shadow-sm">
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            placeholder={placeholder}
            className="w-[250px] appearance-none rounded-lg border border-zinc-300 px-3 py-2 focus:border-black focus:outline-none"
          />
        </div>
      ) : null}
      {kind === "textArea" ? (
        <input
          id={name}
          required={required}
          {...register}
          type={type}
          className="w-[250px] h-10 pl-[21px] pr-[154px] pt-3 pb-2 rounded-[10px] border border-zinc-300 justify-start items-center inline-flex"
        />
      ) : null}
      {kind === "number" ? (
        <div className="flex rounded-md shadow-sm">
          <input
            id={name}
            required={required}
            placeholder={placeholder}
            {...register}
            type={type}
            className="w-[250px] appearance-none rounded-lg border border-zinc-300 px-3 py-2 focus:border-black focus:outline-none"
          />
        </div>
      ) : null}

      {kind === "select" && options ? ( // "select" 타입일 때 처리
        <select
          id={name}
          required={required}
          {...register}
          className="w-250px appearance-none rounded-lg border border-gray-400 px-3 py-2 shadow-sm focus:border-black focus:outline-none "
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
}
