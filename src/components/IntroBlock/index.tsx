import { memo, ReactElement } from "react";
import Image from "next/image";
import mainCake from "../../../public/main-cake.jpg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

const IntroBlock = (): ReactElement => {
  return (
    <section className="mb-96">
      <Image
        width={950}
        src={mainCake}
        alt="cake"
        className="absolute right-0 top-0"
      />
      <div className="mt-24 ml-12 relative z-10">
        <h1 className="text-6xl flex flex-col mb-12">
          Confectionery
          <br />& bakery shop
          <sub className="text-2xl text-black/60 mt-6">
            Same day cake delivery in Kyiv
          </sub>
        </h1>
        <button className="py-4 px-14 bg-rose-700 text-white rounded-full text-sm">
          Shop now
        </button>
        <div className="flex mt-48">
          <a
            href="#"
            className="w-8 h-8 outline outline-1 outline-offset-8 outline-black/30 rounded-full mr-8 flex items-center justify-center cursor-pointer"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-8 h-8 outline outline-1 outline-offset-8 outline-black/30 rounded-full mr-8 flex items-center justify-center cursor-pointer"
          >
            <PiInstagramLogoFill className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-8 h-8 outline outline-1 outline-offset-8 outline-black/30 rounded-full flex items-center justify-center cursor-pointer"
          >
            <FaLinkedinIn className="w-5 h-5 " />
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(IntroBlock);
