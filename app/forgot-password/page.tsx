"use client";

import Link from "next/link";
import { Mail, Shield, ArrowLeft, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/app/components/theme/ThemeToggle";

export default function ForgotPasswordPage() {
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
          <h2 className="text-3xl font-bold tracking-tight text-brand-primary">Recover Access</h2>
          <p className="text-ui-muted">Enter your email to receive recovery instructions.</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-ui-muted block ml-1">Business Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ui-muted" size={18} />
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full h-14 rounded-xl bg-ui-surface-muted ring-1 ring-ui-border text-main-fg px-12 text-sm focus:ring-2 focus:ring-brand-primary outline-none transition-all"
              />
            </div>
          </div>

          <Link 
            href="/verify-otp"
            className="flex w-full h-14 items-center justify-center gap-2 rounded-xl bg-btn-primary-bg text-btn-primary-fg font-bold shadow-lg shadow-brand-primary/10 transition-all hover:bg-btn-primary-hover active:scale-95 group"
          >
            Send Recovery Email
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </form>

        <div className="pt-4">
          <Link href="/login" className="flex items-center justify-center gap-2 text-sm font-bold text-ui-muted hover:text-brand-primary transition-colors">
            <ArrowLeft size={16} />
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
