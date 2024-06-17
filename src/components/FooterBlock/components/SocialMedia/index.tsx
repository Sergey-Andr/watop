import { memo, ReactElement } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

const SocialMedia = (): ReactElement => {
  return (
    <div className="flex">
      <a
        href="#"
        aria-label="Facebook"
        className="w-8 h-8 outline outline-1 outline-offset-8 outline-black/30 rounded-full mr-8 flex items-center justify-center cursor-pointer"
      >
        <FaFacebookF className="w-5 h-5" />
      </a>
      <a
        href="#"
        aria-label="Telegramm"
        className="w-8 h-8 outline outline-1 outline-offset-8 outline-black/30 rounded-full mr-8 flex items-center justify-center cursor-pointer"
      >
        <PiInstagramLogoFill className="w-5 h-5" />
      </a>
      <a
        href="#"
        aria-label="LinkedIn"
        className="w-8 h-8 outline outline-1 outline-offset-8 outline-black/30 rounded-full flex items-center justify-center cursor-pointer"
      >
        <FaLinkedinIn className="w-5 h-5 " />
      </a>
    </div>
  );
};

export default memo(SocialMedia);
