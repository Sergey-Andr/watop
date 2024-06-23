import Header from "@/components/Header";
import { ReactNode } from "react";
import ShoppingCart from "src/app/profile/shopping-cart";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { EMAIL } from "@/features/getEmail";
import NavLink from "@/app/profile/components/NavLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Личный кабинет - WATOP",
  description:
    "Управлявайте своя акаунт, преглеждайте историята на поръчките и настройките",
  openGraph: {
    title: "Личный кабинет - WATOP",
    description:
      "Управлявайте своя акаунт, преглеждайте историята на поръчките и настройките",
    type: "website",
    url: "https://watop.vercel.app/profile",
  },
  alternates: {
    canonical: "https://watop.vercel.app/profile",
  },
};

export default async function Layout({ children }: { children: ReactNode }) {
  const token = cookies().get("accessToken");
  if (!token) {
    redirect("/login");
  }

  const email = cookies().get(EMAIL)?.value ?? "Нещо се обърка";

  return (
    <section className="w-4/5 m-auto">
      <Header />
      <section className="flex">
        <aside className="mt-8 max-w-64 w-full text-xl">
          <div className="flex group/account text-gray-600">
            <NavLink text={email} path="settings" />
          </div>
          <hr className="border-stone-200 my-4" />
          <ul>
            <li className="flex items-center mb-6 group/orders text-gray-600">
              <NavLink text="Моите поръчки" path="my-orders" />
            </li>
            <li className="flex items-center mb-6 group/cart text-gray-600">
              <ShoppingCart />
            </li>
            <li className="flex items-center group/wish text-gray-600">
              <NavLink text="Cписък с желания" path="wish-list" />
            </li>
          </ul>
        </aside>
        <main className="w-full border border-l-stone-300 p-8 pt-4 border-r-transparent border-t-transparent border-b-transparent">
          {children}
        </main>
      </section>
    </section>
  );
}
