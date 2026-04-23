"use client";

import Link from "next/link";
import { Mail, Lock, User, Terminal, Globe, Shield, BarChart3, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Visual (Same as Login) */}
      <div className="relative hidden w-1/2 flex-col justify-between bg-brand-primary p-16 text-white lg:flex">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1551288049-bbbda5366a7a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-primary via-brand-primary/90 to-accent/20"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
              <Shield size={18} className="text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">CapitalTrack</h1>
          </div>
          <p className="mt-4 max-w-sm text-lg font-medium text-slate-300">
            Join the elite community of institutional-grade financial management.
          </p>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex gap-4 rounded-2xl bg-white/5 p-6 backdrop-blur-md ring-1 ring-white/10 max-w-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <Shield size={20} className="text-success" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Advanced Security</h5>
              <p className="text-xs text-slate-400 mt-1">Multi-layer encryption and biometric auth support.</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <span>CapitalTrack v2.4.0</span>
          <span>&copy; 2024 Sovereign Finance</span>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full flex-col items-center justify-center bg-white px-8 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-brand-primary">Create Account</h2>
            <p className="text-slate-500">Start your journey with CapitalTrack today.</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="James Sterling" 
                  className="w-full h-14 rounded-xl bg-slate-50 border-none ring-1 ring-slate-200 pl-12 pr-4 text-sm focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block ml-1">Business Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full h-14 rounded-xl bg-slate-50 border-none ring-1 ring-slate-200 pl-12 pr-4 text-sm focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  placeholder="Create a strong password" 
                  className="w-full h-14 rounded-xl bg-slate-50 border-none ring-1 ring-slate-200 pl-12 pr-4 text-sm focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 ml-1">
              <input type="checkbox" id="terms" className="h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary" />
              <label htmlFor="terms" className="text-xs font-medium text-slate-500">I agree to the Terms of Service and Privacy Policy</label>
            </div>

            <Link 
              href="/dashboard"
              className="flex w-full h-14 items-center justify-center gap-2 rounded-xl bg-brand-primary text-white font-bold transition-all hover:bg-brand-secondary active:scale-95 group"
            >
              Initialize Portfolio
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </form>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <span className="bg-white px-4">Or Join With</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex h-12 items-center justify-center gap-3 rounded-xl border bg-white px-4 text-sm font-bold text-brand-primary transition-all hover:bg-slate-50">
              <Globe size={18} />
              Google
            </button>
            <button className="flex h-12 items-center justify-center gap-3 rounded-xl border bg-white px-4 text-sm font-bold text-brand-primary transition-all hover:bg-slate-50">
              <Terminal size={18} />
              GitHub
            </button>
          </div>

          <p className="text-center text-sm font-medium text-slate-500 mt-8">
            Already have an account? <Link href="/login" className="font-bold text-brand-primary hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
