"use server";
import Image from "next/image";
import logo from "@/../public/logo.jpg";
import Error from "@/app/login/components/Error";
import type { Metadata } from "next";
import Form from "@/app/login/components/Form";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sign in to WATOP",
  };
}

export default async function SignIn() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <header className="flex flex-col items-center">
        <a href="/" className="mt-16 mb-4">
          <Image
            src={logo}
            alt="WATOP logo"
            className="rounded-full w-16 h-16"
          />
        </a>
        <h1 aria-label="Sign in to WATOP" className="text-3xl mb-8">
          Sign in to WATOP
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
            New to WATOP?{" "}
            <Link
              href="/registration"
              className="text-rose-600 hover:underline font-medium duration-300"
            >
              Create an account
            </Link>
          </h3>
        </div>
      </footer>
    </section>
  );
}
