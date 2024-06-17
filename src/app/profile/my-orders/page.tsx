"use server";
import { fetchAllOrders } from "@/app/utils/profile/get/apiAllOrders";
import { EMAIL } from "@/features/getEmail";
import { cookies } from "next/headers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import process from "process";
import { Suspense } from "react";
import Loading from "@/app/profile/my-orders/loading";
import moment from "moment/moment";
import OrderDetails from "@/app/profile/my-orders/components/OrderDetails";
import CakesOrderDetails from "@/app/profile/my-orders/components/CakesOrderDetails";

export default async function MyOrders() {
  const { data } = await fetchAllOrders(cookies().get(EMAIL)?.value || null);

  moment().locale("bg");
  return (
    <Suspense fallback={<Loading />}>
      <section>
        <h2 className="text-5xl mb-4">Моите поръчки</h2>
        <Accordion type="single" collapsible className="text-xl mb-8">
          {data?.map((order, i) => (
            <AccordionItem
              key={order.orderId}
              value={`item-${i + 1}`}
              className="font-normal"
            >
              <AccordionTrigger className="flex justify-between pr-8 hover:no-underline group/order">
                <div className="flex flex-col items-start ">
                  <strong className="font-sans text-base flex items-center h-fit ">
                    № {order.orderId}{" "}
                    <sub className="pl-2 pb-1 text-black/60">
                      от {order.date}
                    </sub>
                  </strong>
                  <strong className="text-emerald-500 font-sans text-base">
                    Изпълнено
                  </strong>
                </div>
                <div className="flex">
                  {order.cakes.map((cake) => (
                    <img
                      key={cake.image}
                      src={`${process.env.NEXT_API_URL}/${cake.image}`}
                      alt={`${cake.name} cake`}
                      itemProp="image"
                      className="w-16 h-20 mr-2 last:mr-0"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <label>Платено</label>
                  <strong className="font-sans text-rose-600 group-hover/order:underline">
                    {order.totalCost} лв
                  </strong>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg flex border-t-2">
                <OrderDetails order={order} />
                <CakesOrderDetails order={order} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Suspense>
  );
}
