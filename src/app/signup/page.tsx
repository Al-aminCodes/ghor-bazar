"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirmPassword")?.toString();

    // Check password
    if (password !== confirmPassword) {
      setErrorMessage("পাসওয়ার্ড দুটি একই নয়");
      setLoading(false);
      return;
    }

    if (!name || !email || !password) {
      setErrorMessage("সবগুলো তথ্য পূরণ করুন");
      setLoading(false);
      return;
    }

    try {
      // এখানে আপনার Better Auth signup code বসাবেন
      console.log({
        name,
        email,
        password,
      });

      // Example:
      //
      // const { data, error } = await signUp.email({
      //   name,
      //   email,
      //   password,
      // });
      //
      // if (error) {
      //   setErrorMessage(error.message);
      //   return;
      // }
    } catch (error) {
      console.error(error);
      setErrorMessage("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f8f4] px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        {/* Header */}
        <div className="mb-7 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <TextField name="name" isRequired>
              <Label className="mb-2 block text-sm font-medium text-slate-700">
                নাম
              </Label>

              <Input
                placeholder="যেমন: রহিম উদ্দিন"
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-green-500"
              />

              <FieldError className="mt-1 text-xs text-red-500" />
            </TextField>

            {/* Email */}
            <TextField name="email" type="email" isRequired>
              <Label className="mb-2 block text-sm font-medium text-slate-700">
                ইমেইল
              </Label>

              <Input
                placeholder="you@example.com"
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-green-500"
              />

              <FieldError className="mt-1 text-xs text-red-500" />
            </TextField>

            {/* Password */}
            <TextField name="password" type="password" isRequired>
              <Label className="mb-2 block text-sm font-medium text-slate-700">
                পাসওয়ার্ড
              </Label>

              <Input
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-green-500"
              />

              <FieldError className="mt-1 text-xs text-red-500" />
            </TextField>

            {/* Confirm Password */}
            <TextField name="confirmPassword" type="password" isRequired>
              <Label className="mb-2 block text-sm font-medium text-slate-700">
                পাসওয়ার্ড নিশ্চিত করুন
              </Label>

              <Input
                placeholder="পাসওয়ার্ড আবার লিখুন"
                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-green-500"
              />

              <FieldError className="mt-1 text-xs text-red-500" />
            </TextField>

            {/* Error */}
            {errorMessage && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {errorMessage}
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              isDisabled={loading}
              className="h-11 w-full rounded-lg bg-green-600 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="text-xs text-slate-400">অথবা</span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              className="h-11 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <span className="text-base font-bold">G</span>
              Google
            </Button>

            <Button
              type="button"
              className="h-11 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <span className="text-base font-bold">⌘</span>
              GitHub
            </Button>
          </div>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-slate-500">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="font-semibold text-green-600 hover:text-green-700 hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        {/* Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-slate-500 transition hover:text-green-600"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}
