"use client";
import { Dispatch, FC, memo, ReactElement, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import Products from "src/app/cake/[id]/components/Cake/components/Popover/components/Products";
import SwiperCakes from "@/app/cake/[id]/components/Cake/components/Popover/components/Swiper";

interface IPopover {
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}

const Popover: FC<IPopover> = ({ isClicked, setIsClicked }): ReactElement => {
  return (
    <>
      {isClicked ? (
        <section
          onClick={() => setIsClicked(false)}
          className="fixed w-full h-full bg-black/40 top-0 left-0 overscroll-y-none z-40"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="fixed w-1/2 h-[90%] top-[5%] z-50 left-1/4 bg-white p-4 overflow-y-auto overflow-x-hidden"
          >
            <div className="w-full flex justify-between items-center border border-b-stone-300 pb-4 mb-4 border-t-transparent border-l-transparent border-r-transparent">
              <h2 className="text-4xl">Cart</h2>
              <RxCross2
                onClick={() => setIsClicked(false)}
                className="w-5 h-5 cursor-pointer hover:text-rose-600 duration-300"
              />
            </div>
            <div className="flex flex-col justify-between">
              <Products setIsClicked={setIsClicked} />
              <SwiperCakes />
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(Popover);
