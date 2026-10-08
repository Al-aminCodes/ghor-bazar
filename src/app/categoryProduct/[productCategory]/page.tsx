import React from "react";

const CategoryProducts = async ({
  params,
}: {
  params: Promise<{ productCategory: string }>;
}) => {
  const { productCategory } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${productCategory}`,
  );
  const data = await res.json();
  console.log(data);
  return <div></div>;
};

export default CategoryProducts;
