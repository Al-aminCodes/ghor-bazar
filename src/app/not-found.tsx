import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-base-200/40 px-4 py-12">
      <div className="w-full max-w-lg text-center">
        {/* Illustration */}
        <div className="relative mx-auto mb-8 flex h-48 w-48 items-center justify-center rounded-full bg-primary/10">
          <div className="absolute inset-4 rounded-full border-2 border-dashed border-primary/30" />

          <SearchX size={88} strokeWidth={1.4} className="text-primary" />

          <span className="absolute -right-1 top-5 rounded-full bg-error px-4 py-2 text-sm font-bold text-error-content">
            404
          </span>
        </div>

        {/* Heading */}
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Page Not Found
        </p>

        <h1 className="text-3xl font-extrabold text-base-content sm:text-4xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-base-content/60">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, নাম পরিবর্তন করা
          হয়েছে অথবা পেজটির অস্তিত্ব নেই।
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary gap-2">
            <Home size={18} />
            হোম পেজে ফিরে যান
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn btn-outline gap-2"
          >
            <ArrowLeft size={18} />
            আগের পেজে ফিরুন
          </button>
        </div>

        {/* Footer message */}
        <div className="mt-10 border-t border-base-300 pt-5">
          <p className="text-sm text-base-content/50">
            আপনার নিত্যপ্রয়োজনীয় পণ্যের বাজারদর জানতে হোম পেজে ফিরে যান।
          </p>
        </div>
      </div>
    </main>
  );
}
