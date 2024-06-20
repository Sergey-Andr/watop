import { FC, ReactElement } from "react";
import Link from "next/link";
import process from "process";
import { AnimationControls, motion } from "framer-motion";
import { variants } from "@/components/CatalogBlock/components/Catalog";
import { ICake } from "@/service/fetchAllCakes";
import Heart from "@/components/CatalogBlock/components/Catalog/component/Heart";
import { useSelectWishList } from "@/components/CatalogBlock/store/useWishListStore";

interface ISmallCart {
  cake: ICake;
  animation: AnimationControls;
}

const SmallCart: FC<ISmallCart> = ({ cake, animation }): ReactElement => {
  const wishList = useSelectWishList();
  return (
    <motion.li
      variants={variants}
      initial="hidden"
      animate={animation}
      exit="exit"
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 50,
      }}
      itemScope
      itemType="http://schema.org/Product"
      className="w-72 h-fit flex flex-col items-start justify-center odd:mr-8 first:mb-8"
    >
      <Link
        role="link"
        href={`/cake/${cake.id}`}
        className="w-full relative mb-4 group/cake"
      >
        <img
          src={`${process.env.NEXT_API_URL}/${cake.image}`}
          alt={`${cake.name} cake`}
          itemProp="image"
          className="w-full h-96 overflow-hidden"
        />
        <Heart
          fill={`${wishList.includes(cake.id) ? "#e11d48" : "transparent"}`}
          stroke={`${wishList.includes(cake.id) ? "transparent" : "#000"}`}
          className={`absolute top-4 right-4 w-8 h-8 group-hover/cake:block hidden duration-300`}
          id={cake.id}
        />
      </Link>
      <div className="font-sans w-full h-fit flex items-center justify-between px-2">
        <div>
          <h3 itemProp="name" className=" font-bold">
            {cake.name}
          </h3>
          <p>{cake.taste}</p>
        </div>
        <strong itemProp="offers" className="font-sans">
          <span itemProp="price">{cake.price} лв</span>
          <meta itemProp="priceCurrency" content="USD" />
        </strong>
      </div>
    </motion.li>
  );
};

export default SmallCart;
