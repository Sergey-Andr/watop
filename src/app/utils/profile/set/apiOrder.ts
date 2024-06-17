"use server";

import { customInterceptor, IOrder } from "@/app/utils/api";

export async function fetchOrder(orderData: IOrder) {
  try {
    if (!orderData.email) {
      return { status: 401, message: "User is now authorized" };
    }

    const response = await customInterceptor({
      url: "/profile/order",
      method: "POST",
      body: orderData,
    });

    if (!response.ok) {
      const error = await response.text();
      return { status: response.status, errors: error };
    }

    const data = await response.json();
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
}
