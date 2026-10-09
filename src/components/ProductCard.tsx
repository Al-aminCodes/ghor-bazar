import Link from "next/link";
import { FaCaretUp, FaSortDown } from "react-icons/fa6";
// import { FiArrowUpRight, FiTrendingDown, FiTrendingUp } from "react-icons/fi";

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

type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const isDown = product.change.dir === "down";

  return (
    <Link href={`/details/${product.id}`}>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md">
        {/* Top */}
        <div className="flex items-start justify-between">
          {/* Product information */}
          <div className="flex items-center gap-3">
            {/* Product icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f1f6f1] text-3xl">
              {product.image}
            </div>

            {/* Name */}
            <div>
              <h3 className="text-lg font-bold leading-tight text-slate-800">
                {product.nameBn}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                প্রতি{" "}
                {product.unit === "kg"
                  ? "কেজি"
                  : product.unit === "piece"
                    ? "পিস"
                    : product.unit}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-4 flex items-end justify-between">
          {/* Today's price */}
          <div>
            <p className="text-sm text-slate-600">আজকের দাম</p>

            <p className="mt-1 text-xl font-bold text-slate-800">
              {product.today} টাকা
            </p>
          </div>

          {/* Price change */}
          <div
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold ${
              isDown ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"
            }`}
          >
            {isDown ? <FaSortDown size={12} /> : <FaCaretUp size={12} />}
            {Math.abs(product.change.pct)}%
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
