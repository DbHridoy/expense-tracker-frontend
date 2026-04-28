"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface StatCardProps {
  title: string;
  amount: string;
  trend: string;
  trendType: "up" | "down";
  variant?: "light" | "dark";
  footer?: string;
}

export function StatCard({ 
  title, 
  amount, 
  trend, 
  trendType, 
  variant = "light",
  footer 
}: StatCardProps) {
  const isDark = variant === "dark";

  return (
    <div className={cn(
      "relative flex flex-col justify-between rounded-xl p-6 shadow-sm ring-1 ring-ui-border transition-all duration-300",
      isDark 
        ? "bg-[var(--color-card-accent-bg)] text-[var(--color-card-accent-fg)]" 
        : "bg-ui-surface text-brand-primary"
    )}>
      <div className="flex flex-col gap-1">
        <span className={cn(
          "text-xs font-bold uppercase tracking-wider",
          isDark ? "text-slate-300" : "text-ui-muted"
        )}>{title}</span>
        <h3 className="text-3xl font-bold">{amount}</h3>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className={cn(
          "flex items-center gap-1 text-xs font-bold",
          trendType === "up" ? "text-success" : "text-danger"
        )}>
          {trendType === "up" ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {trend}
        </div>
        <span className={cn(
          "text-xs font-medium",
          isDark ? "text-slate-300" : "text-ui-muted"
        )}>from last month</span>
      </div>

      {footer && (
        <div className="mt-4 border-t border-white/10 pt-4 text-[10px] font-medium text-success">
          {footer}
        </div>
      )}

      {!isDark && (
        <div className="absolute right-6 top-6 opacity-5">
           <TrendingUp size={64} />
        </div>
      )}
    </div>
  );
}
