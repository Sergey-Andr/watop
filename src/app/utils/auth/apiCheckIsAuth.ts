"use server";

import { customInterceptor } from "@/app/utils/api";

export async function fetchCheckAuth(token: string) {
  try {
    const response = await customInterceptor({
      url: "/auth/refresh",
      method: "POST",
      body: { refreshToken: token },
    });

    if (!response.ok) {
      const error = await response.text();
      return { status: response.status, errors: error, data: {} };
    }

    const data = await response.json();

    return { status: 200, data: data };
  } catch (error) {
    return { status: 500, message: error, data: {} };
  }
}
