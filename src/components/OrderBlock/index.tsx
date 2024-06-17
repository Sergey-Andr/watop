import Image from "next/image";
import order from "@/../public/order-cake.png";
import Form from "@/components/OrderBlock/components/Form";

export default async function OrderBlock() {
  return (
    <section id="order" className="flex mb-72">
      <Image src={order} alt="How to order" className="w-1/2 mr-32" />
      <div className="w-96">
        <h2 className="text-6xl flex flex-col">
          How to order
          <sub className="text-lg leading-6 font-medium text-black/60 w-80 my-8 tracking-tight">
            Please leave your contact information and we will get back to you in
            20 minutes
          </sub>
        </h2>
        <Form />
      </div>
    </section>
  );
}
