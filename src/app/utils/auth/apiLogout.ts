"use server";

import { cookies } from "next/headers";
import { customInterceptor } from "@/app/utils/api";

export async function fetchLogout() {
  const token = cookies().get("refreshToken")?.value;
  if (!token) {
    return { status: 401, message: "User is not authorized" };
  }

  try {
    const response = await customInterceptor({
      url: "/auth/logout",
      method: "POST",
      body: { refreshToken: token },
    });

    if (!response.ok) {
      const error = await response.text();
      return { status: response.status, errors: error };
    }

    const data = response.json();

    return { status: response.status, data: data };
  } catch (error) {
    return { status: 500, message: error };
  }
}
