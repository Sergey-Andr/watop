import { memo, ReactElement } from "react";
import Navigation from "@/components/CatalogBlock/components/Navigation";
import Catalog from "@/components/CatalogBlock/components/Catalog";

const CatalogBlock = (): ReactElement => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-7xl text-center mb-16">Catalog</h2>
      <Navigation />
      <Catalog />
    </section>
  );
};

export default memo(CatalogBlock);
