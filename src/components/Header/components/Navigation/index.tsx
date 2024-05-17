"use client";
import { memo, useEffect, useState } from "react";
import Link from "next/link";

export const navigationHash = [
  { href: "", label: "Home", hash: "" },
  { href: "#catalog", label: "Catalog" },
  { href: "#order", label: "How to order" },
  { href: "#delivery", label: "Delivery" },
  { href: "#contacts", label: "Contacts" },
];

const Navigation = () => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      {navigationHash.map((link) => (
        <Link
          key={link.href}
          onClick={() => setHash(link.href)}
          href={link.href}
          className={`cursor-pointer relative text-lg hover:text-black/50 duration-300 ${hash === link.href ? "after:absolute after:h-0.5 after:w-4/5 after:bg-red-600 after:translate-y-7 after:-translate-x-[110%]" : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default memo(Navigation);
