"use client";

import { Header } from "@/app/components/layout/Header";
import { 
  Plus, 
  HelpCircle, 
  Home, 
  ShoppingCart, 
  Car, 
  Stethoscope,
  TrendingUp,
  Zap
} from "lucide-react";
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
  return (
    <div className="flex flex-1 flex-col">
      <Header title="Budget Planning" />
      
      <div className="flex-1 space-y-8 p-8">
        {/* Subheader */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="text-sm font-bold text-brand-primary border-b-2 border-brand-primary pb-1">Overview</button>
            <button className="text-sm font-medium text-slate-400 hover:text-brand-primary pb-1">History</button>
            <button className="text-sm font-medium text-slate-400 hover:text-brand-primary pb-1">Export</button>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-secondary active:scale-95">
            Create Budget
          </button>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Budgeted</span>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-3xl font-bold text-brand-primary">$12,450.00</h3>
              <span className="text-xs font-bold text-success">+4.2% from last month</span>
            </div>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-4 w-6 rounded-sm bg-slate-100"></div>)}
            </div>
          </div>
          
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Spent</span>
            <div className="mt-2">
              <h3 className="text-3xl font-bold text-brand-primary">$8,124.60</h3>
            </div>
            <div className="mt-4 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
               <div className="h-full bg-brand-primary w-[65%]"></div>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Remaining Budget</span>
              <HelpCircle size={14} className="text-slate-300" />
            </div>
            <div className="mt-2">
              <h3 className="text-3xl font-bold text-success">$4,325.40</h3>
              <span className="text-xs font-medium text-slate-400">14 days left in period</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Expense Categories */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-brand-primary">Expense Categories</h4>
              <button className="text-xs font-bold text-slate-400 hover:text-brand-primary">View All Transactions</button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {expenseCategories.map((cat) => (
                <div key={cat.name} className="rounded-xl border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50">
                        <cat.icon size={24} className="text-brand-primary" />
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-primary">{cat.name}</h5>
                        <p className="text-xs text-slate-400">{cat.subtext}</p>
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
                      <button className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-brand-primary">Adjust</button>
                    </div>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
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

          {/* Sidebar */}
          <div className="space-y-8 lg:col-span-1">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h4 className="mb-6 font-bold text-brand-primary">Budget Allocation</h4>
              <div className="flex h-64 items-center justify-center rounded-lg bg-slate-50 border border-dashed border-slate-200">
                <span className="text-sm font-medium text-slate-400">Allocation Donut (Recharts)</span>
              </div>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h4 className="mb-6 font-bold text-brand-primary">Historical Performance</h4>
              <div className="flex h-48 items-center justify-center rounded-lg bg-slate-50 border border-dashed border-slate-200">
                <span className="text-sm font-medium text-slate-400">Historical Chart Placeholder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Optimization Suggestion */}
        <div className="rounded-2xl bg-brand-primary p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex items-center justify-between gap-8">
            <div className="max-w-xl space-y-4">
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-amber-400" />
                <h3 className="text-xl font-bold">Optimization Suggestion</h3>
              </div>
              <p className="text-slate-300">
                Based on your historical spending, you could save an average of{" "}
                <span className="font-bold text-success">$420/month</span> by reallocating your dining budget to groceries.
              </p>
            </div>
            <button className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-brand-primary shadow-sm transition-all hover:bg-slate-50 active:scale-95 whitespace-nowrap">
              Apply Recommended Changes
            </button>
          </div>
          {/* Background decoration */}
          <div className="absolute right-[-20%] bottom-[-50%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
