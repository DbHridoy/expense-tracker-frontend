"use client";

import { Header } from "@/app/components/layout/Header";
import { 
  Plus, 
  ChevronDown,
  Calendar
} from "lucide-react";
import { useState } from "react";
import { AddDebtModal } from "@/app/components/ui/AddDebtModal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const activeDebts = [
  { 
    id: 1,
    person: "John Smith", 
    type: "Lent", 
    amount: 1500, 
    due: "Aug 15, 2024", 
    status: "Active", 
    initials: "JS",
  },
  { 
    id: 2,
    person: "Wells Fargo", 
    type: "Borrowed", 
    amount: 12500, 
    due: "Jul 28, 2024", 
    status: "Overdue", 
    initials: "WF",
  },
  { 
    id: 3,
    person: "Mark King", 
    type: "Lent", 
    amount: 45, 
    due: "Jul 30, 2024", 
    status: "Pending", 
    initials: "MK",
  },
  { 
    id: 4,
    person: "Alice Peters", 
    type: "Borrowed", 
    amount: 1750, 
    due: "Sep 05, 2024", 
    status: "On Track", 
    initials: "AP",
  },
];

export default function DebtPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-1 flex-col">
      <Header title="Debt & Credit" />
      
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
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-btn-primary-bg px-4 py-2 text-sm font-bold text-btn-primary-fg shadow-sm transition-all hover:bg-btn-primary-hover active:scale-95"
          >
            <Plus size={18} />
            Add Record
          </button>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-ui-border bg-ui-surface p-6 shadow-sm overflow-hidden relative">
            <span className="text-[10px] font-bold uppercase tracking-wider text-ui-muted">Total Borrowed</span>
            <div className="mt-2 flex items-baseline gap-2 relative z-10">
              <h3 className="text-3xl font-bold text-danger">$14,250.00</h3>
              <span className="text-xs font-bold text-danger">+2.4% from last month</span>
            </div>
            <div className="absolute right-[-10%] top-[-20%] w-40 h-40 bg-danger/5 rounded-full blur-2xl"></div>
          </div>
          
          <div className="rounded-xl border border-ui-border bg-ui-surface p-6 shadow-sm overflow-hidden relative">
            <span className="text-[10px] font-bold uppercase tracking-wider text-ui-muted">Total Lent</span>
            <div className="mt-2 relative z-10">
              <h3 className="text-3xl font-bold text-success">$8,400.00</h3>
              <span className="text-xs font-medium text-ui-muted">4 active collections</span>
            </div>
            <div className="absolute right-[-10%] top-[-20%] w-40 h-40 bg-success/5 rounded-full blur-2xl"></div>
          </div>

          <div className="rounded-xl bg-[var(--color-card-accent-bg)] p-6 shadow-sm text-[var(--color-card-accent-fg)] relative transition-all duration-300">
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Net Position</span>
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
              <div className="flex rounded-lg border border-ui-border bg-ui-surface p-1">
                <button className="rounded-md bg-ui-surface-muted px-3 py-1 text-xs font-bold text-brand-primary">All</button>
                <button className="px-3 py-1 text-xs font-medium text-ui-muted hover:text-brand-primary transition-colors">Borrowed</button>
                <button className="px-3 py-1 text-xs font-medium text-ui-muted hover:text-brand-primary transition-colors">Lent</button>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-xl border border-ui-border bg-ui-surface shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-ui-border bg-main-bg/50 text-[11px] font-bold uppercase tracking-wider text-ui-muted">
                    <th className="px-6 py-4">Entity / Person</th>
                    <th className="px-6 py-4 text-center">Type</th>
                    <th className="px-6 py-4 text-right">Amount</th>
                    <th className="px-6 py-4 text-center">Due Date</th>
                    <th className="px-6 py-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ui-border text-sm">
                  {activeDebts.map((debt) => (
                    <tr key={debt.id} className="group hover:bg-ui-surface-muted/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ui-surface-muted text-[10px] font-bold text-brand-primary border border-ui-border">
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
                      <td className="px-6 py-4 text-right">
                        <span className="font-bold text-brand-primary">${debt.amount.toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-ui-muted">
                        {debt.due}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={cn(
                          "rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider",
                          debt.status === "Active" ? "bg-success/10 text-success" :
                          debt.status === "Overdue" ? "bg-danger/10 text-danger" :
                          "bg-ui-surface-muted text-ui-muted"
                        )}>
                          {debt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      <AddDebtModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}
