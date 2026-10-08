interface IProducat {
  id: number;
  nameBn: string;
  today: number;
  image: string;
  change: {
    dir: string;
    pct: number;
  };
}

const HeadLine = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }
  const data: IProducat[] = await res.json();
  console.log(data);

  return (
    <div>
      {data.map((prod) => {
        return <p key={prod.id}>{prod.nameBn}</p>;
      })}
    </div>
  );
};

export default HeadLine;
