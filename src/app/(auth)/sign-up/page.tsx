"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEmailSignUp = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await authClient.signUp.email({
      name: form.name,
      email: form.email,
      password: form.password,
      callbackURL: "/sign-in",
    });
    if (error) {
      setError(error.message || "একাউন্ট তৈরি করা যায়নি");
      setLoading(false);
    } else {
        redirect("/");
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    setGoogleLoading(true);
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    if (error) {
        console.log(error);
      setError(error.message || "গুগল ব্যবহার করে একাউন্ট তৈরি সম্পন্ন হয়নি");
      setGoogleLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            একাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            একাউন্ট তৈরি করে এগিয়ে যান
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {error && (
            <div
              role="alert"
              className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}
          <button
            type="button"
            onClick={handleGoogleSignUp}
            disabled={googleLoading || loading}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-red-700/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {googleLoading ? (
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-red-700" />
            ) : (
              <GoogleIcon />
            )}
            {googleLoading ? "একাউন্ট তৈরি হচ্ছে" : "গুগল ব্যবহার করুন"}
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
              অথবা
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <form onSubmit={handleEmailSignUp} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                সম্পূর্ণ নাম
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Abdul Karim"
                value={form.name}
                onChange={handleChange}
                required
                disabled={loading || googleLoading}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-red-700 focus:ring-4 focus:ring-red-700/10 disabled:cursor-not-allowed disabled:bg-gray-50"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                ইমেইল অ্যাড্রেস
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                disabled={loading || googleLoading}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-red-700 focus:ring-4 focus:ring-red-700/10 disabled:cursor-not-allowed disabled:bg-gray-50"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                পাসওয়ার্ড
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
                minLength={8}
                disabled={loading || googleLoading}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-red-700 focus:ring-4 focus:ring-red-700/10 disabled:cursor-not-allowed disabled:bg-gray-50"
              />
              <p className="mt-2 text-xs text-gray-400">
                পাসওয়ার্ড ন্যূনতম ৮ টি বর্ণ বিশিষ্ট হতে হবে
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || googleLoading}
              className="flex w-full items-center justify-center rounded-lg bg-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-700/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  একাউন্ট তৈরি হচ্ছে
                </span>
              ) : (
                "একাউন্ট তৈরি করুন"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            একাউন্ট আছে?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-red-700 transition hover:text-red-800"
            >
              সাইন ইন
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
const GoogleIcon = () => {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M21.35 12.23c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z"
      />
      <path
        fill="#34A853"
        d="M12 21.75c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.75Z"
      />
      <path
        fill="#FBBC05"
        d="M6.54 13.85a5.85 5.85 0 0 1 0-3.7V7.62H3.3a9.75 9.75 0 0 0 0 8.76l3.24-2.53Z"
      />
      <path
        fill="#EA4335"
        d="M12 6.12c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.23 14.63 2.25 12 2.25a9.74 9.74 0 0 0-8.7 5.37l3.24 2.53C6.85 7.84 9 6.12 12 6.12Z"
      />
    </svg>
  );
};
export default SignUpPage;
