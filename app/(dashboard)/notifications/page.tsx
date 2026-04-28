"use client";

import { Header } from "@/app/components/layout/Header";
import { 
  Bell, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  ArrowRight,
  Search,
  MoreVertical,
  Check
} from "lucide-react";
import { useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const notifications = [
  {
    id: 1,
    title: "Unusual activity detected",
    message: "A large transaction of $15,000.00 was recorded in your Operational account. Please verify if this was authorized.",
    time: "10 minutes ago",
    type: "warning",
    isRead: false,
    icon: AlertTriangle,
    color: "text-danger bg-danger/10"
  },
  {
    id: 2,
    title: "Budget limit reached",
    message: "Your 'Dining Out' budget has reached 95% of its monthly limit. Consider adjusting your spending.",
    time: "2 hours ago",
    type: "system",
    isRead: false,
    icon: Info,
    color: "text-accent bg-accent/10"
  },
  {
    id: 3,
    title: "Successful debt settlement",
    message: "The loan to Sarah Miller has been marked as fully settled. Your net position has improved by $1,200.00.",
    time: "Yesterday at 4:30 PM",
    type: "success",
    isRead: true,
    icon: CheckCircle2,
    color: "text-success bg-success/10"
  },
  {
    id: 4,
    title: "System Update Complete",
    message: "CapitalTrack has been updated to version 2.4.0. New analytics features are now available in your dashboard.",
    time: "2 days ago",
    type: "system",
    isRead: true,
    icon: Info,
    color: "text-ui-muted bg-ui-surface-muted"
  },
  {
    id: 5,
    title: "New bank connection authorized",
    message: "Bank of America account ending in ...4421 has been successfully connected to your portfolio.",
    time: "3 days ago",
    type: "success",
    isRead: true,
    icon: CheckCircle2,
    color: "text-success bg-success/10"
  }
];

export default function NotificationsPage() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="flex flex-1 flex-col">
      <Header title="Notifications" />
      
      <div className="flex-1 space-y-6 p-8">
        {/* Simplified Header */}
        <div className="flex items-center justify-between border-b border-ui-border pb-4">
          <div className="flex items-center gap-4">
            <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest">All Notifications</h3>
            <button className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ui-muted hover:text-brand-primary hover:bg-ui-surface-muted transition-all">
              <Check size={14} />
              Mark all as read
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ui-muted" />
            <input
              type="text"
              placeholder="Search..."
              className="h-10 w-48 rounded-lg bg-ui-surface-muted pl-10 pr-4 text-sm text-main-fg outline-none ring-accent transition-all focus:ring-2"
            />
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4 max-w-4xl">
          {notifications.map((n) => (
            <div 
              key={n.id} 
              className={cn(
                "group relative flex items-start gap-4 rounded-2xl border p-6 transition-all hover:shadow-md",
                n.isRead ? "bg-ui-surface border-ui-border" : "bg-ui-surface border-accent/20 ring-1 ring-accent/5"
              )}
            >
              {!n.isRead && (
                <div className="absolute left-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-accent"></div>
              )}
              
              <div className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                n.color
              )}>
                <n.icon size={24} />
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className={cn("font-bold", n.isRead ? "text-brand-primary" : "text-brand-primary text-lg")}>
                    {n.title}
                  </h4>
                  <span className="text-xs font-medium text-ui-muted">{n.time}</span>
                </div>
                <p className="text-sm text-ui-muted leading-relaxed max-w-2xl">
                  {n.message}
                </p>
              </div>

              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-ui-muted hover:text-brand-primary">
                <MoreVertical size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center pt-8">
          <button className="flex items-center gap-2 rounded-xl border bg-ui-surface px-8 py-3 text-sm font-bold text-brand-primary transition-all hover:bg-ui-surface-muted">
            Load Older Notifications
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
