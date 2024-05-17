import Image from "next/image";
import logo from "@/../public/logo.jpg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

export default async function FooterBlock() {
  return (
    <section className="flex justify-around items-start mb-32">
      <section className="flex flex-col">
        <div className="mb-8 flex items-center">
          <h2 className="text-3xl font-medium mr-5">WATOP</h2>
          <Image src={logo} alt={"logo"} className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex">
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
      </section>
      <section className="font-sans">
        <h2 className="text-4xl mb-10">Menu</h2>
        <ul className="flex">
          <li className="text-lg mr-4 hover:text-black/40 duration-300 cursor-pointer font-medium text-black/80">
            <a>Home</a>
          </li>
          <li className="text-lg mr-4 hover:text-black/40 duration-300 cursor-pointer font-medium text-black/80">
            <a>How to order</a>
          </li>
          <li className="text-lg mr-4 hover:text-black/40 duration-300 cursor-pointer font-medium text-black/80">
            <a>Catalog</a>
          </li>
          <li className="text-lg mr-4 hover:text-black/40 duration-300 cursor-pointer font-medium text-black/80">
            <a>Delivery</a>
          </li>
        </ul>
      </section>
      <section className="font-sans">
        <h2 className="text-4xl mb-10">Contacts</h2>
        <ul>
          <li className="mb-4 text-lg mr-4 font-medium text-black/80">
            +(380)-00-000-00-00
          </li>
          <li className="text-lg mr-4 font-medium text-black/80">
            sweet@cake.ua
          </li>
        </ul>
      </section>
    </section>
  );
}
