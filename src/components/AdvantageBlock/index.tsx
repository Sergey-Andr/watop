import Image from "next/image";
import quality from "@/../public/advantage-quality.jpg";
import gift from "@/../public/advantage-gift.jpg";
import delivery from "@/../public/advantage-delivery.jpg";

export default async function AdvantageBlock() {
  return (
    <section className="flex flex-col items-center w-full mb-40">
      <h2 className="text-6xl mb-24">Our advantages</h2>
      <div className="flex items-end font-sans">
        <div className="flex flex-col items-center mr-28">
          <Image
            src={quality}
            alt={"High quality"}
            className="rounded-full w-48 h-48 mb-8"
          />
          <h4 className="text-2xl text-center w-36">
            High quality{" "}
            <sub className="text-xx block leading-5 text-black/60 font-medium">
              Handmade cake & natural ingredients
            </sub>
          </h4>
        </div>
        <div className="flex flex-col items-center mr-28">
          <Image
            src={gift}
            alt={"Sweet gift"}
            className="rounded-full w-56 h-56 mb-8"
          />
          <h4 className="text-2xl text-center w-36">
            Sweet gift{" "}
            <sub className="text-xx block leading-5 text-black/60 font-medium">
              Delicious macaron gift box for each client
            </sub>
          </h4>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={delivery}
            alt={"Fast delivery"}
            className="rounded-full w-48 h-48 mb-8"
          />
          <h4 className="text-2xl text-center w-36">
            Fast delivery{" "}
            <sub className="text-xx block leading-5 text-black/60 font-medium">
              Same-day cake delivery in Kyiv
            </sub>
          </h4>
        </div>
      </div>
    </section>
  );
}
