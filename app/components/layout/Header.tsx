"use client";

import Link from "next/link";
import { Bell } from "lucide-react";
import { ThemeToggle } from "@/app/components/theme/ThemeToggle";

export function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-ui-border bg-ui-surface/80 backdrop-blur-md px-8 transition-all">
      <div className="flex items-center gap-8">
        <h2 className="text-xl font-bold text-brand-primary">{title}</h2>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link href="/notifications" className="relative rounded-xl p-2 text-ui-muted transition-colors hover:bg-ui-surface-muted hover:text-brand-primary">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-danger ring-2 ring-ui-surface"></span>
        </Link>
        <Link href="/profile" className="ml-2 h-9 w-9 rounded-full bg-ui-surface-muted bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=James')] bg-cover ring-1 ring-ui-border">
        </Link>
      </div>
    </header>
  );
}
