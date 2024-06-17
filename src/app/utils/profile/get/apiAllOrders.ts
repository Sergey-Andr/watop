"use server";

import { customInterceptor, IPersonalInfo } from "@/app/utils/api";
import { fetchCakeById } from "@/service/fetchCakeById";

interface IResponse {
  id: { id: number; quantity: number }[];
  deliveryAddress: {
    city: string;
    street: string;
    house: string;
    floor: string;
    time: string;
  };
  payment: string;
  totalCost: number;
  orderId: number;
  date: string;
  recipientFullName: string;
  recipientPhone: string;
  recipientEmail: string;
}

type TCake = { name: string; image: string; cost: number; quantity: number };
export type TOrders = Omit<IResponse, "id"> & { cakes: TCake[] };

export async function fetchAllOrders(
  email: Pick<IPersonalInfo, "email">["email"],
) {
  try {
    if (!email) {
      return { status: 401, message: "User is now authorized" };
    }

    const response = await customInterceptor({
      url: `/profile/allOrders?email=${encodeURIComponent(email)}`,
      method: "GET",
    });

    if (!response.ok) {
      const error = await response.text();
      return { status: response.status, errors: error };
    }

    const data: IResponse[] = await response.json();
    const cakes: TOrders[] = [];

    for (const order of data) {
      const tempCakes: any[] = [];
      let count = 0;

      for (const cake of order.id) {
        const { data: cakeData } = await fetchCakeById(cake.id);

        count += +cakeData.price * +cake.quantity;
        const newCake = {
          name: cakeData.name,
          image: cakeData.image,
          cost: cakeData.price,
          quantity: cake.quantity,
        };
        tempCakes.push(newCake);
      }

      const tempOrder = {
        orderId: order.orderId,
        date: order.date,
        deliveryAddress: order.deliveryAddress,
        payment: order.payment,
        cakes: tempCakes,
        totalCost: count,
        recipientFullName: order.recipientFullName,
        recipientPhone: order.recipientPhone,
        recipientEmail: order.recipientEmail,
      };

      cakes.push(tempOrder);
    }

    return { data: cakes };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
}
