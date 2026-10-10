"use client";

import { Suspense, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import CategoryLink, { type ICategory } from "./categoryLinks";

type NavCategroyProps = {
  categories?: ICategory[];
};

function CategoryLinks({
  categories,
  onClick,
}: {
  categories: ICategory[];
  onClick?: () => void;
}) {
  return (
    <>
      {categories.map((category) => (
        <CategoryLink key={category.id} category={category} onClick={onClick} />
      ))}
    </>
  );
}

export default function NavCategroy({ categories = [] }: NavCategroyProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white px-3 py-3">
      {/* Mobile navigation */}
      <div className="flex items-center gap-2 md:hidden">
        <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto">
          <Suspense fallback={<div className="h-9" />}>
            <CategoryLinks categories={categories.slice(0, 3)} />
          </Suspense>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close categories" : "Open categories"}
          aria-expanded={isMenuOpen}
          className="shrink-0 rounded-lg border border-gray-200 p-2 hover:bg-green-100"
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Remaining mobile categories */}
      {isMenuOpen && (
        <div className="mt-3 grid grid-cols-2 gap-2 md:hidden">
          <Suspense fallback={<div className="col-span-2 h-9" />}>
            <CategoryLinks
              categories={categories.slice(3)}
              onClick={() => setIsMenuOpen(false)}
            />
          </Suspense>
        </div>
      )}

      {/* Desktop navigation */}
      <div className="hidden flex-wrap gap-2 md:flex">
        <Suspense fallback={<div className="h-9" />}>
          <CategoryLinks categories={categories} />
        </Suspense>
      </div>
    </nav>
  );
}
