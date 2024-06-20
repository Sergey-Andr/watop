"use client";
import { FormEvent, memo, ReactElement } from "react";
import { fetchLogin } from "@/app/utils/auth/apiLogin";
import Link from "next/link";

const Form = (): ReactElement => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    const password = (
      e.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;

    const { status } = await fetchLogin({
      email,
      password,
    });

    if (status === 200) {
      window.location.href = "/profile/my-orders";
    }
  };

  return (
    <form
      className="flex flex-col w-96 bg-stone-50 border border-stone-200 rounded-xl p-4 mb-4"
      onSubmit={handleSubmit}
    >
      <label className="text-xl mb-4">Email address</label>
      <input
        type="email"
        name="email"
        autoComplete="email"
        autoFocus
        required
        className="bg-stone-100 border border-stone-300 py-2 px-4 mb-4 rounded-full"
      />
      <label className="text-xl mb-4 flex items-center justify-between">
        Password
        <Link
          href="/password-reset"
          className="text-rose-600 text-base font-medium hover:underline cursor-pointer"
        >
          Forgot password?
        </Link>
      </label>
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        required
        className="bg-stone-100 border border-stone-300 py-2 px-4 rounded-full mb-8"
      />
      <input
        type="submit"
        value="Sign in"
        className="py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-full cursor-pointer font-sans duration-300"
      />
    </form>
  );
};

export default memo(Form);
