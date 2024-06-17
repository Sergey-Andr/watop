import Image from "next/image";
import logo from "../../../public/logo.jpg";
import SocialMedia from "src/components/FooterBlock/components/SocialMedia";
import Navigation from "@/components/FooterBlock/components/Navigation";
import Contacts from "@/components/FooterBlock/components/Contacts";

export default async function FooterBlock() {
  return (
    <section id="contacts" className="flex justify-around items-start mb-32">
      <div className="flex flex-col">
        <div className="mb-8 flex items-center">
          <h2 className="text-3xl font-medium mr-5">WATOP</h2>
          <Image src={logo} alt={"logo"} className="w-12 h-12 rounded-full" />
        </div>
        <SocialMedia />
      </div>
      <div className="font-sans">
        <h2 aria-label="Navigation menu" className="text-4xl mb-10">
          Menu
        </h2>
        <Navigation />
      </div>
      <div className="font-sans">
        <h2 aria-label="Contact us" className="text-4xl mb-10">
          Contacts
        </h2>
        <Contacts />
      </div>
    </section>
  );
}
