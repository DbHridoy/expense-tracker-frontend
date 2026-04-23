"use client";

import { Search, Bell, Settings } from "lucide-react";

export function Header({ title }: { title: string }) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <div className="flex items-center gap-8">
        <h2 className="text-xl font-bold text-brand-primary">{title}</h2>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search accounts, analytics..."
            className="h-10 w-80 rounded-lg bg-slate-100 pl-10 pr-4 text-sm outline-none ring-accent transition-all focus:ring-2"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-danger ring-2 ring-white"></span>
        </button>
        <button className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100">
          <Settings size={20} />
        </button>
        <div className="ml-2 h-9 w-9 rounded-full bg-slate-200 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=James')] bg-cover ring-1 ring-slate-200"></div>
      </div>
    </header>
  );
}
