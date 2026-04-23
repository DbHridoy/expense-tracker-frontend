"use client";

import { Header } from "@/app/components/layout/Header";
import { 
  Plus, 
  Download, 
  Search, 
  Filter,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  CheckCircle2,
  Clock
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const transactions = [
  { 
    id: 1, 
    date: "Oct 24, 2023", 
    description: "Office Lease - NY Office", 
    subtext: "Q4 Commercial Rental",
    category: "Operational", 
    amount: "-$8,200.00", 
    status: "Pending",
    icon: Clock,
    statusColor: "text-amber-500 bg-amber-50"
  },
  { 
    id: 2, 
    date: "Oct 22, 2023", 
    description: "Digital Marketing Campaign", 
    subtext: "Search Engine Optimization",
    category: "Marketing", 
    amount: "-$2,500.00", 
    status: "Cleared",
    icon: CheckCircle2,
    statusColor: "text-success bg-success/10"
  },
  { 
    id: 3, 
    date: "Oct 20, 2023", 
    description: "Client Reimbursement", 
    subtext: "Project Alpha Expenses",
    category: "Services", 
    amount: "+$1,450.00", 
    status: "Cleared",
    icon: CheckCircle2,
    statusColor: "text-success bg-success/10"
  },
  { 
    id: 4, 
    date: "Oct 19, 2023", 
    description: "AWS Cloud Services", 
    subtext: "Monthly Infrastructure",
    category: "Infrastructure", 
    amount: "-$420.00", 
    status: "Cleared",
    icon: CheckCircle2,
    statusColor: "text-success bg-success/10"
  },
  { 
    id: 5, 
    date: "Oct 18, 2023", 
    description: "Team Luncheon", 
    subtext: "Monthly Social Event",
    category: "Internal", 
    amount: "-$150.00", 
    status: "Cleared",
    icon: CheckCircle2,
    statusColor: "text-success bg-success/10"
  },
];

export default function TransactionsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header title="Transactions Management" />
      
      <div className="flex-1 space-y-8 p-8">
        {/* Page Actions */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-brand-primary">Review and manage institutional cash flows</h3>
            <p className="text-sm text-slate-500">Showing 1-10 of 258 transactions</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-bold text-brand-primary transition-colors hover:bg-slate-50">
              <Download size={18} />
              Export CSV
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-secondary active:scale-95">
              <Plus size={18} />
              Add New Transaction
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Date Range</span>
              <button className="flex items-center gap-2 text-sm font-bold text-brand-primary">
                Last 30 Days
                <ChevronRight size={14} className="rotate-90" />
              </button>
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Category</span>
              <button className="flex items-center gap-2 text-sm font-bold text-brand-primary">
                All Categories
                <ChevronRight size={14} className="rotate-90" />
              </button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="h-10 w-64 rounded-lg bg-slate-100 pl-10 pr-4 text-sm outline-none ring-accent transition-all focus:ring-2"
            />
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4 text-center">Category</th>
                <th className="px-6 py-4 text-right">Amount</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {transactions.map((t) => (
                <tr key={t.id} className="group hover:bg-slate-50/50">
                  <td className="whitespace-nowrap px-6 py-4 font-bold text-brand-primary">{t.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-brand-primary">{t.description}</span>
                      <span className="text-xs text-slate-400">{t.subtext}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {t.category}
                    </span>
                  </td>
                  <td className={cn(
                    "whitespace-nowrap px-6 py-4 text-right font-bold",
                    t.amount.startsWith("+") ? "text-success" : "text-brand-primary"
                  )}>
                    {t.amount}
                  </td>
                  <td className="px-6 py-4">
                    <div className={cn(
                      "mx-auto flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase",
                      t.statusColor
                    )}>
                      <t.icon size={12} />
                      {t.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 transition-colors hover:text-brand-primary">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="flex items-center justify-between border-t bg-slate-50/50 px-6 py-4">
            <span className="text-xs font-medium text-slate-500">Showing 1 to 5 of 258 transactions</span>
            <div className="flex items-center gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-lg border bg-white text-slate-400 transition-colors hover:bg-slate-50 disabled:opacity-50" disabled>
                <ChevronLeft size={16} />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-lg border bg-white text-brand-primary transition-colors hover:bg-slate-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
