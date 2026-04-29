"use client";

import { Header } from "@/app/components/layout/Header";
import { 
  Plus, 
  Download, 
  Search, 
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  CheckCircle2,
  Clock,
  Calendar,
  ChevronDown
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
    statusColor: "text-amber-500 bg-amber-500/10"
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

import { useState } from "react";
import { AddTransactionModal } from "@/app/components/ui/AddTransactionModal";

export default function TransactionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-1 flex-col">
      <Header title="Transactions Management" />
      
      <div className="flex-1 space-y-8 p-8">
        {/* Subheader */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-ui-border bg-ui-surface shadow-sm cursor-pointer hover:bg-ui-surface-muted transition-colors group">
              <Calendar size={14} className="text-ui-muted group-hover:text-brand-primary transition-colors" />
              <select className="bg-transparent text-xs font-bold text-brand-primary outline-none cursor-pointer appearance-none pr-6 relative">
                <option value="" className="bg-ui-surface text-main-fg">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1} className="bg-ui-surface text-main-fg">{i + 1}</option>
                ))}
              </select>
              <ChevronDown size={12} className="text-ui-muted -ml-5 pointer-events-none" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-ui-border bg-ui-surface shadow-sm cursor-pointer hover:bg-ui-surface-muted transition-colors group">
              <select className="bg-transparent text-xs font-bold text-brand-primary outline-none cursor-pointer appearance-none pr-6" defaultValue="June">
                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                  <option key={m} value={m} className="bg-ui-surface text-main-fg">{m}</option>
                ))}
              </select>
              <ChevronDown size={12} className="text-ui-muted -ml-5 pointer-events-none" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-ui-border bg-ui-surface shadow-sm cursor-pointer hover:bg-ui-surface-muted transition-colors group">
              <select className="bg-transparent text-xs font-bold text-brand-primary outline-none cursor-pointer appearance-none pr-6" defaultValue="2024">
                {[2024, 2023, 2022].map(y => (
                  <option key={y} value={y} className="bg-ui-surface text-main-fg">{y}</option>
                ))}
              </select>
              <ChevronDown size={12} className="text-ui-muted -ml-5 pointer-events-none" />
            </div>

            <div className="relative ml-2">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ui-muted" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="h-9 w-64 rounded-lg bg-ui-surface border border-ui-border pl-10 pr-4 text-xs text-main-fg outline-none ring-accent transition-all focus:ring-2"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 rounded-lg border border-ui-border bg-ui-surface px-4 py-2 text-sm font-bold text-brand-primary transition-colors hover:bg-ui-surface-muted">
              <Download size={18} />
              Export
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 rounded-lg bg-btn-primary-bg px-4 py-2 text-sm font-bold text-btn-primary-fg shadow-sm transition-all hover:bg-btn-primary-hover active:scale-95"
            >
              <Plus size={18} />
              Add Transaction
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-hidden rounded-xl border border-ui-border bg-ui-surface shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-ui-border bg-main-bg/50 text-[11px] font-bold uppercase tracking-wider text-ui-muted">
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4 text-center">Category</th>
                <th className="px-6 py-4 text-right">Amount</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ui-border text-sm">
              {transactions.map((t) => (
                <tr key={t.id} className="group hover:bg-ui-surface-muted/50 transition-colors">
                  <td className="whitespace-nowrap px-6 py-4 font-bold text-brand-primary">{t.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-brand-primary">{t.description}</span>
                      <span className="text-xs text-ui-muted">{t.subtext}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="rounded-full bg-ui-surface-muted px-3 py-1 text-xs font-bold text-ui-muted border border-ui-border">
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
                    <button className="text-ui-muted transition-colors hover:text-brand-primary">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-ui-border bg-main-bg/50 px-6 py-4">
            <span className="text-xs font-medium text-ui-muted">Showing 1 to 5 of 258 transactions</span>
            <div className="flex items-center gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-ui-border bg-ui-surface text-ui-muted transition-colors hover:bg-ui-surface-muted disabled:opacity-50" disabled>
                <ChevronLeft size={16} />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-ui-border bg-ui-surface text-brand-primary transition-colors hover:bg-ui-surface-muted">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddTransactionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
