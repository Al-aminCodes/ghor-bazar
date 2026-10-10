"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FaCaretUp, FaSortDown } from "react-icons/fa6";

type Market = {
  market: string;
  location: string;
  min: number;
  max: number;
  avg: number;
};

type ProductDetailsProps = {
  product: {
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
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const markets = (product.markets as Market[])
    .map((market) => ({
      ...market,
      avg: (market.min + market.max) / 2,
    }))
    .sort((a, b) => a.avg - b.avg);

  const isDown = product.change.dir === "down";
  const isFlat = product.change.pct === 0;

  return (
    <main className="min-h-screen bg-base-200/40 py-4 md:py-6">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* =========================
            BREADCRUMB
        ========================== */}
        <div className="mb-4 flex items-center gap-1 text-sm text-base-content/60">
          <Link href={"/"}>
            {" "}
            <span>হোম</span>
          </Link>

          <ChevronRight size={15} />

          <Link href={"/"} key={product.id}>
            <span>{product.categoryNameBn}</span>
          </Link>

          <ChevronRight size={15} />

          <span className="font-medium text-base-content">
            {product.nameBn}
          </span>
        </div>

        {/* =========================
            PRODUCT HEADER
        ========================== */}
        <section className="card mb-5 border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body p-4 md:p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              {/* Product information */}
              <div className="flex items-center gap-4">
                {/* Product Image */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-base-200">
                  {product.image.startsWith("http") ||
                  product.image.startsWith("/") ? (
                    <Image
                      src={product.image}
                      alt={product.nameBn}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span
                      className="text-4xl"
                      role="img"
                      aria-label={product.nameBn}
                    >
                      {product.image || product.categoryIcon || "📦"}
                    </span>
                  )}
                </div>

                {/* Product text */}
                <div>
                  <h1 className="text-2xl font-bold text-base-content md:text-3xl">
                    {product.nameBn}
                  </h1>
                  <p className="mt-1 text-sm text-slate-500">
                    প্রতি{" "}
                    {product.unit === "kg"
                      ? "কেজি"
                      : product.unit === "piece"
                        ? "পিস"
                        : product.unit === "litre"
                          ? "লিটার"
                          : product.unit === "dozen"
                            ? " ডজন"
                            : product.unit}
                    {" - "}
                    <span>{product.categoryNameBn}</span>
                  </p>

                  <p className="mt-2 text-sm text-base-content/70">
                    আজকের বাজারদর অনুযায়ী দাম বেড়েছে
                  </p>
                </div>
              </div>

              {/* Today's price */}
              <div className="min-w-32.5 rounded-xl bg-base-200 px-5 py-4 text-center">
                <p className="text-xs text-base-content/60">আজকের দাম</p>

                <p className="mt-1 text-3xl font-bold">{product.today}</p>

                <p className="text-xs text-base-content/60">
                  টাকা / {product.unit}
                </p>

                <div
                  className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold ${
                    isFlat
                      ? "bg-gray-100 text-gray-500"
                      : isDown
                        ? "bg-red-50 text-red-500"
                        : "bg-green-50 text-green-600"
                  }`}
                >
                  {isFlat ? (
                    <span>—</span>
                  ) : isDown ? (
                    <FaSortDown size={12} />
                  ) : (
                    <FaCaretUp size={12} />
                  )}
                  {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            PRICE SUMMARY
        ========================== */}
        <section className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body p-4 md:p-6">
            <h2 className="mb-4 text-lg font-bold">দামের সারসংক্ষেপ</h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {/* Yesterday */}
              <div className="rounded-xl border border-base-300 bg-base-100 p-4">
                <p className="text-sm text-base-content/60">সর্বনিম্ন দাম</p>

                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-success">
                    {markets[0].min}
                  </span>

                  <span className="text-sm text-base-content/60">টাকা</span>
                </div>

                <p className="mt-1 text-xs text-base-content/50">
                  সবচেয়ে কম দামের বাজার
                </p>
              </div>

              {/* Last week */}
              <div className="rounded-xl border border-base-300 bg-base-100 p-4">
                <p className="text-sm text-base-content/60">সর্বাধিক দাম</p>

                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-error">
                    {markets[markets.length - 1].max}
                  </span>

                  <span className="text-sm text-base-content/60">টাকা</span>
                </div>

                <p className="mt-1 text-xs text-base-content/50">
                  সবচেয়ে বেশি দামের বাজার
                </p>
              </div>

              {/* Last month */}
              <div className="rounded-xl border border-base-300 bg-base-100 p-4">
                <p className="text-sm text-base-content/60">গড় দাম</p>

                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-success">
                    {(markets[0].min + markets[markets.length - 1].max) / 2}
                  </span>

                  <span className="text-sm text-base-content/60">টাকা</span>
                </div>

                <p className="mt-1 text-xs text-base-content/50">
                  প্রতি কেজি-এর হিসাবে
                </p>
              </div>
            </div>

            {/* =========================
                MARKET PRICE
            ========================== */}
            <div className="mt-6">
              <h2 className="mb-4 text-lg font-bold">বাজারভিত্তিক আজকের দাম</h2>

              <div className="overflow-x-auto rounded-xl border border-base-300">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr className="bg-base-200 text-sm">
                      <th>বাজার</th>
                      <th>এলাকা</th>
                      <th className="text-right">সর্বনিম্ন</th>
                      <th className="text-right">সর্বোচ্চ</th>
                      <th className="text-right">গড়</th>
                    </tr>
                  </thead>

                  <tbody>
                    {markets.length > 0 ? (
                      markets.map((market, index) => (
                        <tr key={`${market.market}-${index}`}>
                          <td className="font-medium">{market.market}</td>

                          <td>{market.location}</td>

                          <td className="text-right">{market.min} টাকা</td>

                          <td className="text-right">{market.max} টাকা</td>

                          <td className="text-right font-semibold">
                            {market.avg} টাকা
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={5}
                          className="py-10 text-center text-base-content/50"
                        >
                          কোনো বাজারের তথ্য পাওয়া যায়নি।
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
