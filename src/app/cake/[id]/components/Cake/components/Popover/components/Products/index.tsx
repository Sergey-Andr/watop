import {
  Dispatch,
  FC,
  Fragment,
  memo,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useSelectShoppingCart } from "@/app/cake/[id]/store/useShoppingCartStore";
import { ICake } from "@/service/fetchAllCakes";
import { fetchCakeById } from "@/service/fetchCakeById";
import Product from "@/app/cake/[id]/components/Cake/components/Popover/components/Products/components/Product";
import NoCakes from "@/app/cake/[id]/components/Cake/components/Popover/components/Products/components/NoCakes";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProducts {
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}

export interface ITotalQuantity {
  price: number;
  quantity: number;
  id: number;
}

const Products: FC<IProducts> = ({ setIsClicked }): ReactElement => {
  const path = usePathname();
  const shoppingCart = useSelectShoppingCart();
  const [cakes, setCakes] = useState<ICake[]>([]);
  const [totalQuantity, setTotalQuantity] = useState<ITotalQuantity[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(1);

  useEffect(() => {
    (async () => {
      const fetchedCakes: ICake[] = [];
      for (const product of shoppingCart) {
        const { data } = await fetchCakeById(product.id);
        fetchedCakes.push(data);
      }
      setCakes(fetchedCakes);

      const initialTotalQuantity = fetchedCakes.map((cake, i) => ({
        price: cake.price,
        quantity: shoppingCart[i].quantity ?? 1,
        id: cake.id,
      }));
      setTotalQuantity(initialTotalQuantity);

      setTotalPrice(
        initialTotalQuantity.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        ),
      );
    })();
  }, [shoppingCart]);

  useEffect(() => {
    setTotalPrice(
      totalQuantity.reduce((sum, item) => sum + item.price * item.quantity, 0),
    );
  }, [totalQuantity]);

  if (cakes.length === 0) {
    return shoppingCart.length === 0 ? <NoCakes /> : <></>;
  }

  return (
    <>
      <div className="mb-16 flex flex-col">
        {cakes.map((cake, i) => (
          <Fragment key={cake.id}>
            <Product
              cake={cake}
              setTotalQuantity={setTotalQuantity}
              totalQuantity={totalQuantity}
              amount={totalQuantity[i].quantity}
            />
          </Fragment>
        ))}
      </div>
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => setIsClicked(false)}
          className="py-2 px-4 h-fit text-sky-600 border rounded-xl font-sans"
        >
          Продължи с пазаруването
        </button>
        <nav className="px-8 py-4 flex items-center border border-rose-500 bg-rose-200 w-fit">
          <span className="text-3xl pb-1 mr-8 font-sans">{totalPrice} лв</span>
          {path === "/checkout" ? (
            <button
              onClick={() => {
                setIsClicked(false);
              }}
              className="bg-rose-600 text-xl text-white rounded-xl py-4 px-8 font-sans"
            >
              Оформи поръчката
            </button>
          ) : (
            <Link
              href="/checkout"
              className="bg-rose-600 text-xl text-white rounded-xl py-4 px-8 font-sans"
            >
              Оформи поръчката
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default memo(Products);
