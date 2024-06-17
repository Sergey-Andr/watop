import { memo, ReactElement } from "react";

const Form = (): ReactElement => {
  return (
    <form autoComplete="on">
      <input
        type="text"
        placeholder="Name"
        aria-label="Write your name"
        className="placeholder:text-black placeholder:font-sans w-full p-4 bg-black/5 rounded-full mb-4"
      />
      <input
        type="tel"
        placeholder="Phone"
        aria-label="Write your phone number"
        className="placeholder:text-black placeholder:font-sans w-full p-4 bg-black/5 rounded-full mb-4"
      />
      <button
        aria-label="sub"
        className="py-4 px-20 bg-rose-700 hover:bg-rose-800 focus:bg-rose-900 text-white rounded-full text-sm uppercase duration-300"
      >
        ok
      </button>
    </form>
  );
};

export default memo(Form);
