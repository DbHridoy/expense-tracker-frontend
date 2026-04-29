"use client";

import Link from "next/link";
import { Shield, ArrowRight, KeyRound } from "lucide-react";
import { ThemeToggle } from "@/app/components/theme/ThemeToggle";

export default function VerifyOTPPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-main-bg px-4 transition-colors duration-300">
      <ThemeToggle className="fixed right-6 top-6 z-50" />
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-ui-surface p-10 shadow-xl ring-1 ring-ui-border">
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary shadow-lg shadow-brand-primary/20">
              <Shield size={24} className="text-btn-primary-fg" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-primary">Authorization</h2>
          <p className="text-ui-muted">Enter the 6-digit protocol code sent to your email.</p>
        </div>

        <form className="space-y-8">
          <div className="flex justify-between gap-3 px-2">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <input 
                key={i}
                type="text" 
                maxLength={1}
                className="w-12 h-14 rounded-xl bg-ui-surface-muted ring-1 ring-ui-border text-center text-xl font-bold text-brand-primary outline-none focus:ring-2 focus:ring-brand-primary transition-all"
              />
            ))}
          </div>

          <div className="space-y-4">
            <Link 
              href="/set-password"
              className="flex w-full h-14 items-center justify-center gap-2 rounded-xl bg-btn-primary-bg text-btn-primary-fg font-bold shadow-lg shadow-brand-primary/10 transition-all hover:bg-btn-primary-hover active:scale-95 group"
            >
              Verify Protocol
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            
            <button type="button" className="flex w-full items-center justify-center gap-2 text-sm font-bold text-ui-muted hover:text-brand-primary transition-colors">
              <KeyRound size={16} />
              Resend code in 00:59
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
