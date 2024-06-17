import { memo, ReactElement } from "react";
import cart1 from "@/../public/shopping-cart-empty.svg";
import Image from "next/image";

const NoCakes = (): ReactElement => {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-20 mb-10">
      <Image src={cart1} alt="buy some cakes" className="w-48 h-48 mb-10" />
      <h2 className="flex flex-col text-4xl text-center">
        Кошницата е празна
        <sub className="mt-10 text-gray-600">
          Но никога не е късно да я напълниш :)"
        </sub>
      </h2>
    </section>
  );
};

export default memo(NoCakes);
