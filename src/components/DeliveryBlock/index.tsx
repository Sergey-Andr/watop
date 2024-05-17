import Image from "next/image";
import delivery from "@/../public/delivery-block.jpg";

export default async function DeliveryBlock() {
  return (
    <section className="flex w-full h-fit relative mb-96">
      <section className="h-fit">
        <h2 className="text-7xl mb-12">Delivery terms</h2>
        <ul className="max-w-lg w-full text-lg font-sans font-medium text-black/60">
          <li className="mb-4">
            — We use the speediest delivery methods to ensure your goodies
            arrive in perfect condition to devour
          </li>
          <li className="mb-4">
            — Please allow between 2-3 working days from placing your order
          </li>
          <li className="mb-4">
            — All of our celebration cakes will be delivered to you on your
            chosen date
          </li>
          <li>
            — Cakes can be stored in the fridge for 5 days and up to two weeks
            in the freezer
          </li>
        </ul>
      </section>
      <section className="absolute right-0 -translate-y-1/4 -translate-x-1/4">
        <Image
          height={800}
          src={delivery}
          alt={"Delivery terms"}
          className="w-full rotate-90"
        />
      </section>
    </section>
  );
}
