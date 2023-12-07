import Layouts from "@/components/nav";
import type { NextPage } from "next";
import Link from "next/link";

const search: NextPage = () => {
  return (
    <Layouts navbar>
      <div className="bg-white flex flex-col items-center justify-between h-screen">
        <div className="w-full max-w-md mx-auto">
          {/* Search bar */}
          <div className="flex items-center justify-center py-5">
            <Link href="/club">
              <button aria-label="Back" className="mr-8">
                <img
                  src="https://file.rendit.io/n/e5GZzw0VXh5tyCsRIJHA.svg"
                  alt="Back"
                />
              </button>
            </Link>
            <div className="flex items-center bg-[#f2f2f2] rounded-lg pl-6">
              <img
                src="https://file.rendit.io/n/aU7rxKrviuqjCb0tCQuW.svg"
                alt="Search Icon"
                className="ml-1"
              />
              <input
                type="text"
                placeholder="키워드 입력"
                className="text-xl font-['Apple_SD_Gothic_Neo'] font-medium leading-[20px] text-[#dcdcdc] px-2 py-1 bg-transparent outline-none border-transparent"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
        {/* Bottom navigation bar */}
        <div className="w-full max-w-md pl-3">
          <div className="flex justify-between border-t border-[#dcdcdc]">
            {[
              "https://file.rendit.io/n/5ZiiJ8HlpjHiak4JVdQN.svg",
              "https://file.rendit.io/n/6yaibQn5O6rRDEqEZvLt.svg",
              "https://file.rendit.io/n/3Bl6u57fd3pIKGqtJRLz.svg",
              "https://file.rendit.io/n/Mmdh1meYRrmUUjNFBAX7.svg",
              "https://file.rendit.io/n/ye0S8102DAuPkDx0dLFk.svg",
            ].map((iconSrc, index) => (
              <button
                key={index}
                className="flex-1 text-center py-2"
                aria-label={`Navigation ${index + 1}`}
              >
                <img src={iconSrc} alt={`Icon ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default search;
