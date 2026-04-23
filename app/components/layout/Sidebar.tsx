"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  Wallet, 
  HandCoins, 
  HelpCircle, 
  LogOut,
  ChevronRight
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Transactions", href: "/transactions", icon: ArrowLeftRight },
  { name: "Budgets", href: "/budgets", icon: Wallet },
  { name: "Debt Manager", href: "/debt", icon: HandCoins },
];

const bottomItems = [
  { name: "Help Center", href: "/help", icon: HelpCircle },
  { name: "Sign Out", href: "/login", icon: LogOut },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-sidebar-bg px-4 py-6">
      <div className="mb-10 px-2">
        <h1 className="text-xl font-bold tracking-tight text-brand-primary">Global Finance</h1>
        <p className="text-xs font-medium text-sidebar-fg">INSTITUTIONAL GRADE</p>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between rounded-lg px-3 py-2.5 transition-all duration-200",
                isActive 
                  ? "bg-sidebar-active-bg shadow-sm text-sidebar-active-fg ring-1 ring-black/5" 
                  : "text-sidebar-fg hover:bg-black/5 hover:text-sidebar-active-fg"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-sm font-semibold">{item.name}</span>
              </div>
              {isActive && <ChevronRight size={14} className="text-sidebar-fg/50" />}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-2 border-t pt-6">
        {bottomItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-fg transition-all hover:bg-black/5 hover:text-sidebar-active-fg"
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
        
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
          <div className="h-10 w-10 rounded-full bg-slate-200 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=James')] bg-cover"></div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-brand-primary">James Sterling</span>
            <span className="text-[10px] text-sidebar-fg font-medium">Wealth Management</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
