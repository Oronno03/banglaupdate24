"use client";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-2xl text-center">
        {/* 404 */}
        <div className="relative mb-6">
          <h1 className="select-none text-[9rem] font-black leading-none tracking-tighter text-red-700/10 sm:text-[12rem]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full border border-red-700/20 bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-700">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-lg">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            এই পাতাটি খুঁজে পাওয়া যায়নি
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
            আপনি যে পাতাটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে, ঠিকানা
            পরিবর্তন করা হয়েছে অথবা পাতাটির অস্তিত্ব নেই।
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="w-full rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-700/20 sm:w-auto"
          >
            হোমপেজে ফিরে যান
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="w-full rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200 sm:w-auto"
          >
            আগের পাতায় ফিরে যান
          </button>
        </div>

        {/* Brand */}
        <div className="mt-12 border-t border-gray-100 pt-6">
          <p className="text-sm font-semibold text-red-700">Bangla Update 24</p>

          <p className="mt-1 text-xs text-gray-400">
            আপনার খবর, আমাদের দায়িত্ব।
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
