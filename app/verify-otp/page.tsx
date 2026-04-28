"use client";

import Link from "next/link";
import { Shield, ArrowRight, ChevronLeft } from "lucide-react";
import { ThemeToggle } from "@/app/components/theme/ThemeToggle";

export default function VerifyOtpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-main-bg px-4 transition-colors duration-300">
      <ThemeToggle className="fixed right-6 top-6 z-50" />
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-ui-surface p-10 shadow-xl ring-1 ring-ui-border">
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary shadow-lg shadow-brand-primary/20">
              <Shield size={24} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-primary">Verify OTP</h2>
          <p className="text-ui-muted">Enter the 6-digit code sent to your email.</p>
        </div>

        <form className="space-y-8">
          <div className="flex justify-between gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="h-14 w-12 rounded-xl bg-main-bg border-none ring-1 ring-ui-border text-center text-xl font-bold text-brand-primary focus:ring-2 focus:ring-brand-primary outline-none transition-all"
              />
            ))}
          </div>

          <Link 
            href="/set-password"
            className="flex w-full h-14 items-center justify-center gap-2 rounded-xl bg-brand-primary text-white font-bold transition-all hover:bg-brand-secondary active:scale-95 group"
          >
            Verify Code
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </form>

        <div className="text-center space-y-4">
          <p className="text-sm text-ui-muted">
            Didn&apos;t receive the code? <button className="font-bold text-brand-primary hover:underline">Resend OTP</button>
          </p>
          <Link href="/forgot-password" className="inline-flex items-center gap-2 text-sm font-bold text-ui-muted hover:text-brand-primary transition-colors">
            <ChevronLeft size={16} />
            Back to Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
}
