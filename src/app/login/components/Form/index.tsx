"use client";
import { memo, ReactElement } from "react";
import { fetchLogin } from "@/app/utils/auth/apiLogin";

const Form = (): ReactElement => {
  const handleSubmit = async (formData: FormData) => {
    const response = await fetchLogin(formData);

    // if (response) {
    //   const month = new Date().setTime(
    //     new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
    //   );
    //   const hour = new Date().setTime(new Date().getTime() + 60 * 60 * 1000);
    //   document.cookie = `refreshToken=${response.refreshToken}; expires=${month}; path=/; SameSite=Strict"`;
    //   document.cookie = `accessToken=${response.accessToken}; expires=${hour}; path=/; SameSite=Strict"`;
    //   document.cookie = `email=${response.user.email}; expires=${month}; path=/; SameSite=Strict"`;
    // }

    window.location.href = "/";
  };

  return (
    <form
      className="flex flex-col w-96 bg-stone-50 border border-stone-200 rounded-xl p-4 mb-4"
      action={handleSubmit}
    >
      <label className="text-xl mb-4">Username or email address</label>
      <input
        type="email"
        name="email"
        autoComplete="email"
        autoFocus
        required
        className="bg-stone-100 border border-stone-300 py-2 px-4 mb-4 rounded-full"
      />
      <label className="text-xl mb-4">Password</label>
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
        className="py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-full cursor-pointer font-sans duration-300"
      />
    </form>
  );
};

export default memo(Form);
