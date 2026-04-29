"use client";

import { X, Calendar, ChevronDown, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface AddDebtModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddDebtModal({ isOpen, onClose }: AddDebtModalProps) {
  const [type, setType] = useState<"Borrowed" | "Lent">("Borrowed");

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-brand-primary/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg overflow-hidden rounded-2xl bg-ui-surface shadow-2xl pointer-events-auto ring-1 ring-ui-border"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-ui-border px-6 py-4">
                <h2 className="text-xl font-bold text-brand-primary">Record New Debt</h2>
                <button
                  onClick={onClose}
                  className="rounded-lg p-1 text-ui-muted transition-colors hover:bg-ui-surface-muted hover:text-brand-primary"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <form className="p-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Entry Type */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-ui-muted ml-1">
                    Entry Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      type="button"
                      onClick={() => setType("Borrowed")}
                      className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 py-4 transition-all focus:ring-2 ${
                        type === "Borrowed" 
                          ? "border-danger/40 bg-danger/5 text-danger ring-danger/20" 
                          : "border-ui-surface-muted text-ui-muted hover:border-danger/20 hover:text-danger hover:bg-danger/5"
                      }`}
                    >
                      <ArrowUpRight size={20} />
                      <span className="text-sm font-bold">Borrowed</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setType("Lent")}
                      className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 py-4 transition-all focus:ring-2 ${
                        type === "Lent" 
                          ? "border-success/40 bg-success/5 text-success ring-success/20" 
                          : "border-ui-surface-muted text-ui-muted hover:border-success/20 hover:text-success hover:bg-success/5"
                      }`}
                    >
                      <ArrowDownRight size={20} />
                      <span className="text-sm font-bold">Lent</span>
                    </button>
                  </div>
                </div>

                {/* Person or Entity */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-ui-muted ml-1">
                    Person or Entity
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Bank, John Doe" 
                    className="h-12 w-full rounded-xl bg-ui-surface-muted px-4 text-sm font-medium text-brand-primary outline-none ring-1 ring-ui-border transition-all focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Amount & Due Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-ui-muted ml-1">
                      Amount
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-ui-muted">
                        <DollarSign size={16} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="0.00" 
                        className="h-12 w-full rounded-xl bg-ui-surface-muted pl-8 pr-4 text-sm font-bold text-brand-primary outline-none ring-1 ring-ui-border transition-all focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-ui-muted ml-1">
                      Due Date
                    </label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="h-12 w-full rounded-xl bg-ui-surface-muted pl-4 pr-10 text-sm font-bold text-brand-primary outline-none ring-1 ring-ui-border transition-all focus:ring-2 focus:ring-accent"
                      />
                      <Calendar size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-ui-muted pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-ui-muted ml-1">
                    Category
                  </label>
                  <div className="relative">
                    <select className="h-12 w-full appearance-none rounded-xl bg-ui-surface-muted pl-4 pr-10 text-sm font-bold text-brand-primary outline-none ring-1 ring-ui-border transition-all focus:ring-2 focus:ring-accent">
                      <option>Personal Loan</option>
                      <option>Credit Card</option>
                      <option>Mortgage</option>
                      <option>Institutional</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-ui-muted pointer-events-none" />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 pt-2">
                  <button className="w-full rounded-xl bg-btn-primary-bg py-4 text-sm font-bold text-btn-primary-fg shadow-lg shadow-brand-primary/20 transition-all hover:bg-btn-primary-hover active:scale-95 uppercase tracking-widest">
                    Save Debt Record
                  </button>
                  <p className="text-[10px] text-center text-ui-muted font-bold uppercase tracking-widest">
                    Financial record will be verified by system
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
