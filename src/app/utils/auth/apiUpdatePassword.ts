"use server";

import { customInterceptor } from "@/app/utils/api";

export async function apiUpdatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const response = await customInterceptor({
      url: "/auth/updatePassword",
      method: "POST",
      body: { email, password },
    });

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
