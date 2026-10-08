import { FaCaretUp, FaSortDown } from "react-icons/fa6";
import ProductCard from "./ProductCard";
export type IProduct = {
  id: number;
  category: string;
  categoryIcon: string;
  categoryNameBn: string;
  change: {
    dir: "up" | "down";
    pct: number;
  };
  image: string;
  lastMonth: number;
  lastWeek: number;
  markets: unknown[];
  nameBn: string;
  slug: string;
  today: number;
  unit: string;
  yesterday: number;
};
const ProductHome = async () => {
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
  const data: IProduct[] = await res.json();
  const upRate: IProduct[] = data.filter((p) => p.change.dir === "up");
  const downRate: IProduct[] = data.filter((p) => p.change.dir === "down");

  return (
    <div>
      <div className="py-10">
        <div className="flex gap-2 mb-7 items-center">
          <FaCaretUp className="text-red-700 " size={30} />
          <h1 className="font-bold text-2xl">আজ দাম বেড়েছে</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {upRate.slice(0, 6).map((p: IProduct) => (
            <ProductCard key={p.id} product={p}></ProductCard>
          ))}
        </div>
      </div>
      <div className="py-10">
        <div className="flex gap-2 mb-7 items-center">
          <FaSortDown className="text-green-700 " size={30} />
          <h1 className="font-bold text-2xl">আজ দাম কমেছে</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {downRate.slice(0, 6).map((p: IProduct) => (
            <ProductCard key={p.id} product={p}></ProductCard>
          ))}
        </div>
      </div>
      <div className="py-10">
        <div className=" mb-7 space-y-3">
          <h1 className="font-bold text-2xl">সব পণ্য</h1>
          <p> মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map((p: IProduct) => (
            <ProductCard key={p.id} product={p}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
