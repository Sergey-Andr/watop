import Image from "next/image";
import order from "@/../public/order-cake.png";

export default async function OrderBlock() {
  return (
    <section className="flex mb-72">
      <Image src={order} alt={"How to order"} className="w-1/2 mr-32" />
      <section className="w-96">
        <h2 className="text-6xl flex flex-col">
          How to order
          <sub className="text-lg leading-6 font-medium text-black/60 w-80 my-8 tracking-tight">
            Please leave your contact information and we will get back to you in
            20 minutes
          </sub>
        </h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="placeholder:text-black placeholder:font-sans w-full p-4 bg-black/5 rounded-full mb-4"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="placeholder:text-black placeholder:font-sans w-full p-4 bg-black/5 rounded-full mb-4"
          />
          <button className="py-4 px-20 bg-rose-700 hover:bg-rose-800 focus:bg-rose-900 text-white rounded-full text-sm uppercase duration-300">
            ok
          </button>
        </form>
      </section>
    </section>
  );
}
