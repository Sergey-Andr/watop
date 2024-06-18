import Image from "next/image";
import logo from "@/../public/logo.jpg";
import Link from "next/link";
import ContactsInfo from "@/app/checkout/components/ContactsInfo";
import Orders from "@/app/checkout/components/Orders";
import Delivery from "@/app/checkout/components/Delivery";
import Summary from "@/app/checkout/components/Summary";
import Payment from "@/app/checkout/components/Payment";

export default async function Checkout() {
  return (
    <section className="w-3/4 m-auto mt-8">
      <Link
        href="/"
        className="flex items-center mb-8 border-b border-gray-300 pb-4"
      >
        <Image
          src={logo}
          alt="logo WATOP"
          className="w-12 h-12 rounded-full mr-4"
        />
        <h1 className="text-3xl font-semibold">WATOP</h1>
      </Link>
      <div className="flex">
        <div className="w-3/4 mr-16">
          <h2 className="text-4xl font-medium mb-4">Оформление на поръчка</h2>
          <div className="px-2 mb-16">
            <h3 className="text-2xl font-medium mb-4">
              Вашите контактни данни
            </h3>
            <ContactsInfo />
            <Orders />
          </div>
          <Delivery />
          <Payment />
          {/*<SwiperCakes />*/}
        </div>
        <aside className="w-1/4 h-fit border border-black rounded-xl sticky top-8">
          <Summary />
        </aside>
      </div>
    </section>
  );
}
