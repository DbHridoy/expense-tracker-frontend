"use client";

import { Header } from "@/app/components/layout/Header";
import { 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Bell,
  ArrowRight
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
    statusColor: "text-slate-400 bg-slate-100",
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
  return (
    <div className="flex flex-1 flex-col">
      <Header title="Debt Manager" />
      
      <div className="flex-1 space-y-8 p-8">
        {/* Top Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm overflow-hidden relative">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Borrowed</span>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-3xl font-bold text-danger">$14,250.00</h3>
              <span className="text-xs font-bold text-danger">+2.4% from last month</span>
            </div>
            <div className="absolute right-[-10%] top-[-20%] w-40 h-40 bg-danger/5 rounded-full blur-2xl"></div>
          </div>
          
          <div className="rounded-xl border bg-white p-6 shadow-sm overflow-hidden relative">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Lent</span>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-3xl font-bold text-success">$8,400.00</h3>
              <span className="text-xs font-medium text-slate-400">4 active collections</span>
            </div>
            <div className="absolute right-[-10%] top-[-20%] w-40 h-40 bg-success/5 rounded-full blur-2xl"></div>
          </div>

          <div className="rounded-xl bg-brand-primary p-6 shadow-sm text-white relative">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Net Position</span>
            <div className="mt-2">
              <h3 className="text-3xl font-bold">-$5,850.00</h3>
            </div>
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-white py-2.5 text-xs font-bold text-brand-primary transition-all hover:bg-slate-50">
              <Plus size={16} />
              NEW ENTRY
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Active Debts & Credits */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-brand-primary">Active Debts & Credits</h4>
              <div className="flex rounded-lg border bg-white p-1">
                <button className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-brand-primary">All</button>
                <button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-brand-primary">Borrowed</button>
                <button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-brand-primary">Lent</button>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b bg-slate-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <th className="px-6 py-4">Entity / Person</th>
                    <th className="px-6 py-4 text-center">Type</th>
                    <th className="px-6 py-4 text-right">Amount</th>
                    <th className="px-6 py-4 text-center">Due Date</th>
                    <th className="px-6 py-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {activeDebts.map((debt) => (
                    <tr key={debt.id} className="group hover:bg-slate-50/50">
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
                      <td className="px-6 py-4 text-center text-slate-500 font-medium">
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
              <button className="w-full border-t py-4 text-xs font-bold text-brand-secondary hover:bg-slate-50 transition-colors">
                View All Transaction History
              </button>
            </div>
          </div>

          {/* Record New Debt Form */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h4 className="mb-6 font-bold text-brand-primary text-lg">Record New Debt</h4>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Entry Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-danger/20 bg-danger/5 py-4 text-danger transition-all hover:border-danger/40 ring-danger/20 focus:ring-2">
                    <ArrowUpRight size={20} />
                    <span className="text-sm font-bold">Borrowed</span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-slate-100 py-4 text-slate-400 transition-all hover:border-success/20 hover:text-success hover:bg-success/5">
                    <ArrowDownRight size={20} />
                    <span className="text-sm font-bold">Lent</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Person or Entity</label>
                <input 
                  type="text" 
                  placeholder="e.g. Bank, John Doe" 
                  className="w-full h-11 rounded-lg bg-slate-50 border-none ring-1 ring-slate-200 px-4 text-sm focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Amount</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                    <input 
                      type="text" 
                      placeholder="0.00" 
                      className="w-full h-11 rounded-lg bg-slate-50 border-none ring-1 ring-slate-200 pl-7 pr-4 text-sm focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Due Date</label>
                  <input 
                    type="text" 
                    placeholder="mm/dd/yyyy" 
                    className="w-full h-11 rounded-lg bg-slate-50 border-none ring-1 ring-slate-200 px-4 text-sm focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Category</label>
                <select className="w-full h-11 rounded-lg bg-slate-50 border-none ring-1 ring-slate-200 px-4 text-sm focus:ring-2 focus:ring-brand-primary outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] bg-no-repeat">
                  <option>Personal Loan</option>
                  <option>Credit Card</option>
                  <option>Mortgage</option>
                  <option>Institutional</option>
                </select>
              </div>

              <button className="w-full rounded-lg bg-brand-primary py-3.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-brand-secondary active:scale-95 uppercase tracking-widest mt-2">
                Save Debt Record
              </button>
              <p className="text-[10px] text-center text-slate-400 font-medium uppercase tracking-tight">
                Financial record will be verified by system
              </p>
            </div>
          </div>
        </div>

        {/* Insights at the bottom */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex gap-4 rounded-xl border bg-blue-50/30 p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <Lightbulb size={20} className="text-blue-500" />
            </div>
            <div>
              <h5 className="font-bold text-brand-primary text-sm">Repayment Insight</h5>
              <p className="text-xs text-slate-500 mt-1">At your current repayment rate, First Bank Corp debt will be settled in 8 months.</p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl border bg-emerald-50/30 p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <Bell size={20} className="text-emerald-500" />
            </div>
            <div>
              <h5 className="font-bold text-brand-primary text-sm">Upcoming Collection</h5>
              <p className="text-xs text-slate-500 mt-1">Sarah Miller has a payment due in 3 days. Send a friendly reminder?</p>
            </div>
          </div>

          <div className="flex gap-4 rounded-xl border bg-amber-50/30 p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <AlertCircle size={20} className="text-amber-500" />
            </div>
            <div>
              <h5 className="font-bold text-brand-primary text-sm">Debt Ceiling Alert</h5>
              <p className="text-xs text-slate-500 mt-1">Your debt-to-income ratio is currently 32%. Consider pausing new borrowings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
