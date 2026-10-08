import Link from "next/link";

export type ICategory = {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
};
const NavCategroy = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }
  const data: ICategory[] = await res.json();

  return (
    <div className="flex items-center gap-5 pl-4  container mx-auto py-5">
      {data.map((c: ICategory) => (
        <Link href={"/"} key={c.id}>
          <div className="flex gap-1">
            {" "}
            <span>{c.icon}</span>{" "}
            <p className="hover:underline hover:text-green-500">{c.nameBn}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavCategroy;
