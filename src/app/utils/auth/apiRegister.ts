"use server";
import { cookies } from "next/headers";
import { customInterceptor } from "@/app/utils/api";
import { EMAIL } from "@/features/getEmail";
import { redirect } from "next/navigation";

export async function fetchRegistration(formData: FormData): Promise<any> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await customInterceptor({
      url: "/auth/registration",
      method: "POST",
      body: { password, email },
    });

    if (!response.ok) {
      const error = await response.text();
      return { status: response.status, errors: error };
    }

    const data = await response.json();

    cookies().set("refreshToken", data.refreshToken, {
      secure: true,
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    cookies().set("accessToken", data.accessToken, {
      secure: false,
      httpOnly: false,
      maxAge: 60 * 60,
      path: "/",
    });
    cookies().set(EMAIL, data.user.email, {
      secure: false,
      httpOnly: false,
      path: "/",
    });

    redirect("/profile/my-orders");
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
}
