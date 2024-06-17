import Api from "@/api/Api";

export async function updateCakes({ id, newCake }) {
  const res = await Api.put(`api/cake/${id}`, {
    ...newCake,
  });
  return { data: res };
}
