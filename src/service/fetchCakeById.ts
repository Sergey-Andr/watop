import Api from "@/api/Api";

export async function fetchCake({ id }) {
  const res = await Api.get(`/api/cake/${id}`);

  return { data: res };
}
