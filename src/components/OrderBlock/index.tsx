import Image from "next/image";
import order from "@/../public/order-cake.webp";
import Form from "@/components/OrderBlock/components/Form";

export default async function OrderBlock() {
  return (
    <section id="order" className="flex mb-72">
      <Image src={order} alt="Як замовити" className="w-1/2 mr-32" />
      <div className="w-96">
        <h2 className="text-5xl flex flex-col">
          Як замовити
          <sub className="text-lg leading-6 font-medium text-black/60 w-80 my-8 tracking-tight">
            Будь ласка, залиште вашу контактну інформацію, і ми зв&apos;яжемося
            з вами протягом 20 хвилин.
          </sub>
        </h2>
        <Form />
      </div>
    </section>
  );
}
