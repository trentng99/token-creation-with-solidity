"use client";

import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-lg ">
        {!user && (
          <>
            <div>
              <Link href="/register">Register</Link>
            </div>
            <div>
              <Link href="/login">Login</Link>
            </div>
          </>
        )}
        <div onClick={logout}>Logout</div>
        <div className="mt-24">hello {user?.email}</div>
        <div className="mt-12">Form should appear here</div>
      </div>
    </main>
  );
}
