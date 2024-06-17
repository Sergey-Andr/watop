//@ts-ignore
import { customInterceptor } from "@/app/utils/api";

export async function fetchCakeById(id: number) {
  try {
    const response = await customInterceptor({
      url: `/cake/${id}`,
      method: "GET",
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
