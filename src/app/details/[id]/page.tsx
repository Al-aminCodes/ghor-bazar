import ProductDetails from "@/components/productDetail";
import { notFound } from "next/navigation";
import React from "react";

const DetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  // Validate the ID
  if (!id || !/^\d+$/.test(id)) {
    notFound();
  }

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${id}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  // Handle 404 or other unsuccessful responses
  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`);
  }

  const data = await res.json();

  // Handle an empty or missing product
  if (!data || !data.id) {
    notFound();
  }

  return (
    <div>
      <ProductDetails product={data} />
    </div>
  );
};

export default DetailPage;
