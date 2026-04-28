"use client";

import { Header } from "@/app/components/layout/Header";
import { StatCard } from "@/app/components/ui/StatCard";
import { 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight 
} from "lucide-react";



import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



import { useState } from "react";
import { AddTransactionModal } from "@/app/components/ui/AddTransactionModal";
import { MultiActionFAB } from "@/app/components/ui/MultiActionFAB";

import { SpendingCompositionChart } from "@/app/components/ui/SpendingCompositionChart";
import { FinancialVelocityChart } from "@/app/components/ui/FinancialVelocityChart";

const compositionData = [
  { name: "Housing", value: "40%", color: "bg-brand-primary" },
  { name: "Food", value: "25%", color: "bg-accent" },
  { name: "Travel", value: "15%", color: "bg-success" },
  { name: "Misc", value: "20%", color: "bg-ui-surface-muted" },
];

export default function DashboardPage() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

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

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Content Area (12/12) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:col-span-12">
            {/* Financial Velocity Chart */}
            <div className="rounded-2xl border bg-ui-surface p-8 shadow-sm flex flex-col">
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-brand-primary text-xl tracking-tight">Financial Velocity</h4>
                  <p className="text-sm font-medium text-ui-muted">6-Month institutional trend analysis</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-brand-primary"></div>
                    <span className="text-xs font-bold text-ui-muted">Income</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-accent"></div>
                    <span className="text-xs font-bold text-ui-muted">Expenses</span>
                  </div>
                </div>
              </div>
              <div className="h-[300px] w-full mt-auto">
                <FinancialVelocityChart />
              </div>
            </div>

            {/* Spending Composition */}
            <div className="rounded-2xl border bg-ui-surface p-8 shadow-sm flex flex-col">
              <h4 className="mb-8 font-bold text-brand-primary text-lg tracking-tight">Spending Composition</h4>
              <div className="flex-1 flex flex-col justify-between gap-8">
                <div className="h-[220px] w-full">
                  <SpendingCompositionChart />
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-ui-border pt-6">
                  {compositionData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`h-2.5 w-2.5 rounded-full ${item.color}`}></div>
                        <span className="text-xs font-bold text-ui-muted">{item.name}</span>
                      </div>
                      <span className="text-xs font-black text-brand-primary">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <MultiActionFAB 
        onAddTransaction={() => setIsTransactionModalOpen(true)}
        onAddBudget={() => alert("Add Budget Modal Coming Soon")}
        onAddDebt={() => alert("Add Debt Modal Coming Soon")}
      />

      <AddTransactionModal 
        isOpen={isTransactionModalOpen} 
        onClose={() => setIsTransactionModalOpen(false)} 
      />
    </div>
  );
}
