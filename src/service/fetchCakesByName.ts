//@ts-ignore
export async function fetchCakesByName(name: string): any {
  const data = await fetch(`${process.env.NEXT_API_URL}/api/cakes/${name}`, {
    method: "GET",
  });

  const cakes = await data.json();

  return { data: cakes };
}
