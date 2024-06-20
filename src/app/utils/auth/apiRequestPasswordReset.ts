"use server";

import { customInterceptor } from "@/app/utils/api";

export async function apiRequestPasswordReset(email: string | null) {
  try {
    const response = await customInterceptor({
      url: "/auth/requestPasswordReset",
      method: "POST",
      body: { email },
    });
    console.log(response.ok);
    if (!response.ok) {
      const error = await response.text();
      return { status: response.status, errors: error };
    }

    const data = await response.json();

    return { status: 200, data: data };
  } catch (error) {
    return { status: 500, message: error };
  }
}
