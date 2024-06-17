import { TOrders } from "@/app/utils/profile/get/apiAllOrders";

export default async function CakesOrderDetails({ order }: { order: TOrders }) {
  return (
    <div className="w-[55%] ml-auto pr-8 mt-4">
      {order.cakes.map((cake) => (
        <div
          key={cake.name}
          className="flex items-center justify-between mb-4 last:mb-0"
        >
          <div className="relative">
            <img
              src={`${process.env.NEXT_API_URL}/${cake.image}`}
              alt={`${cake.name} торта`}
              className="w-24 h-30"
            />
            <h3 className="absolute left-[110%] top-0 text-nowrap">
              {cake.name}
            </h3>
          </div>
          <div className="flex w-1/2">
            <p className="mr-[50%] text-nowrap">
              {cake.cost} лв <small>x</small> {cake.quantity} ед.
            </p>
            <strong className="font-sans text-nowrap">
              {cake.cost * cake.quantity} лв
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
}
