"use client";
import { memo, ReactElement, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Error = (): ReactElement => {
  const [isError, setIsError] = useState(false);
  return (
    <div
      aria-live="polite"
      className={`w-96 flex items-center justify-between py-4 px-6 rounded-xl h-16 bg-rose-200 border border-rose-700 mb-4 ${isError ? "block" : "hidden"}`}
    >
      <p role="alert">Incorrect username or password</p>
      <RxCross2
        role="img"
        className="w-5 h-5 text-rose-700 stroke-1 cursor-pointer"
        onClick={() => {
          setIsError(false);
        }}
      />
    </div>
  );
};

export default memo(Error);
