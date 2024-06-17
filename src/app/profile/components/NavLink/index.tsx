"use client";
import { ReactElement } from "react";
import { usePathname } from "next/navigation";

const NavLink = ({ text, path }): ReactElement => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <span className={`${pathname.includes(path) ? "text-rose-600" : ""}`}>
      {text}
    </span>
  );
};

export default NavLink;
