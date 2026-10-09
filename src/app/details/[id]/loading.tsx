export default function Loading() {
  return (
    <main className="min-h-screen bg-base-200/40 py-4 md:py-6">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Breadcrumb Skeleton */}
        <div className="skeleton mb-4 h-4 w-48" />

        {/* Product Header */}
        <section className="card mb-5 border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body p-4 md:p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                {/* Product Image */}
                <div className="skeleton h-20 w-20 shrink-0 rounded-xl" />

                {/* Product Information */}
                <div className="flex-1 space-y-3">
                  <div className="skeleton h-7 w-48 max-w-full" />
                  <div className="skeleton h-4 w-32" />
                  <div className="skeleton h-4 w-64 max-w-full" />
                </div>
              </div>

              {/* Today's Price */}
              <div className="rounded-xl bg-base-200 p-4 text-center md:min-w-[130px]">
                <div className="skeleton mx-auto h-3 w-20" />
                <div className="skeleton mx-auto mt-3 h-8 w-14" />
                <div className="skeleton mx-auto mt-2 h-3 w-20" />
                <div className="skeleton mx-auto mt-3 h-3 w-12" />
              </div>
            </div>
          </div>
        </section>

        {/* Price Summary */}
        <section className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body p-4 md:p-6">
            <div className="skeleton mb-4 h-6 w-44" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-base-300 p-4"
                >
                  <div className="skeleton h-4 w-24" />
                  <div className="skeleton mt-3 h-7 w-20" />
                  <div className="skeleton mt-2 h-3 w-36 max-w-full" />
                </div>
              ))}
            </div>

            {/* Market Table */}
            <div className="mt-6">
              <div className="skeleton mb-4 h-6 w-52" />

              <div className="overflow-hidden rounded-xl border border-base-300">
                {/* Table Header */}
                <div className="grid grid-cols-3 gap-4 bg-base-200 p-4 sm:grid-cols-5">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className={`skeleton h-4 ${
                        item > 3 ? "hidden sm:block" : ""
                      }`}
                    />
                  ))}
                </div>

                {/* Table Rows */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
                  <div
                    key={row}
                    className="grid grid-cols-3 gap-4 border-t border-base-300 p-4 sm:grid-cols-5"
                  >
                    {[1, 2, 3, 4, 5].map((col) => (
                      <div
                        key={col}
                        className={`skeleton h-4 ${
                          col > 3 ? "hidden sm:block" : ""
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
