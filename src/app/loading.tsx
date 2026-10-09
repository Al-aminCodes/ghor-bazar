const Loading = () => {
  const firstSection = Array.from({ length: 6 });
  const secondSection = Array.from({ length: 6 });

  return (
    <main className="min-h-screen bg-[#f3f7f3] py-8">
      <div className="container mx-auto px-4">
        {/* ================= PRICE INCREASED ================= */}
        <section>
          {/* Heading skeleton */}
          <div className="mb-7 flex items-center gap-3">
            <div className="h-4 w-4 animate-pulse rounded-sm bg-[#dce4dd]" />

            <div className="h-7 w-52 animate-pulse rounded-md bg-[#dce4dd]" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {firstSection.map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </section>

        {/* ================= PRICE DECREASED ================= */}
        <section className="mt-20">
          {/* Heading skeleton */}
          <div className="mb-7 flex items-center gap-3">
            <div className="h-4 w-4 animate-pulse rounded-sm bg-[#dce4dd]" />

            <div className="h-7 w-48 animate-pulse rounded-md bg-[#dce4dd]" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {secondSection.map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

const ProductSkeleton = () => {
  return (
    <div className="h-39.5 rounded-2xl border border-[#e0e7e1] bg-[#fbfcfb] p-4">
      {/* Product top */}
      <div className="flex items-center gap-3">
        {/* Image */}
        <div className="h-14 w-14 shrink-0 animate-pulse rounded-xl bg-[#e6ece7]" />

        {/* Name */}
        <div className="flex-1 space-y-2">
          <div className="h-5 w-32 animate-pulse rounded-md bg-[#e1e8e2]" />

          <div className="h-3 w-20 animate-pulse rounded-md bg-[#e8ede9]" />
        </div>
      </div>

      {/* Price */}
      <div className="mt-5">
        <div className="h-3 w-20 animate-pulse rounded bg-[#e4eae5]" />

        <div className="mt-2 h-6 w-24 animate-pulse rounded-md bg-[#dce4dd]" />
      </div>

      {/* Change badge */}
      <div className="relative">
        <div className="absolute -right-1 bottom-0 h-7 w-16 animate-pulse rounded-full bg-[#edf2ee]" />
      </div>
    </div>
  );
};

export default Loading;
