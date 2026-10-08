import Link from "next/link";

export type ICategory = {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
  category: string;
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
    <div className="container mx-auto px-4 py-5">
      {/* Mobile */}
      <div className="flex items-center justify-center gap-4 lg:hidden">
        {data.slice(0, 4).map((c: ICategory) => (
          <Link href={`/category/${c.category}`} key={c.id}>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span>{c.icon}</span>
              <p className="text-sm hover:text-green-500 hover:underline">
                {c.nameBn}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden items-center justify-center gap-6 lg:flex">
        {data.map((c: ICategory) => (
          <Link href="/" key={c.id}>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span>{c.icon}</span>
              <p className="hover:text-green-500 hover:underline">{c.nameBn}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavCategroy;
