"use client";

import { Header } from "@/app/components/layout/Header";
import { 
  Plus, 
  HelpCircle, 
  Home, 
  ShoppingCart, 
  Car, 
  Stethoscope,
  ChevronDown,
  Calendar
} from "lucide-react";
import { useState } from "react";
import { AddBudgetModal } from "@/app/components/ui/AddBudgetModal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const expenseCategories = [
  { 
    name: "Housing", 
    subtext: "Mortgage, Insurance, Tax", 
    spent: 3200, 
    limit: 3500, 
    icon: Home, 
    status: "ON TRACK", 
    statusColor: "text-success" 
  },
  { 
    name: "Groceries", 
    subtext: "Whole Foods, Markets", 
    spent: 1150, 
    limit: 1200, 
    icon: ShoppingCart, 
    status: "NEAR LIMIT", 
    statusColor: "text-amber-500" 
  },
  { 
    name: "Transportation", 
    subtext: "Fuel, Maintenance, Uber", 
    spent: 940, 
    limit: 800, 
    icon: Car, 
    status: "OVER BUDGET", 
    statusColor: "text-danger" 
  },
  { 
    name: "Healthcare", 
    subtext: "Insurance, Pharmacy", 
    spent: 200, 
    limit: 1500, 
    icon: Stethoscope, 
    status: "SAFE", 
    statusColor: "text-success" 
  },
];

export default function BudgetsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-1 flex-col">
      <Header title="Budget Planning" />
      
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
            Create Budget
          </button>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-ui-border bg-ui-surface p-6 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-ui-muted">Total Budgeted</span>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-3xl font-bold text-brand-primary">$12,450.00</h3>
              <span className="text-xs font-bold text-success">+4.2% from last month</span>
            </div>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-4 w-6 rounded-sm bg-ui-surface-muted"></div>)}
            </div>
          </div>
          
          <div className="rounded-xl border border-ui-border bg-ui-surface p-6 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-ui-muted">Total Spent</span>
            <div className="mt-2">
              <h3 className="text-3xl font-bold text-brand-primary">$8,124.60</h3>
            </div>
            <div className="mt-4 h-2 w-full rounded-full bg-ui-surface-muted overflow-hidden">
               <div className="h-full bg-brand-primary w-[65%]"></div>
            </div>
          </div>

          <div className="rounded-xl border border-ui-border bg-ui-surface p-6 shadow-sm">
            <div className="flex justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-ui-muted">Remaining Budget</span>
              <HelpCircle size={14} className="text-ui-muted opacity-50" />
            </div>
            <div className="mt-2">
              <h3 className="text-3xl font-bold text-success">$4,325.40</h3>
              <span className="text-xs font-medium text-ui-muted">14 days left in period</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-brand-primary">Expense Categories</h4>
            <button className="text-xs font-bold text-ui-muted hover:text-brand-primary transition-colors">View All Transactions</button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {expenseCategories.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-ui-border bg-ui-surface p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-main-bg">
                      <cat.icon size={24} className="text-brand-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-primary">{cat.name}</h5>
                      <p className="text-xs text-ui-muted">{cat.subtext}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className={cn("text-sm font-bold", cat.spent > cat.limit ? "text-danger" : "text-brand-primary")}>
                        ${cat.spent.toLocaleString()} / ${cat.limit.toLocaleString()}
                      </span>
                      <span className={cn("text-[10px] font-bold uppercase tracking-wider", cat.statusColor)}>
                        {cat.status}
                      </span>
                    </div>
                    <button className="mt-1 text-[10px] font-bold uppercase tracking-wider text-ui-muted hover:text-brand-primary transition-colors">Adjust</button>
                  </div>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-ui-surface-muted overflow-hidden">
                  <div 
                    className={cn(
                      "h-full transition-all duration-500",
                      cat.spent > cat.limit ? "bg-danger" : cat.spent > cat.limit * 0.9 ? "bg-amber-500" : "bg-success"
                    )}
                    style={{ width: `${Math.min((cat.spent / cat.limit) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      <AddBudgetModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}
