"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      setErrorMessage("ইমেইল এবং পাসওয়ার্ড দিন");
      setLoading(false);
      return;
    }

    try {
      // Better Auth
      //
      // const { data, error } = await signIn.email({
      //   email,
      //   password,
      // });
      //
      // if (error) {
      //   setErrorMessage(error.message);
      //   return;
      // }

      console.log({
        email,
        password,
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("সাইন ইন করতে সমস্যা হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f3f7f3] px-4 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-lg">
        {/* ================= HEADER ================= */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#26332b] sm:text-4xl">
            সাইন ইন
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#718078] sm:text-base">
            বিস্তারিত দাম, বাজার তুলনা ও ফ্রাইস দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* ================= CARD ================= */}
        <div className="rounded-2xl border border-[#dfe8e1] bg-white p-6 shadow-[0_8px_30px_rgba(38,51,43,0.05)] sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ================= EMAIL ================= */}
            <TextField name="email" type="email" isRequired>
              <Label className="mb-2 block text-sm font-medium text-[#334039]">
                ইমেইল
              </Label>

              <Input
                placeholder="you@example.com"
                className="h-12 w-full rounded-lg border border-[#dfe7e1] bg-white px-4 text-base text-[#26332b] shadow-none outline-none transition-all placeholder:text-[#9aa69f] hover:border-[#b8c8bd] focus:border-[#079447]"
              />

              <FieldError className="mt-1.5 text-sm text-red-500" />
            </TextField>

            {/* ================= PASSWORD ================= */}
            <TextField name="password" type="password" isRequired>
              <Label className="mb-2 block text-sm font-medium text-[#334039]">
                পাসওয়ার্ড
              </Label>

              <Input
                placeholder="পাসওয়ার্ড লিখুন"
                className="h-12 w-full rounded-lg border border-[#dfe7e1] bg-white px-4 text-base text-[#26332b] shadow-none outline-none transition-all placeholder:text-[#9aa69f] hover:border-[#b8c8bd] focus:border-[#079447]"
              />

              <FieldError className="mt-1.5 text-sm text-red-500" />
            </TextField>

            {/* ================= ERROR ================= */}
            {errorMessage && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {errorMessage}
              </div>
            )}

            {/* ================= SIGN IN ================= */}
            <Button
              type="submit"
              isDisabled={loading}
              className="h-12 w-full rounded-lg bg-[#079447] text-base font-semibold text-white shadow-sm transition-all hover:bg-[#07843f] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
            </Button>
          </form>

          {/* ================= DIVIDER ================= */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e3e9e5]" />

            <span className="text-sm text-[#8a958f]">অথবা</span>

            <div className="h-px flex-1 bg-[#e3e9e5]" />
          </div>

          {/* ================= SOCIAL LOGIN ================= */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Google */}
            <Button
              type="button"
              className="h-11 rounded-lg border border-[#dfe7e1] bg-white text-sm font-medium text-[#354139] shadow-none transition-all hover:border-[#c5d2c9] hover:bg-[#f8faf8]"
            >
              <span className="font-bold text-[#4285F4]">G</span>
              Google দিয়ে চালিয়ে যান
            </Button>

            {/* Github */}
            <Button
              type="button"
              className="h-11 rounded-lg border border-[#dfe7e1] bg-white text-sm font-medium text-[#354139] shadow-none transition-all hover:border-[#c5d2c9] hover:bg-[#f8faf8]"
            >
              <span className="font-bold text-[#26332b]">●</span>
              GitHub দিয়ে চালিয়ে যান
            </Button>
          </div>

          {/* ================= SIGN UP ================= */}
          <p className="mt-7 text-center text-sm text-[#718078]">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#079447] transition-colors hover:text-[#067b3b] hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        {/* ================= HOME ================= */}
        <div className="mt-7 text-center">
          <Link
            href="/"
            className="text-sm text-[#8a958f] transition-colors hover:text-[#079447]"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}
