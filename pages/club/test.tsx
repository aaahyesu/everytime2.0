import type { NextPage } from "next";

const Test: NextPage = () => {
  return (
    <div className="w-96 h-96 relative bg-white">
      <div className="w-96 h-8 left-0 top-[810px] absolute">
        <div className="w-96 h-8 left-0 top-0 absolute bg-stone-50 bg-opacity-95 backdrop-blur-lg flex-col justify-start items-center inline-flex">
          <div className="w-96 h-8 px-32 pt-5 pb-2 justify-center items-center inline-flex">
            <div className="w-32 h-1 bg-black rounded-full"></div>
          </div>
        </div>
        <div className="w-96 py-1.5 left-0 top-0 absolute bg-neutral-200 justify-center items-center inline-flex">
          <div className="text-center text-black text-base font-normal font-['Inter'] leading-tight">
            푸터...?
          </div>
        </div>
      </div>
      <div className="w-96 h-12 left-0 top-0 absolute justify-center items-center inline-flex">
        <div className="w-96 h-12 relative flex-col justify-start items-start flex">
          <div className="w-96 h-12 bg-stone-50 bg-opacity-95 border-b border-zinc-700 border-opacity-40 backdrop-blur-lg flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="w-96 h-12 relative">
              <div className="w-14 h-5 pt-px left-[27px] top-[14px] absolute rounded-3xl justify-center items-center inline-flex">
                <div className="w-14 h-5 text-center text-black text-base font-semibold font-['SF Pro Text'] leading-tight">
                  9:41
                </div>
              </div>
              <div className="w-20 h-3 left-[286px] top-[19px] absolute">
                <div className="w-7 h-3 left-[50px] top-0 absolute flex-col justify-start items-start inline-flex"></div>
                <img
                  className="w-4 h-3 left-[26px] top-[1px] absolute"
                  src="https://via.placeholder.com/17x12"
                />
              </div>
            </div>
          </div>
          <div className="w-96 pt-3 pb-3.5 bg-neutral-200 justify-center items-center inline-flex">
            <div className="text-center text-black text-base font-normal font-['Inter'] leading-tight">
              헤더
            </div>
          </div>
        </div>
      </div>
      <div className="w-96 h-12 pl-7 pr-8 py-3 left-0 top-[760px] absolute border border-zinc-300 justify-center items-start gap-12 inline-flex">
        <div className="w-6 h-6 border border-stone-300 justify-center items-center inline-flex">
          <div className="w-6 h-6 relative flex-col justify-start items-start flex">
            <div className="w-12 h-0.5 bg-zinc-300"></div>
          </div>
        </div>
        <div className="w-6 h-6 border border-stone-300 justify-center items-center inline-flex">
          <div className="w-6 h-6 relative flex-col justify-start items-start flex"></div>
        </div>
        <div className="w-6 h-6 border border-stone-300 justify-center items-center inline-flex">
          <div className="w-6 h-6 relative flex-col justify-start items-start flex"></div>
        </div>
        <div className="w-6 h-6 relative border border-stone-300 flex-col justify-start items-start flex">
          <div className="w-6 h-6 relative"></div>
          <div className="w-64 h-64 relative"></div>
        </div>
        <div className="w-6 h-6 border border-stone-300 justify-center items-center inline-flex">
          <div className="w-6 h-6 relative flex-col justify-start items-start flex"></div>
        </div>
      </div>
      <div className="w-96 h-96 left-0 top-[48px] absolute border border-zinc-300 flex-col justify-center items-start inline-flex">
        <div className="self-stretch h-16 p-5 bg-white border border-zinc-300 justify-center items-center inline-flex">
          <div className="w-6 h-6 relative border border-zinc-300 flex-col justify-start items-start flex"></div>
          <div className="w-5 h-5 bg-zinc-300"></div>
          <div className="grow shrink basis-0 self-stretch pl-1 pr-3 py-1 rounded-lg border border-zinc-300 justify-start items-center inline-flex">
            <div className="w-6 h-6 relative border border-zinc-300 flex-col justify-start items-start flex"></div>
            <div className="w-3 h-5 bg-zinc-300"></div>
            <div className="w-64 self-stretch pr-52 pt-0.5 pb-px border border-zinc-300 justify-start items-center inline-flex">
              <div className="text-black text-xl font-bold font-['Apple SD Gothic Neo'] leading-tight">
                스포츠
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 bg-white flex-col justify-center items-center inline-flex">
          <div className="w-96 h-96 relative border border-zinc-300 flex-col justify-start items-start flex">
            <div className="w-80 h-28 relative border border-stone-300">
              <div className="w-24 h-3.5 left-[10px] top-[10px] absolute border border-zinc-300">
                <div className="w-24 h-3.5 left-0 top-0 absolute text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  모집 중 / 모집 완료
                </div>
                <div className="w-0.5 h-3.5 left-[8px] top-[15px] absolute bg-zinc-300"></div>
                <div className="w-0.5 h-3.5 left-[8px] top-[59px] absolute bg-zinc-300"></div>
              </div>
              <div className="w-11 h-3.5 left-[120px] top-[84px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-11 h-3.5 text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  5/12
                </div>
              </div>
              <div className="w-11 h-3.5 left-[10px] top-[84px] absolute border border-zinc-300">
                <div className="w-12 h-3.5 left-0 top-0 absolute text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  12시간 전
                </div>
                <div className="w-2.5 h-1.5 left-[45px] top-[7px] absolute bg-zinc-300"></div>
                <div className="w-2.5 h-1.5 left-[100px] top-[7px] absolute bg-zinc-300"></div>
              </div>
              <div className="h-3.5 left-[65px] top-[84px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-12 h-3.5 text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  스포츠
                </div>
              </div>
              <div className="w-72 pb-1 left-[10px] top-[40px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-72 text-black text-xl font-bold font-['Apple SD Gothic Neo']">
                  즐겁게 공 찰 사람
                </div>
              </div>
            </div>
            <div className="w-1.5 h-3.5 bg-zinc-300"></div>
            <div className="w-80 h-28 relative border border-stone-300">
              <div className="w-24 h-3.5 left-[10px] top-[10px] absolute border border-zinc-300">
                <div className="w-24 h-3.5 left-0 top-0 absolute text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  모집 중 / 모집 완료
                </div>
                <div className="w-0.5 h-3.5 left-[8px] top-[15px] absolute bg-zinc-300"></div>
                <div className="w-0.5 h-3.5 left-[8px] top-[59px] absolute bg-zinc-300"></div>
              </div>
              <div className="w-11 h-3.5 left-[120px] top-[84px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-11 h-3.5 text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  5/12
                </div>
              </div>
              <div className="w-11 h-3.5 left-[10px] top-[84px] absolute border border-zinc-300">
                <div className="w-12 h-3.5 left-0 top-0 absolute text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  12시간 전
                </div>
                <div className="w-2.5 h-1.5 left-[45px] top-[7px] absolute bg-zinc-300"></div>
                <div className="w-2.5 h-1.5 left-[100px] top-[7px] absolute bg-zinc-300"></div>
              </div>
              <div className="h-3.5 left-[65px] top-[84px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-12 h-3.5 text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  스포츠
                </div>
              </div>
              <div className="w-72 pb-1 left-[10px] top-[40px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-72 text-black text-xl font-bold font-['Apple SD Gothic Neo']">
                  즐겁게 공 찰 사람
                </div>
              </div>
            </div>
            <div className="w-1.5 h-3.5 bg-zinc-300"></div>
            <div className="w-80 h-28 relative border border-stone-300">
              <div className="w-24 h-3.5 left-[10px] top-[10px] absolute border border-zinc-300">
                <div className="w-24 h-3.5 left-0 top-0 absolute text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  모집 중 / 모집 완료
                </div>
                <div className="w-0.5 h-3.5 left-[8px] top-[15px] absolute bg-zinc-300"></div>
                <div className="w-0.5 h-3.5 left-[8px] top-[59px] absolute bg-zinc-300"></div>
              </div>
              <div className="w-11 h-3.5 left-[120px] top-[84px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-11 h-3.5 text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  5/12
                </div>
              </div>
              <div className="w-11 h-3.5 left-[10px] top-[84px] absolute border border-zinc-300">
                <div className="w-12 h-3.5 left-0 top-0 absolute text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  12시간 전
                </div>
                <div className="w-2.5 h-1.5 left-[45px] top-[7px] absolute bg-zinc-300"></div>
                <div className="w-2.5 h-1.5 left-[100px] top-[7px] absolute bg-zinc-300"></div>
              </div>
              <div className="h-3.5 left-[65px] top-[84px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-12 h-3.5 text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  스포츠
                </div>
              </div>
              <div className="w-72 pb-1 left-[10px] top-[40px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-72 text-black text-xl font-bold font-['Apple SD Gothic Neo']">
                  즐겁게 공 찰 사람
                </div>
              </div>
            </div>
            <div className="w-1.5 h-3.5 bg-zinc-300"></div>
            <div className="w-80 h-28 relative border border-stone-300">
              <div className="w-24 h-3.5 left-[10px] top-[10px] absolute border border-zinc-300">
                <div className="w-24 h-3.5 left-0 top-0 absolute text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  모집 중 / 모집 완료
                </div>
                <div className="w-0.5 h-3.5 left-[8px] top-[15px] absolute bg-zinc-300"></div>
                <div className="w-0.5 h-3.5 left-[8px] top-[59px] absolute bg-zinc-300"></div>
              </div>
              <div className="w-11 h-3.5 left-[120px] top-[84px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-11 h-3.5 text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  5/12
                </div>
              </div>
              <div className="w-11 h-3.5 left-[10px] top-[84px] absolute border border-zinc-300">
                <div className="w-12 h-3.5 left-0 top-0 absolute text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  12시간 전
                </div>
                <div className="w-2.5 h-1.5 left-[45px] top-[7px] absolute bg-zinc-300"></div>
                <div className="w-2.5 h-1.5 left-[100px] top-[7px] absolute bg-zinc-300"></div>
              </div>
              <div className="h-3.5 left-[65px] top-[84px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-12 h-3.5 text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  스포츠
                </div>
              </div>
              <div className="w-72 pb-1 left-[10px] top-[40px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-72 text-black text-xl font-bold font-['Apple SD Gothic Neo']">
                  즐겁게 공 찰 사람
                </div>
              </div>
            </div>
            <div className="w-1.5 h-3.5 bg-zinc-300"></div>
            <div className="w-80 h-28 relative border border-stone-300">
              <div className="w-24 h-3.5 left-[10px] top-[10px] absolute border border-zinc-300">
                <div className="w-24 h-3.5 left-0 top-0 absolute text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  모집 중 / 모집 완료
                </div>
                <div className="w-0.5 h-3.5 left-[8px] top-[15px] absolute bg-zinc-300"></div>
                <div className="w-0.5 h-3.5 left-[8px] top-[59px] absolute bg-zinc-300"></div>
              </div>
              <div className="w-11 h-3.5 left-[120px] top-[84px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-11 h-3.5 text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  5/12
                </div>
              </div>
              <div className="w-11 h-3.5 left-[10px] top-[84px] absolute border border-zinc-300">
                <div className="w-12 h-3.5 left-0 top-0 absolute text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  12시간 전
                </div>
                <div className="w-2.5 h-1.5 left-[45px] top-[7px] absolute bg-zinc-300"></div>
                <div className="w-2.5 h-1.5 left-[100px] top-[7px] absolute bg-zinc-300"></div>
              </div>
              <div className="h-3.5 left-[65px] top-[84px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-12 h-3.5 text-black text-xs font-medium font-['Apple SD Gothic Neo']">
                  스포츠
                </div>
              </div>
              <div className="w-72 pb-1 left-[10px] top-[40px] absolute border border-zinc-300 justify-center items-center inline-flex">
                <div className="w-72 text-black text-xl font-bold font-['Apple SD Gothic Neo']">
                  즐겁게 공 찰 사람
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
