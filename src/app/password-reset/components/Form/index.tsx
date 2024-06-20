"use client";
import { FormEvent, memo, ReactElement, useState } from "react";
import { apiRequestPasswordReset } from "@/app/utils/auth/apiRequestPasswordReset";

const Form = (): ReactElement => {
  const [isClicked, setIsClicked] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;

    localStorage.setItem("email", email);

    await apiRequestPasswordReset(email);
  };

  return (
    <form
      className="flex flex-col w-96 bg-stone-50 border border-stone-200 rounded-xl p-4 mb-4"
      onSubmit={handleSubmit}
    >
      <label className="text-xl mb-4">Електронна поща</label>
      <input
        type="email"
        name="email"
        autoComplete="email"
        autoFocus
        required
        className="bg-stone-100 border border-stone-300 py-2 px-4 mb-4 rounded-full"
      />
      {isClicked ? (
        <p className="mb-4 text-lg">Проверете вашата електронна поща</p>
      ) : (
        <></>
      )}

      <input
        type="submit"
        value="Изпрати"
        onClick={() => {
          setIsClicked(true);
        }}
        className="py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-full cursor-pointer font-sans duration-300"
      />
    </form>
  );
};

export default memo(Form);
