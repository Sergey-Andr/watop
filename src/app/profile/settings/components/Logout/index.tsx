"use client";

import { memo } from "react";
import { fetchLogout } from "@/app/utils/auth/apiLogout";

const Logout = () => {
  const handleLogout = async () => {
    const result = await fetchLogout();

    if (result.status === 200) {
      const cookies = document.cookie.split(";");

      for (const cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie =
          name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }

      window.location.href = "/";
    } else {
      console.error("Logout failed: ", result.message || result.errors);
    }
  };

  return (
    <div className="w-full relative">
      <button
        onClick={handleLogout}
        aria-label="logout from the account"
        className="absolute right-0 py-2 px-8 bg-rose-700 hover:bg-rose-800 duration-300 rounded-full text-white font-sans"
      >
        Logout
      </button>
    </div>
  );
};

export default memo(Logout);
