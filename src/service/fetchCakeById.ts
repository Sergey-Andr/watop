export async function fetchCakeById(id: number) {
  const data = await fetch(`${process.env.NEXT_API_URL}/api/cake/${id}`, {
    method: "GET",
  });
  console.log(data);
  const cake = await data.json();

  return { data: cake };
}
