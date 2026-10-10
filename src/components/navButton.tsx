"use client";

import { useEffect, useRef, useState } from "react";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";
import { FiChevronDown, FiUser, FiLogOut } from "react-icons/fi";

const ButtonHandler = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignout = async () => {
    try {
      await signOut();
      setIsOpen(false);
      toast.success("সফলভাবে সাইন আউট হয়েছে!");
    } catch (error) {
      console.error("Signout error:", error);
      toast.error("সাইন আউট করতে সমস্যা হয়েছে");
    }
  };

  return (
    <div className="flex items-center gap-3 text-sm">
      {user ? (
        <div className="relative" ref={dropdownRef}>
          {/* Profile button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Open profile menu"
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-base-200"
          >
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img
                  src={user.image || "/default-avatar.png"}
                  alt={user.name ?? "User profile"}
                />
              </div>
            </div>

            <span className="max-w-24 truncate font-medium">
              {user.name || "User"}
            </span>

            <FiChevronDown
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown card */}
          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-xl">
              {/* User information */}
              <div className="border-b border-base-300 pb-3">
                <p className="truncate font-semibold text-base-content">
                  {user.name || "User"}
                </p>

                <p className="mt-1 break-all text-xs text-base-content/60">
                  {user.email}
                </p>
              </div>

              {/* Profile link */}
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-base-200"
              >
                <FiUser className="text-base-content/70" />
                আমার প্রোফাইল
              </Link>

              {/* Sign out */}
              <button
                type="button"
                onClick={handleSignout}
                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-error hover:bg-error/10"
              >
                <FiLogOut />
                সাইন আউট
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/signin"
            className="btn btn-ghost text-neutral-700 transition-colors hover:text-green-700"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="btn rounded-xl bg-green-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-green-800"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default ButtonHandler;
