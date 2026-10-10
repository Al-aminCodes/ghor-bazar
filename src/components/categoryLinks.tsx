"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type ICategory = {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
};

type CategoryLinkProps = {
  category: ICategory;
  onClick?: () => void;
};

export default function CategoryLink({ category, onClick }: CategoryLinkProps) {
  const pathname = usePathname();
  const href = `/categoryProduct/${category.slug}`;
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "bg-green-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-800"
      }`}
    >
      <span>{category.icon}</span>
      <span>{category.nameBn}</span>
    </Link>
  );
}
