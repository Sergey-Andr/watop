import Image from "next/image";
import delivery from "@/../public/delivery-block.jpg";
import Tersm from "@/components/DeliveryBlock/Terms";

export default async function DeliveryBlock() {
  return (
    <section id="delivery" className="flex w-full h-fit relative mb-96">
      <Tersm />
      <div className="absolute right-0 -translate-y-1/4 -translate-x-1/4">
        <Image
          height={800}
          src={delivery}
          alt="Our delivery terms"
          className="w-full rotate-90"
        />
      </div>
    </section>
  );
}
