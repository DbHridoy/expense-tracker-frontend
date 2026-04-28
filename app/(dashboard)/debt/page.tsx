"use client";

import { Header } from "@/app/components/layout/Header";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Bell,
  ArrowRight,
  Calendar,
  ChevronDown,
  Plus
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { AddDebtModal } from "@/app/components/ui/AddDebtModal";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const activeDebts = [
  { 
    id: 1, 
    person: "Sarah Miller", 
    type: "Lent", 
    amount: "$1,200.00", 
    dueDate: "Oct 12, 2023", 
    status: "PARTIALLY PAID", 
    statusColor: "text-success bg-success/10",
    initials: "SM"
  },
  { 
    id: 2, 
    person: "First Bank Corp", 
    type: "Borrowed", 
    amount: "$12,500.00", 
    dueDate: "Nov 01, 2023", 
    status: "PENDING", 
    statusColor: "text-danger bg-danger/5",
    initials: "FB"
  },
  { 
    id: 3, 
    person: "James Knight", 
    type: "Lent", 
    amount: "$450.00", 
    dueDate: "Sept 28, 2023", 
    status: "SETTLED", 
    statusColor: "text-ui-muted bg-slate-100",
    initials: "JK"
  },
  { 
    id: 4, 
    person: "Auto Lease Inc", 
    type: "Borrowed", 
    amount: "$1,750.00", 
    dueDate: "Oct 25, 2023", 
    status: "PARTIALLY PAID", 
    statusColor: "text-success bg-success/10",
    initials: "AL"
  },
];

export default function DebtManagerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-1 flex-col">
      <Header title="Debt Manager" />
      
      <div className="flex-1 space-y-8 p-8">
        {/* Subheader */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-ui-border bg-ui-surface shadow-sm cursor-pointer hover:bg-ui-surface-muted transition-colors group">
              <Calendar size={14} className="text-ui-muted group-hover:text-brand-primary transition-colors" />
              <select className="bg-transparent text-xs font-bold text-brand-primary outline-none cursor-pointer appearance-none pr-6 relative">
                <option>Select Day</option>
                {[...Array(31)].map((_, i) => <option key={i+1}>{i+1}</option>)}
              </select>
              <ChevronDown size={12} className="text-ui-muted -ml-5 pointer-events-none" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-ui-border bg-ui-surface shadow-sm cursor-pointer hover:bg-ui-surface-muted transition-colors group">
              <select className="bg-transparent text-xs font-bold text-brand-primary outline-none cursor-pointer appearance-none pr-6">
                <option>June</option>
                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => <option key={m}>{m}</option>)}
              </select>
              <ChevronDown size={12} className="text-ui-muted -ml-5 pointer-events-none" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-ui-border bg-ui-surface shadow-sm cursor-pointer hover:bg-ui-surface-muted transition-colors group">
              <select className="bg-transparent text-xs font-bold text-brand-primary outline-none cursor-pointer appearance-none pr-6">
                <option>2024</option>
                {[2024, 2023, 2022].map(y => <option key={y}>{y}</option>)}
              </select>
              <ChevronDown size={12} className="text-ui-muted -ml-5 pointer-events-none" />
            </div>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-secondary active:scale-95 dark:text-main-bg"
          >
            <Plus size={18} />
            Add Record
          </button>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-ui-surface p-6 shadow-sm overflow-hidden relative">
            <span className="text-[10px] font-bold uppercase tracking-wider text-ui-muted">Total Borrowed</span>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-3xl font-bold text-danger">$14,250.00</h3>
              <span className="text-xs font-bold text-danger">+2.4% from last month</span>
            </div>
            <div className="absolute right-[-10%] top-[-20%] w-40 h-40 bg-danger/5 rounded-full blur-2xl"></div>
          </div>
          
          <div className="rounded-xl border bg-ui-surface p-6 shadow-sm overflow-hidden relative">
            <span className="text-[10px] font-bold uppercase tracking-wider text-ui-muted">Total Lent</span>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-3xl font-bold text-success">$8,400.00</h3>
              <span className="text-xs font-medium text-ui-muted">4 active collections</span>
            </div>
            <div className="absolute right-[-10%] top-[-20%] w-40 h-40 bg-success/5 rounded-full blur-2xl"></div>
          </div>

          <div className="rounded-xl bg-[var(--color-card-accent-bg)] p-6 shadow-sm text-[var(--color-card-accent-fg)] relative transition-all duration-300">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Net Position</span>
            <div className="mt-2">
              <h3 className="text-3xl font-bold">-$5,850.00</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
          {/* Active Debts & Credits */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-brand-primary">Active Debts & Credits</h4>
              <div className="flex rounded-lg border bg-ui-surface p-1">
                <button className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-brand-primary">All</button>
                <button className="px-3 py-1 text-xs font-medium text-ui-muted hover:text-brand-primary">Borrowed</button>
                <button className="px-3 py-1 text-xs font-medium text-ui-muted hover:text-brand-primary">Lent</button>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-xl border bg-ui-surface shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b bg-main-bg/50 text-[11px] font-bold uppercase tracking-wider text-ui-muted">
                    <th className="px-6 py-4">Entity / Person</th>
                    <th className="px-6 py-4 text-center">Type</th>
                    <th className="px-6 py-4 text-right">Amount</th>
                    <th className="px-6 py-4 text-center">Due Date</th>
                    <th className="px-6 py-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {activeDebts.map((debt) => (
                    <tr key={debt.id} className="group hover:bg-main-bg/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-brand-primary">
                            {debt.initials}
                          </div>
                          <span className="font-bold text-brand-primary">{debt.person}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={cn(
                          "font-bold",
                          debt.type === "Lent" ? "text-success" : "text-danger"
                        )}>
                          {debt.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-brand-primary">
                        {debt.amount}
                      </td>
                      <td className="px-6 py-4 text-center text-ui-muted font-medium">
                        {debt.dueDate}
                      </td>
                      <td className="px-6 py-4">
                        <div className={cn(
                          "mx-auto w-fit rounded-lg px-2.5 py-1 text-[10px] font-bold tracking-tight",
                          debt.statusColor
                        )}>
                          {debt.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="w-full border-t py-4 text-xs font-bold text-brand-secondary hover:bg-main-bg transition-colors">
                View All Transaction History
              </button>
            </div>
          </div>
        </div>

        <AddDebtModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}
