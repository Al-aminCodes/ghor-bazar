"use client";

import { useState } from "react";
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

type SortOption = "default" | "low" | "high";

type ProductListProps = {
  products: IProduct[];
};

const ProductList = ({ products }: ProductListProps) => {
  const [sortOption, setSortOption] = useState<SortOption>("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "low") {
      return a.today - b.today;
    }

    if (sortOption === "high") {
      return b.today - a.today;
    }

    return 0;
  });

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOption);
  };

  return (
    <section>
      {/* Sort + total */}

      <div className="flex min-h-13 items-center justify-end rounded-2xl border border-[#e1e8e1] bg-[#ffffff] px-4 shadow-sm my-7">
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-[#69716b]">
            সাজান
          </label>

          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="h-9 cursor-pointer rounded-lg border border-[#d5ddd6] bg-white px-3 text-xs text-[#303831] outline-none focus:border-[#9ca99f]"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low">কম থেকে বেশি</option>
            <option value="high">বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      {/* Products */}
      <div className="space-y-4">
        <p className="text-md text-[#737b75]">
          মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
