"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function AuthToast() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("auth") === "success") {
      toast.success("সফলভাবে সাইন ইন হয়েছে!");

      // Remove the query parameter so the toast
      // does not appear again on refresh.
      router.replace("/", { scroll: false });
    }
  }, [searchParams, router]);

  return null;
}
