"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession, updateUser } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FiLogOut, FiUser } from "react-icons/fi";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const user = session?.user;

  const [isSaving, setIsSaving] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleUpdateProfile = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const trimmedName = String(formData.get("name") ?? "").trim();

    if (!trimmedName) {
      toast.error("আপনার নাম লিখুন");
      return;
    }

    if (trimmedName === user?.name) {
      toast.info("আপনার নামে কোনো পরিবর্তন হয়নি");
      return;
    }

    try {
      setIsSaving(true);

      const { error } = await updateUser({
        name: trimmedName,
      });

      if (error) {
        toast.error(error.message || "নাম আপডেট করা যায়নি");
        return;
      }

      toast.success("প্রোফাইলের নাম সফলভাবে আপডেট হয়েছে!");
      router.refresh();
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("প্রোফাইল আপডেট করতে সমস্যা হয়েছে");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignout = async () => {
    try {
      setIsSigningOut(true);
      await signOut();
      toast.success("সফলভাবে সাইন আউট হয়েছে!");
      router.push("/signin");
      router.refresh();
    } catch (error) {
      console.error("Signout error:", error);
      toast.error("সাইন আউট করতে সমস্যা হয়েছে");
    } finally {
      setIsSigningOut(false);
    }
  };

  if (isPending) {
    return (
      <main className="min-h-screen bg-[#F0F5F0] px-4 py-8">
        <div className="mx-auto max-w-3xl animate-pulse">
          <div className="mb-5 h-7 w-40 rounded bg-gray-200" />
          <div className="mb-4 h-20 rounded-xl bg-white" />
          <div className="h-44 rounded-xl bg-white" />
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F0F5F0] px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <FiUser className="mx-auto mb-3 text-3xl text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-800">লগইন করুন</h2>
          <p className="mt-2 text-sm text-gray-500">
            আপনার প্রোফাইল দেখতে সাইন ইন করুন।
          </p>
          <button
            onClick={() => router.push("/signin")}
            className="mt-5 rounded-lg bg-green-700 px-6 py-2 text-sm font-semibold text-white hover:bg-green-800"
          >
            সাইন ইন
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F0F5F0] px-4 py-8">
      <div className="mx-auto max-w-3xl grid items-center">
        {/* Page heading */}
        <div className="mb-5">
          <h1 className="text-xl font-bold text-[#26332B]">আমার প্রোফাইল</h1>
          <p className="mt-1 text-xs text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User information card */}
        <section className="flex items-center justify-between gap-4 rounded-xl border border-[#E0E8E0] bg-[#FAFCFA] p-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="avatar">
              <div className="h-12 w-12 rounded-xl bg-gray-100">
                <img
                  src={user.image || "/default-avatar.png"}
                  alt={user.name || "User profile"}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-sm font-semibold text-[#26332B]">
                {user.name}
              </h2>
              <p className="truncate text-xs text-gray-500">{user.email}</p>
            </div>
          </div>

          <button
            onClick={handleSignout}
            disabled={isSigningOut}
            className="flex shrink-0 items-center gap-1 rounded-md border border-red-400 px-3 py-1.5 text-xs text-red-500 transition hover:bg-red-50 disabled:opacity-50"
          >
            <FiLogOut />
            {isSigningOut ? "অপেক্ষা করুন..." : "সাইন আউট"}
          </button>
        </section>

        {/* Profile update form */}
        <section className="mt-4 rounded-xl border border-[#E0E8E0] bg-[#FAFCFA] p-5 sm:p-6">
          <h2 className="mb-6 text-md font-semibold text-[#26332B]">তথ্য</h2>

          <form onSubmit={handleUpdateProfile}>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-medium text-[#26332B]"
            >
              নাম
            </label>

            <input
              id="name"
              name="name"
              type="text"
              defaultValue={user.name ?? ""}
              placeholder="আপনার নাম লিখুন"
              maxLength={100}
              required
              className="h-10 w-full rounded-lg border border-[#E0E8E0] bg-transparent px-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />

            <button
              type="submit"
              disabled={isSaving}
              className="mt-3 w-full rounded-lg bg-[#07883E] py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#067333] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSaving ? "আপডেট হচ্ছে..." : "আপডেট"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
