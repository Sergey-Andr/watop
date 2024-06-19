"use client";
import { memo, useState } from "react";
import Link from "next/link";

export const navigationHash = [
  { hash: "", label: "Home" },
  { hash: "catalog", label: "Catalog" },
  { hash: "order", label: "How to order" },
  { hash: "delivery", label: "Delivery" },
  { hash: "contacts", label: "Contacts" },
];

const Navigation = () => {
  const [hash, setHash] = useState("");
  return (
    <>
      {navigationHash.map((link) => (
        <Link
          key={link.hash}
          scroll={false}
          onClick={() => {
            // window.location.hash = link.hash;
            setHash(link.hash);
          }}
          href={{ hash: `${link.hash}` }}
          className={`smooth-scroll cursor-pointer relative text-lg hover:text-black/50 duration-300 ${hash === link.hash ? "after:absolute after:h-0.5 after:w-4/5 after:bg-red-600 after:translate-y-7 after:-translate-x-[110%]" : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default memo(Navigation);
