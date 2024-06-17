import {
  Dispatch,
  FC,
  memo,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ICake } from "@/app/utils/cakes/fetchAllCakes";
import process from "process";
import { ITotalQuantity } from "@/app/cake/[id]/components/Cake/components/Popover/components/Products";
import { SlOptionsVertical } from "react-icons/sl";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  useSelectShoppingCart,
  useSetShoppingCartActions,
} from "@/app/cake/[id]/store/useShoppingCartStore";

interface IProduct {
  cake: ICake;
  totalQuantity: ITotalQuantity[];
  setTotalQuantity: Dispatch<SetStateAction<ITotalQuantity[]>>;
  amount: number;
}

const Product: FC<IProduct> = ({
  cake,
  totalQuantity,
  setTotalQuantity,
  amount,
}): ReactElement => {
  const [counter, setCounter] = useState(amount);
  const { setShoppingCart } = useSetShoppingCartActions();
  const shoppingCart = useSelectShoppingCart();

  useEffect(() => {
    const targetIndex = totalQuantity.findIndex((item) => item.id === cake.id);

    if (targetIndex !== -1) {
      const updatedTotalQuantity = totalQuantity.map((item, index) =>
        index === targetIndex ? { ...item, quantity: counter } : item,
      );
      setTotalQuantity(updatedTotalQuantity);

      const cakes = shoppingCart.map((product) =>
        product.id === cake.id ? { ...product, quantity: counter } : product,
      );
      setShoppingCart(cakes);
    } else {
      setTotalQuantity((prevState) => [
        ...prevState,
        {
          id: cake.id,
          price: cake.price,
          quantity: counter,
        },
      ]);

      const cakes = shoppingCart.map((product) =>
        product.id === cake.id ? { ...product, quantity: counter } : product,
      );
      setShoppingCart(cakes);
    }
  }, [counter]);

  return (
    <div className="flex justify-between items-end mb-4 relative">
      <div className="flex relative">
        <img
          src={`${process.env.NEXT_API_URL}/${cake.image}`}
          alt={`${cake.name} cake`}
          itemProp="image"
          className="w-40 h-56 overflow-hidden mr-8"
        />
        <h3 className="text-xl font-medium absolute left-48 w-full text-nowrap">
          {cake.name}
        </h3>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
          disabled={counter === 1}
          className={`text-5xl mr-3 pb-2 ${counter === 1 ? "text-gray-300" : "hover:text-rose-600"} duration-300 select-none`}
        >
          -
        </button>
        <input
          type="text"
          value={counter}
          onChange={(e) => {
            if (+e.target.value <= 10 && +e.target.value >= 1)
              setCounter(+e.target.value);
          }}
          max={10}
          maxLength={2}
          className="w-14 h-10 rounded-xl outline outline-1 outline-black text-center mr-2 text-xl font-sans"
        />
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          disabled={counter === 10}
          className={`text-5xl pb-2 ${counter === 10 ? "text-gray-300" : "hover:text-rose-600"} duration-300 select-none mr-20`}
        >
          +
        </button>
        <span className="text-3xl text-rose-600 text-end w-28 pb-4">
          {cake.price * counter} лв
        </span>
      </div>
      <Popover>
        <PopoverTrigger className=" absolute right-0 top-4">
          <SlOptionsVertical className="w-5 h-5 text-black/70 hover:text-rose-600 duration-300" />
        </PopoverTrigger>
        <PopoverContent
          onClick={() => {
            setShoppingCart(
              shoppingCart.filter((product) => product.id !== cake.id),
            );
          }}
          className="group/delete cursor-pointer flex items-center justify-start w-fit px-8 py-2"
        >
          <FaRegTrashAlt className="group-hover/delete:text-rose-600 mr-2 duration-300" />
          <h4 className="group-hover/delete:text-rose-600 duration-300">
            Изтриване
          </h4>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default memo(Product);
