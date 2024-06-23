import { memo, ReactElement } from "react";

const Navigation = (): ReactElement => {
  return (
    <nav role="navigation" className="flex">
      <a
        href="/#"
        className="text-lg mr-4 hover:text-black/40 duration-300 cursor-pointer font-medium text-black/80"
      >
        Начало
      </a>

      <a
        href="/#order"
        className="text-lg mr-4 hover:text-black/40 duration-300 cursor-pointer font-medium text-black/80"
      >
        Как да поръчате
      </a>

      <a
        href="/#catalog"
        className="text-lg mr-4 hover:text-black/40 duration-300 cursor-pointer font-medium text-black/80"
      >
        Каталог
      </a>

      <a
        href="/#delivery"
        className="text-lg mr-4 hover:text-black/40 duration-300 cursor-pointer font-medium text-black/80"
      >
        Доставка
      </a>
    </nav>
  );
};

export default memo(Navigation);
