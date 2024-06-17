import { FC, memo, ReactElement } from "react";
import Image, { StaticImageData } from "next/image";

interface IArticle {
  image: StaticImageData;
  alt: string;
  text: string;
  subText: string;
  isMain?: boolean;
}

const Article: FC<IArticle> = ({
  image,
  alt,
  text,
  subText,
  isMain = false,
}): ReactElement => {
  return (
    <article
      aria-label={text}
      className="flex flex-col items-center mr-28 last:mr-0"
    >
      <Image
        src={image}
        alt={alt}
        className={`rounded-full ${isMain ? "w-56 h-56" : "w-48 h-48"} mb-8`}
      />
      <h4 className="text-2xl text-center w-36">
        {text}{" "}
        <sub className="text-xx block leading-5 text-black/60 font-medium">
          {subText}
        </sub>
      </h4>
    </article>
  );
};

export default memo(Article);
