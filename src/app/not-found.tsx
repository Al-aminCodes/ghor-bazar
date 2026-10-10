import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-green-700">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-slate-800">
        পণ্যটি খুঁজে পাওয়া যায়নি!
      </h2>

      <p className="mt-2 text-slate-500">
        আপনি যে পণ্যটি খুঁজছেন সেটি নেই অথবা সরিয়ে ফেলা হয়েছে।
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
