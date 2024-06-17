"use server";
import IntroBlock from "@/components/IntroBlock";
import CatalogBlock from "@/components/CatalogBlock";
import AdvantageBlock from "@/components/AdvantageBlock";
import OrderBlock from "@/components/OrderBlock";
import DeliveryBlock from "@/components/DeliveryBlock";
import FooterBlock from "@/components/FooterBlock";
import Header from "@/components/Header";

export default async function Home() {
  return (
    <section className="w-4/5 m-auto">
      <Header />
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
    </section>
  );
}
