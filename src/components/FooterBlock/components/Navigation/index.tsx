import { memo, ReactElement } from "react";

const Navigation = (): ReactElement => {
  return (
    <nav role="navigation" className="flex">
      <a
        href="/#"
        className="text-lg mr-4 hover:text-black/40 duration-300 cursor-pointer font-medium text-black/80"
      >
        Home
      </a>

      <a
        href="/#order"
        className="text-lg mr-4 hover:text-black/40 duration-300 cursor-pointer font-medium text-black/80"
      >
        How to order
      </a>

      <a
        href="/#catalog"
        className="text-lg mr-4 hover:text-black/40 duration-300 cursor-pointer font-medium text-black/80"
      >
        Catalog
      </a>

      <a
        href="/#delivery"
        className="text-lg mr-4 hover:text-black/40 duration-300 cursor-pointer font-medium text-black/80"
      >
        Delivery
      </a>
    </nav>
  );
};

export default memo(Navigation);
