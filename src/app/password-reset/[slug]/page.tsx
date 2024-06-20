"use client";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";
import { FormEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { apiUpdatePassword } from "@/app/utils/auth/apiUpdatePassword";

export default function Page() {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const isDisabled = password.length < 6 || password !== confirmedPassword;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = localStorage.getItem("email") as string;
    const password = (
      e.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;

    const { status } = await apiUpdatePassword({
      email: email,
      password,
    });

    localStorage.removeItem("email");
    if (status === 200) {
      window.location.href = "/";
    }
  };

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
        <h1 aria-label="Sign in to WATOP" className="text-3xl mb-8 text-center">
          Промени парола за <br /> {localStorage.getItem("email")}
        </h1>
      </header>
      <main>
        <form
          className="flex flex-col w-96 bg-stone-50 border border-stone-200 rounded-xl p-4 mb-4"
          onSubmit={handleSubmit}
        >
          <label className="text-xl mb-4">Парола</label>
          <div className="relative w-full">
            <input
              type={`${isHidden ? "password" : "name"}`}
              name="password"
              minLength={6}
              placeholder="минимум 6 символа"
              autoComplete="current-password"
              autoFocus
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-stone-100 border border-stone-300 py-2 px-4 mb-4 rounded-full w-full font-sans"
            />
            <div
              onClick={() => {
                setIsHidden(!isHidden);
              }}
              className="absolute cursor-pointer right-4 top-1/4"
            >
              {isHidden ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <label className="text-xl mb-4">Потвърди парола</label>
          <input
            type={`${isHidden ? "password" : "name"}`}
            name="password"
            minLength={6}
            placeholder="минимум 6 символа"
            autoComplete="current-password"
            required
            onChange={(e) => {
              setConfirmedPassword(e.target.value);
            }}
            className="bg-stone-100 border border-stone-300 py-2 px-4 rounded-full mb-8 font-sans"
          />
          <input
            disabled={isDisabled}
            type="submit"
            value="Потвърди парола"
            className={`py-2 bg-rose-600 text-white rounded-full font-sans duration-300 ${isDisabled ? "" : "hover:bg-rose-700 cursor-pointer"}`}
          />
        </form>
      </main>
    </section>
  );
}
