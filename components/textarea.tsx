import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  label?: string;
  name?: string;
  register: UseFormRegisterReturn;
  required: boolean;
  placeholder: string;
}

export default function TextArea({
  label,
  name,
  register,
  required,
  placeholder,
  ...rest
}: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 block text-sm font-bold text-gray-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        required={required}
        {...register}
        placeholder={placeholder}
        className="w-[325px] h-80 rounded-[10px] border border-zinc-300 flex-col justify-center items-center inline-flex text-zinc-300 text-lg font-medium font-['Apple SD Gothic Neo'] leading-tight text-center py-32 mt-5"
        rows={4}
        {...rest}
      />
    </div>
  );
}
