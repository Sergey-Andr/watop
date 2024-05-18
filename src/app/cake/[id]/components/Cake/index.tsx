"use client";
import { memo, ReactElement } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";
import { cakes, ICake } from "@/app/tempInfo";
import Image from "next/image";
import Link from "next/link";

const Cake = (): ReactElement => {
  const { id } = useParams();
  const cake = cakes.find((cake) => cake.id === +id) as ICake;
  return (
    <section className="mb-40">
      <Breadcrumb className="font-sans mb-40">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href={"/#catalog"} className="smooth-scroll">
              Catalog
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{cake.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div itemScope itemType="http://schema.org/Product" className="flex">
        <Image
          width={576}
          height={928}
          src={cake.image}
          alt={`Cake ${cake.name}`}
          className="mr-40"
        />
        <div>
          <h1 itemProp="name" className="text-5xl font-medium mb-6">
            {cake.name}
          </h1>
          <strong itemProp="price" className="font-sans">
            {cake.price}$
          </strong>
          <meta itemProp="priceCurrency" content="USD" />
          <p className="mt-8 max-w-xl w-full text-lg tracking-wide leading-8 font-medium text-black/80 mb-14">
            {cake.description}
          </p>
          <button className="py-4 px-14 bg-rose-700 text-white rounded-full text-sm font-sans">
            Buy now
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(Cake);
