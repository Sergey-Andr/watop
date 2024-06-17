import { memo, ReactElement } from "react";

const PagesLoader = (): ReactElement => {
  return (
    <div className="top-0 left-0 absolute bg-white w-full h-full z-50">
      <div className="loader absolute translate-x-0 -translate-y-16 w-full h-full" />
      <p className="absolute text-nowrap translate-x-[41%] translate-y-1/2 w-full h-full text-6xl tracking-wide font-medium animate-loading-text">
        WE ARE TOP
      </p>
    </div>
  );
};

export default memo(PagesLoader);
