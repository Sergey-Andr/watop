import CakesSwiper from "@/app/cake/[id]/components/Swiper";
import Cake from "@/app/cake/[id]/components/Cake";

import type { Metadata, ResolvingMetadata } from "next";
import { fetchCakeById } from "@/service/fetchCakeById";
import { Suspense } from "react";
import PagesLoader from "@/components/Loader";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.id;
  const { data } = await fetchCakeById(+id);
  return {
    title: `${data.name} | WATOP`,
    description: `delicious ${data.name ?? ""} cakes and much more. The widest selection and fast delivery`,
  };
}

export default async function CakeInfo() {
  return (
    <section>
      <Suspense fallback={<PagesLoader />}>
        <Cake />
        <CakesSwiper />
      </Suspense>
    </section>
  );
}
