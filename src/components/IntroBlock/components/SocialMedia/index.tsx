import { memo, ReactElement } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

const SocialMedia = (): ReactElement => {
  return (
    <nav aria-label="Links to our social media" className="flex mt-48">
      <a
        aria-label="link to facebook"
        href="#"
        className="w-8 h-8 outline outline-1 outline-offset-8 outline-black/30 rounded-full mr-8 flex items-center justify-center cursor-pointer"
      >
        <FaFacebookF className="w-5 h-5" />
      </a>
      <a
        aria-label="link to telegramm"
        href="#"
        className="w-8 h-8 outline outline-1 outline-offset-8 outline-black/30 rounded-full mr-8 flex items-center justify-center cursor-pointer"
      >
        <PiInstagramLogoFill className="w-5 h-5" />
      </a>
      <a
        aria-label="link to linked in"
        href="https://www.linkedin.com/in/serhii-andr/"
        target="_blank"
        rel="noopener"
        className="w-8 h-8 outline outline-1 outline-offset-8 outline-black/30 rounded-full flex items-center justify-center cursor-pointer"
      >
        <FaLinkedinIn className="w-5 h-5 " />
      </a>
    </nav>
  );
};

export default memo(SocialMedia);
