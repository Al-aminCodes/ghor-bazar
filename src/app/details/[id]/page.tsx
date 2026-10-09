import ProductDetails from "@/components/productDetail";
import { notFound } from "next/navigation";
import React from "react";

const DetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${id}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!res.ok) {
     notFound();
    // throw new Error(`Failed to fetch products: ${res.status}`);
     
  }
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <ProductDetails product={data} />
    </div>
  );
};

export default DetailPage;
