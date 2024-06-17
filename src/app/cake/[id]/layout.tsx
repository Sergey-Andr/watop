import { ReactNode } from "react";
import Header from "@/components/Header";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="w-4/5 m-auto">
      <Header />
      {children}
    </section>
  );
}
