const Loading = () => {
  return (
    <main className="min-h-screen bg-[#f3f7f3] py-4">
      <div className="container mx-auto space-y-5 px-4">
        {/* Header skeleton */}
        <div className="h-18 animate-pulse rounded-2xl border border-[#e1e8e1] bg-[#fbfcfb]" />

        {/* Sort skeleton */}
        <div className="flex h-12.5 items-center justify-end rounded-2xl border border-[#e1e8e1] bg-[#fbfcfb] px-4">
          <div className="h-8 w-24 animate-pulse rounded-lg bg-[#edf1ed]" />
        </div>

        {/* Text */}
        <div className="h-4 w-48 animate-pulse rounded bg-[#dfe6df]" />

        {/* Product cards */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-26.5 animate-pulse rounded-2xl border border-[#e1e8e1] bg-[#fbfcfb]"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;
