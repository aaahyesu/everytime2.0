import { ReactChild, Suspense } from "react";

// util
import { cls } from "@/libs/client/utils";

type Props = {
  text: string | ReactChild;
  className?: string;
  $primary?: boolean;
  $loading?: boolean;
  [props: string]: any;
};

const Button = ({ text, className, $primary, $loading, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cls(
        $primary
          ? "rounded-lg border border-zinc-300 bg-red-700 py-3 font-medium text-white hover:bg-gray-800 focus:outline-none"
          : "",
        className ? className : ""
      )}
    >
      {$loading ? (
        <Suspense fallback={<span>Loading...</span>}></Suspense>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
