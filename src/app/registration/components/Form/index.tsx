"use client";
import { FormEvent, memo, ReactElement, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { fetchRegistration } from "@/app/utils/auth/apiRegister";
import PagesLoader from "@/components/Loader";
import { fetchCheckEmail } from "@/app/utils/auth/apiCheckEmail";
import { debounce as _debounce } from "lodash";

const Form = (): ReactElement => {
  const [firstPass, setFirstPass] = useState("");
  const [secondPass, setSecondPass] = useState("");
  const [isEqual, setIsEqual] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSameEmail, setIsSameEmail] = useState(false);

  useEffect(() => {
    if (firstPass === secondPass) {
      setIsEqual(true);
    } else {
      setIsEqual(false);
    }
  }, [secondPass, firstPass]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    const password = (
      e.currentTarget.elements.namedItem(
        "password",
      ) as unknown as HTMLInputElement[]
    )[0].value;

    const { status } = await fetchRegistration({
      email,
      password,
    });

    if (status === 200) {
      setIsLoading(false);
      window.location.href = "/profile/my-orders";
    } else if (status === 409) {
      setIsLoading(false);
      setIsSameEmail(true);
    }
  };

  const handleEmailChange = _debounce(async (value) => {
    const { status, data } = await fetchCheckEmail(value);
    if (status === 200 && data) {
      setIsSameEmail(true);
    } else {
      setIsSameEmail(false);
    }
  }, 300);

  return (
    <form
      className="flex flex-col w-96 bg-stone-50 border border-stone-200 rounded-xl p-4 mb-4"
      onSubmit={handleSubmit}
    >
      <label form="email">
        <h4 className="text-xl mb-4">Електронна поща</h4>
      </label>
      <input
        type="email"
        name="email"
        autoComplete="email"
        autoFocus
        required
        onChange={(e) => {
          handleEmailChange(e.target.value);
        }}
        className={`bg-stone-100 border border-stone-300 py-2 px-4 ${isSameEmail ? "" : "mb-4"} rounded-full w-full`}
      />
      {isSameEmail ? (
        <sub className="mb-4 text-base text-rose-600">
          Такъв имейл вече съществува!
        </sub>
      ) : (
        <></>
      )}
      <div className="relative w-full">
        <label form="password" className="text-xl mb-4">
          <h4 className="text-xl mb-4">Парола</h4>
          <input
            type={`${isHidden ? "password" : "text"}`}
            name="password"
            minLength={6}
            placeholder="минимум 6 символа"
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
        <h4 className="text-xl mb-4">Промени парола</h4>
        <input
          type={`${isHidden ? "password" : "text"}`}
          name="password"
          minLength={6}
          placeholder="минимум 6 символа"
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
        Паролите не съвпадат
      </span>
      <input
        disabled={!isEqual || isSameEmail}
        type="submit"
        value="Sign in"
        className={`py-2 ${isSameEmail || isEqual ? "cursor-default" : "cursor-pointer hover:bg-rose-800"} bg-rose-700 text-white rounded-full font-sans duration-300`}
      />
      {isLoading ? <PagesLoader /> : <></>}
    </form>
  );
};

export default memo(Form);
