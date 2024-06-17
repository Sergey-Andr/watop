import Api from "@/api/Api";

export async function fetchAllCakes() {
  const res = await Api.get(`/api/cakes`);

  return { data: res };
}
