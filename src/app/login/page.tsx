import Image from "next/image";
import logo from "@/../public/logo.webp";
import Error from "@/app/login/components/Error";
import type { Metadata } from "next";
import Form from "@/app/login/components/Form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Увійти - WATOP",
  description:
    "Увійдіть до свого облікового запису на нашому сайті та отримайте доступ до всіх функцій.",
  openGraph: {
    title: "Увійти - WATOP",
    description:
      "Увійдіть до свого облікового запису на нашому сайті та отримайте доступ до всіх функцій.",
    type: "website",
    url: "https://watop.vercel.app/login",
  },
  alternates: {
    canonical: "https://watop.vercel.app/login",
  },
};

export default async function SignIn() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <header className="flex flex-col items-center">
        <a href="/" className="mt-16 mb-4">
          <Image
            src={logo}
            alt="Логотип WATOP"
            className="rounded-full w-16 h-16"
          />
        </a>
        <h1 aria-label="Увійдіть у WATOP" className="text-3xl mb-8">
          Увійдіть у WATOP
        </h1>
      </header>
      <main>
        <Error />
        <Form />
      </main>
      <footer>
        <div
          role="contentinfo"
          className="w-96 p-4 rounded-xl h-16 bg-stone-50 border border-stone-200"
        >
          <h3 className="text-lg">
            Новий у WATOP?{" "}
            <Link
              href="/registration"
              className="text-rose-600 hover:underline font-medium duration-300"
            >
              Створити акаунт
            </Link>
          </h3>
        </div>
      </footer>
    </section>
  );
}
