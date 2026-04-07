import Image from "next/image";
import logo from "@/../public/logo.webp";
import Form from "@/app/registration/components/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация - WATOP",
  description:
    "Създайте акаунт на нашия сайт и получете достъп до ексклузивни възможности",
  openGraph: {
    title: "Регистрация - WATOP",
    description:
      "Създайте акаунт на нашия сайт и получете достъп до ексклузивни възможности",
    type: "website",
    url: "https://watop.vercel.app/registration",
  },
  alternates: {
    canonical: "https://watop.vercel.app/registration",
  },
};

export default async function Registration() {
  return (
    <section className="w-4/5 m-auto flex flex-col justify-center items-center mt-8">
      <header className="flex justify-between items-center w-full mb-16">
        <a href="/" className="mb-4">
          <Image
            src={logo}
            alt="Логотип WATOP"
            className="rounded-full w-16 h-16"
          />
        </a>
        <h3 aria-label="Вже маєте акаунт?" className="text-2xl mb-8">
          Вже маєте акаунт?{" "}
          <a href="/login" className="hover:underline text-rose-600">
            Увійти
          </a>
        </h3>
      </header>
      <main>
        <Form />
      </main>
    </section>
  );
}
