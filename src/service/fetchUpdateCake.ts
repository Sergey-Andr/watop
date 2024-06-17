import { ICake } from "@/service/fetchAllCakes";

interface IFetchUpdateCake {
  id: number;
  newCake: ICake;
}

export async function fetchUpdateCake({ id, newCake }: IFetchUpdateCake) {
  const res = await fetch(`${process.env.NEXT_API_URL}/api/cake/${id}`, {
    method: "GET",
    body: JSON.stringify(newCake),
  });
  const cake = await res.json();
  return { data: cake };
}
