"use client";

import Link from "next/link";
import { Mail, Lock, Eye, Globe, Shield, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/app/components/theme/ThemeToggle";

export default function LoginPage() {
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
          <h2 className="text-3xl font-bold tracking-tight text-brand-primary">Welcome Back</h2>
          <p className="text-ui-muted">Sign in to manage your institutional portfolio.</p>
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

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-ui-muted">Password</label>
              <Link href="/forgot-password" className="text-[10px] font-bold uppercase tracking-widest text-accent hover:underline">Forgot Password?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-ui-muted" size={18} />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full h-14 rounded-xl bg-ui-surface-muted ring-1 ring-ui-border text-main-fg px-12 text-sm focus:ring-2 focus:ring-brand-primary outline-none transition-all"
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-ui-muted hover:text-brand-primary">
                <Eye size={18} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-1">
            <input type="checkbox" id="stay" className="h-4 w-4 rounded border-ui-border text-brand-primary focus:ring-brand-primary" />
            <label htmlFor="stay" className="text-sm font-medium text-ui-muted">Stay signed in for 30 days</label>
          </div>

          <Link 
            href="/dashboard"
            className="flex w-full h-14 items-center justify-center gap-2 rounded-xl bg-btn-primary-bg text-btn-primary-fg font-bold shadow-lg shadow-brand-primary/10 transition-all hover:bg-btn-primary-hover active:scale-95 group"
          >
            Continue to Dashboard
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </form>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-ui-border"></div>
          </div>
          <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest text-ui-muted">
            <span className="bg-ui-surface px-4">Or Authorize With</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button className="flex h-12 items-center justify-center gap-3 rounded-xl border border-ui-border bg-ui-surface px-4 text-sm font-bold text-brand-primary transition-all hover:bg-ui-surface-muted">
            <Globe size={18} />
            Continue with Google
          </button>
        </div>

        <p className="text-center text-sm font-medium text-ui-muted mt-8">
          New to the platform? <Link href="/register" className="font-bold text-brand-primary hover:underline">Open an account</Link>
        </p>
      </div>
    </div>
  );
}
