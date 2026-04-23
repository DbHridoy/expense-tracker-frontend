"use client";

import { Header } from "@/app/components/layout/Header";
import { StatCard } from "@/app/components/ui/StatCard";
import { 
  Plus, 
  AlertTriangle, 
  ArrowUpRight, 
  ArrowDownRight, 
  ShoppingBag, 
  Briefcase, 
  Coffee 
} from "lucide-react";

const recentActivity = [
  { id: 1, name: "Apple Store", date: "June 24, 2024", amount: "-$1,299.00", icon: ShoppingBag, color: "bg-slate-100" },
  { id: 2, name: "Salary Deposit", date: "June 22, 2024", amount: "+$8,500.00", icon: Briefcase, color: "bg-success/10", amountColor: "text-success" },
  { id: 3, name: "Blue Bottle Coffee", date: "June 21, 2024", amount: "-$6.50", icon: Coffee, color: "bg-slate-100" },
];

const budgetTracking = [
  { name: "Essential Living", spent: 3200, limit: 4000, color: "bg-success" },
  { name: "Leisure & Travel", spent: 1850, limit: 2000, color: "bg-accent" },
  { name: "Digital Subscriptions", spent: 540, limit: 500, color: "bg-danger" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header title="CapitalTrack" />
      
      <div className="flex-1 space-y-8 p-8">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <StatCard 
            title="Total Income" 
            amount="$24,580.00" 
            trend="+12.5%" 
            trendType="up" 
          />
          <StatCard 
            title="Total Expenses" 
            amount="$18,245.50" 
            trend="+3.2%" 
            trendType="down" 
          />
          <StatCard 
            title="Remaining Balance" 
            amount="$6,334.50" 
            trend="Targeting 25% savings rate" 
            trendType="up"
            variant="dark"
            footer="Targeting 25% savings rate"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-8 lg:col-span-1">
            {/* Budget Tracking */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h4 className="font-bold text-brand-primary">Budget Tracking</h4>
                <button className="text-xs font-bold text-slate-400 hover:text-brand-primary">View All</button>
              </div>
              <div className="space-y-6">
                {budgetTracking.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-brand-primary">{item.name}</span>
                      <span className="text-slate-500">
                        <span className={item.spent > item.limit ? "text-danger" : "text-brand-primary"}>
                          ${item.spent.toLocaleString()}
                        </span>
                        {" "} / ${item.limit.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <div 
                        className={`h-full ${item.color} transition-all duration-500`} 
                        style={{ width: `${Math.min((item.spent / item.limit) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Alerts */}
            <div className="rounded-xl border border-danger/20 bg-danger/5 p-6">
              <div className="mb-4 flex items-center gap-2 text-danger">
                <AlertTriangle size={20} />
                <h4 className="font-bold">Risk Alerts</h4>
              </div>
              <ul className="space-y-3 text-sm font-medium text-brand-primary/80">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-danger"></span>
                  <span>Category Dining Out has exceeded monthly limit by 15%.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-danger"></span>
                  <span>Unusual spike in Cloud Services billing detected.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Column - Chart Placeholder */}
          <div className="rounded-xl border bg-white p-6 shadow-sm lg:col-span-1">
            <div className="mb-6">
              <h4 className="font-bold text-brand-primary">Financial Velocity</h4>
              <p className="text-xs font-medium text-slate-400">6-Month Trend Analysis</p>
            </div>
            <div className="flex h-[300px] items-center justify-center rounded-lg bg-slate-50 border border-dashed border-slate-200">
               <span className="text-sm font-medium text-slate-400">Velocity Chart (Recharts coming soon)</span>
            </div>
            
            <div className="mt-8">
              <div className="mb-4">
                <h4 className="font-bold text-brand-primary">Spending Composition</h4>
              </div>
              <div className="flex h-[200px] items-center justify-center rounded-lg bg-slate-50 border border-dashed border-slate-200">
                 <span className="text-sm font-medium text-slate-400">Donut Chart Placeholder</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 lg:col-span-1">
            {/* Recent Activity */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="mb-6">
                <h4 className="font-bold text-brand-primary">Recent Activity</h4>
              </div>
              <div className="space-y-6">
                {recentActivity.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color}`}>
                        <item.icon size={20} className={item.amountColor || "text-brand-primary"} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-brand-primary">{item.name}</span>
                        <span className="text-xs font-medium text-slate-400">{item.date}</span>
                      </div>
                    </div>
                    <span className={`text-sm font-bold ${item.amountColor || "text-brand-primary"}`}>
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full rounded-lg border py-2.5 text-xs font-bold text-brand-primary transition-colors hover:bg-slate-50">
                View All Transactions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-xl transition-all hover:scale-110 active:scale-95">
        <Plus size={24} />
      </button>
    </div>
  );
}
