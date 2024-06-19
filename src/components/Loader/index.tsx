import { memo, ReactElement } from "react";

const PagesLoader = (): ReactElement => {
  return (
    <div className="top-0 left-0 absolute bg-white w-full h-full z-50">
      <div className="absolute w-full h-full left-0 top-0 flex flex-col items-center justify-center">
        <div className="loader w-16 h-16 mb-32" />
        <p className="text-nowrap text-center w-full h-fit text-6xl tracking-wide font-medium animate-loading-text">
          WE ARE TOP
        </p>
      </div>
    </div>
  );
};

export default memo(PagesLoader);
