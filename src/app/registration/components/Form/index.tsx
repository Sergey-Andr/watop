"use client";
import { memo, ReactElement, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { fetchRegistration } from "@/app/utils/auth/apiRegister";

const Form = (): ReactElement => {
  const [firstPass, setFirstPass] = useState("");
  const [secondPass, setSecondPass] = useState("");
  const [isEqual, setIsEqual] = useState(true);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (firstPass === secondPass) {
      setIsEqual(true);
    } else {
      setIsEqual(false);
    }
  }, [secondPass, firstPass]);

  return (
    <form
      className="flex flex-col w-96 bg-stone-50 border border-stone-200 rounded-xl p-4 mb-4"
      action={fetchRegistration}
    >
      <label form="email">
        <h4 className="text-xl mb-4">Username or email address</h4>
        <input
          type="email"
          name="email"
          autoComplete="email"
          autoFocus
          required
          className="bg-stone-100 border border-stone-300 py-2 px-4 mb-4 rounded-full w-full"
        />
      </label>

      <div className="relative w-full">
        <label form="password" className="text-xl mb-4">
          <h4 className="text-xl mb-4">Password</h4>
          <input
            type={`${isHidden ? "password" : "text"}`}
            name="password"
            autoComplete="new-password"
            required
            className="bg-stone-100 border border-stone-300 py-2 px-4 rounded-full mb-8 w-full"
            onChange={(e) => {
              setFirstPass(e.target.value);
            }}
            value={firstPass}
          />
        </label>
        <div
          onClick={() => {
            setIsHidden(!isHidden);
          }}
          className="absolute cursor-pointer right-4 top-[48%]"
        >
          {isHidden ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <label className="text-xl mb-4">
        <h4 className="text-xl mb-4">Confirm password</h4>

        <input
          type={`${isHidden ? "password" : "text"}`}
          name="password"
          autoComplete="new-password"
          required
          className="bg-stone-100 border border-stone-300 py-2 px-4 rounded-full mb-8 w-full"
          onChange={(e) => {
            setSecondPass(e.target.value);
          }}
          value={secondPass}
        />
      </label>
      <span
        className={`text-rose-600 ${isEqual ? "hidden" : "block"} relative -top-6`}
      >
        Passwords is not equal
      </span>

      <input
        disabled={!isEqual}
        type="submit"
        value="Sign in"
        className="py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-full cursor-pointer font-sans duration-300"
      />
    </form>
  );
};

export default memo(Form);
