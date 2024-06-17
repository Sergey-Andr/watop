"use client";

import { memo } from "react";
import { fetchLogout } from "@/app/utils/auth/apiLogout";

const Logout = () => {
  return (
    <div className="w-full relative">
      <button
        onClick={async () => {
          await fetchLogout();
          window.location.href = "/";
        }}
        aria-label="logout from the account"
        className="absolute right-0 py-2 px-8 bg-rose-700 hover:bg-rose-800 duration-300 rounded-full text-white font-sans"
      >
        Logout
      </button>
    </div>
  );
};

export default memo(Logout);
