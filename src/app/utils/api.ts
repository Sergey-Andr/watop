import { cookies } from "next/headers";
import { ICake } from "@/service/fetchAllCakes";

export interface IOrder {
  id?: { id: number; quantity: number }[];
  deliveryAddress?: {
    city?: string;
    street?: string;
    house?: string;
    floor?: string;
    time?: string;
  };
  payment?: string;
  recipientFullName?: string;
  recipientPhone?: string;
  recipientEmail?: string;
  email: string | null | undefined;
}

export interface IPersonalInfo {
  firstName?: string;
  secondName?: string;
  birthDate?: Date;
  gender?: string;
  phone?: string;
  recipientEmail?: string;
  telegram?: string;
  deliveryAddress?: {
    city: string;
    street: string;
    house: string;
    floor: string;
  };
  card?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
  email: string | null;
  password: string;
}

type TUrls =
  | "/cakes"
  | `/cake/${number | string}`
  | "/auth/registration"
  | "/auth/login"
  | "/auth/logout"
  | "/auth/requestPasswordReset"
  | "/auth/updatePassword"
  | `/auth/activate/${string}`
  | "/auth/refresh"
  | "/auth/user"
  | "/profile/personalInfo"
  | "/profile/order"
  | `/profile/allPersonalData?email=${string}`
  | `/profile/allOrders?email=${string}`;

type TMethods = "POST" | "GET" | "DELETE";

type TBody =
  | ICake
  | IPersonalInfo
  | Omit<IPersonalInfo, "password">
  | IOrder
  | { refreshToken: string };

interface IOptions {
  url: TUrls;
  method: TMethods;
  body?: TBody;
}

export interface IResponse<T> {
  status: number;
  data: T;
  errors?: string;
  message?: string;
}

export async function customInterceptor({ url, method, body }: IOptions) {
  const accessToken = cookies().get("accessToken")?.value;

  let response = await fetch(`${process.env.NEXT_API_URL}/api${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    mode: "same-origin",
    credentials: "include",
    body: JSON.stringify(body),
  });

  if (response.status === 401) {
    const refreshResponse = await fetch(
      `${process.env.NEXT_API_URL}/api/auth/refresh`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      },
    );

    if (refreshResponse.ok) {
      const { accessToken } = await refreshResponse.json();
      cookies().set("accessToken", accessToken, {
        secure: true,
        httpOnly: true,
        maxAge: 60 * 60,
        path: "/",
      });

      let response = await fetch(`${process.env.NEXT_API_URL}/api/${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        mode: "same-origin",
        credentials: "include",
        body: JSON.stringify(body),
      });

      return await response.json();
    } else {
      return { error: 500, message: "Failed to refresh token", data: null };
    }
  }

  return response;
}
