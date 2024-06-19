"use client";
import { memo, useState } from "react";
import Link from "next/link";
import process from "process";

export const navigationHash = [
  { href: "", label: "Home", hash: "" },
  { href: "#catalog", label: "Catalog" },
  { href: "#order", label: "How to order" },
  { href: "#delivery", label: "Delivery" },
  { href: "#contacts", label: "Contacts" },
];

const Navigation = () => {
  const [hash, setHash] = useState("");
  return (
    <>
      {navigationHash.map((link) => (
        <Link
          key={link.href}
          onClick={() => {
            window.location.hash = link.href;
            if (process.env.NODE_ENV === "production") {
              window.history.pushState(null, "", link.href);
            }
            setHash(link.href);
          }}
          href={`/${link.href}`}
          className={`smooth-scroll cursor-pointer relative text-lg hover:text-black/50 duration-300 ${hash === link.href ? "after:absolute after:h-0.5 after:w-4/5 after:bg-red-600 after:translate-y-7 after:-translate-x-[110%]" : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default memo(Navigation);
