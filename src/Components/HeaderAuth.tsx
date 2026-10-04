"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";

const HeaderAuth = () => {
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    const {error} = await authClient.signOut();

    if(error) {
        alert("লগআউট করা যায়নি"); 
        return;
    }

    redirect("/");
    window.location.reload();
  };

  return (
    <div className="absolute right-5 top-1/2 flex -translate-y-1/2 items-center gap-2">
      {isPending ? (
        <div className="h-10 w-32 animate-pulse rounded-xl bg-gray-100" />
      ) : session?.user ? (
        <>
          <span className="text-sm text-gray-700">
            স্বাগতম{" "}
            <span className="font-semibold text-red-700">
              {session.user.name}
            </span>
          </span>

          <button
            type="button"
            onClick={handleLogout}
            className="cursor-pointer rounded-xl border border-gray-400 px-4 py-2 text-sm transition hover:bg-gray-100"
          >
            লগ আউট
          </button>
        </>
      ) : (
        <>
          <Link
            href="/sign-in"
            className="rounded-xl border border-gray-400 px-4 py-2 text-sm transition hover:bg-gray-100"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="rounded-xl bg-red-700 px-4 py-2 text-sm text-white transition hover:bg-red-800"
          >
            সাইন আপ
          </Link>
        </>
      )}
    </div>
  );
};

export default HeaderAuth;
