"use server";
import Navigation from "@/components/CatalogBlock/components/Navigation";
import Catalog from "@/components/CatalogBlock/components/Catalog";

export default async function CatalogBlock() {
  return (
    <section
      id="catalog"
      className="w-full h-full flex flex-col justify-center items-center"
    >
      <h2 className="text-7xl text-center mb-16">Catalog</h2>
      <Navigation />
      <Catalog />
    </section>
  );
}
