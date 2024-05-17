"use server";

import IntroBlock from "@/components/IntroBlock";
import CatalogBlock from "@/components/CatalogBlock";
import AdvantageBlock from "@/components/AdvantageBlock";
import OrderBlock from "@/components/OrderBlock";
import DeliveryBlock from "@/components/DeliveryBlock";
import FooterBlock from "@/components/FooterBlock";

export default async function Home() {
  return (
    <>
      <main className="w-full h-full">
        <IntroBlock />
        <CatalogBlock />
        <AdvantageBlock />
        <OrderBlock />
        <DeliveryBlock />
      </main>
      <footer>
        <FooterBlock />
      </footer>
    </>
  );
}
