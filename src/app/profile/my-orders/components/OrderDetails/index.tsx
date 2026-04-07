import { TOrders } from "@/app/utils/profile/get/apiAllOrders";
import Popover from "@/app/profile/my-orders/components/OrderDetails/Popover";

export default async function OrderDetails({ order }: { order: TOrders }) {
  return (
    <div className="w-fit mt-4">
      <div>
        <label className="mb-2 block">Адреса доставки</label>
        <p className="flex flex-col text-sm font-sans">
          <span className="text-black/60">
            Вулиця:{" "}
            <span className="text-rose-600">
              {order.deliveryAddress.street}
            </span>
          </span>
          <span className="text-black/60">
            Будинок:{" "}
            <span className="text-rose-600">{order.deliveryAddress.house}</span>
          </span>
          <span className="text-black/60">
            Поверх:{" "}
            <span className="text-rose-600">{order.deliveryAddress.floor}</span>
          </span>
          <span className="text-black/60">
            о:{" "}
            <span className="text-rose-600">
              {order.deliveryAddress.time.split(" ")[0] +
                " " +
                order.deliveryAddress.time.split(" ")[1]}
            </span>
          </span>
        </p>
      </div>
      <hr className="my-2 border-stone-300" />
      <div>
        <label>Робочий час</label>
        <p className="flex flex-col font-sans text-black/60 text-sm leading-6">
          <span>
            Пн-Пт: <span className="text-rose-600">08:00-23:00</span>
          </span>
          <span>
            Сб-Нд: <span className="text-rose-600">09:00-22:00</span>
          </span>
        </p>
      </div>
      <hr className="my-2 border-stone-300" />
      <div>
        <label>Отримувач замовлення</label>
        <p className="flex flex-col font-sans text-black/60 text-sm leading-6">
          <span>{order.recipientFullName}</span>
          <span>+359 {order.recipientPhone}</span>
          <span>{order.recipientEmail}</span>
        </p>
      </div>
      <hr className="my-4 border-stone-300" />
      <Popover />
      <hr className="my-4 border-stone-300" />
      <h3 className="flex items-center ">
        Телефон:
        <sub className="font-sans pb-1 pl-4 text-black/60">+359 000000000</sub>
      </h3>
    </div>
  );
}
