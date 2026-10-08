import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/sortProduct";
import React from "react";

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

type CategoryData = {
  icon: string;
  nameBn: string;
};

const CategoryProducts = async ({
  params,
}: {
  params: Promise<{ productCategory: string }>;
}) => {
  const { productCategory } = await params;

  // Products
  const productsRes = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${productCategory}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!productsRes.ok) {
    throw new Error(`Failed to fetch products: ${productsRes.status}`);
  }

  const data: IProduct[] = await productsRes.json();

  // Category
  const categoryRes = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/categories/${productCategory}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!categoryRes.ok) {
    throw new Error(`Failed to fetch category: ${categoryRes.status}`);
  }

  const categoryData: CategoryData = await categoryRes.json();

  return (
    <main className="min-h-screen bg-[#f3f7f3] py-4">
      <div className="container mx-auto space-y-5 px-4">
        {/* ================= CATEGORY HEADER ================= */}
        <section className="rounded-2xl border border-[#e1e8e1] bg-[#fbfcfb] px-5 py-4 shadow-sm">
          <div className="flex items-center gap-4">
            {/* Category Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffffff] text-3xl">
              {categoryData.icon}
            </div>

            {/* Category Information */}
            <div>
              <h1 className="text-xl font-bold text-[#26312a]">
                {categoryData.nameBn}
              </h1>

              <p className="mt-0.5 text-xs text-[#737b75]">
                {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও
                পরিবর্তন
              </p>
            </div>
          </div>
        </section>

        {/* ================= SORT ================= */}
        <ProductList products={data} />

        {/* ================= PRODUCTS ================= */}
      </div>
    </main>
  );
};

export default CategoryProducts;
