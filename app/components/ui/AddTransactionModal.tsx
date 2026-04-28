"use client";

import { X, Calendar, ChevronDown, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddTransactionModal({ isOpen, onClose }: AddTransactionModalProps) {
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
            className="fixed inset-0 z-[100] bg-brand-primary/40 backdrop-blur-sm dark:bg-black/60"
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
              <div className="flex items-center justify-between border-b px-6 py-4">
                <h2 className="text-xl font-bold text-brand-primary">Add New Transaction</h2>
                <button
                  onClick={onClose}
                  className="rounded-lg p-1 text-ui-muted transition-colors hover:bg-ui-surface-muted hover:text-brand-primary"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <form className="p-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Amount */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-ui-muted ml-1">
                    Transaction Amount
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ui-muted">
                      <DollarSign size={18} />
                    </div>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      className="h-14 w-full rounded-xl bg-ui-surface-muted px-10 text-lg font-bold text-brand-primary outline-none ring-1 ring-ui-border transition-all focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                {/* Type & Category */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-ui-muted ml-1">
                      Type
                    </label>
                    <div className="relative">
                      <select className="h-12 w-full appearance-none rounded-xl bg-ui-surface-muted pl-4 pr-10 text-sm font-bold text-brand-primary outline-none ring-1 ring-ui-border transition-all focus:ring-2 focus:ring-accent">
                        <option>Expense</option>
                        <option>Income</option>
                        <option>Transfer</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-ui-muted pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-ui-muted ml-1">
                      Category
                    </label>
                    <div className="relative">
                      <select className="h-12 w-full appearance-none rounded-xl bg-ui-surface-muted pl-4 pr-10 text-sm font-bold text-brand-primary outline-none ring-1 ring-ui-border transition-all focus:ring-2 focus:ring-accent">
                        <option>Operational</option>
                        <option>Marketing</option>
                        <option>Infrastructure</option>
                        <option>Services</option>
                        <option>Internal</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-ui-muted pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-ui-muted ml-1">
                    Description / Note
                  </label>
                  <textarea
                    placeholder="Add details about this entry..."
                    className="min-h-[100px] w-full resize-none rounded-xl bg-ui-surface-muted p-4 text-sm font-medium text-brand-primary outline-none ring-1 ring-ui-border transition-all focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-ui-muted ml-1">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="h-12 w-full rounded-xl bg-ui-surface-muted pl-4 pr-10 text-sm font-bold text-brand-primary outline-none ring-1 ring-ui-border transition-all focus:ring-2 focus:ring-accent"
                    />
                    <Calendar size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-ui-muted pointer-events-none" />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-4 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2 text-sm font-bold text-ui-muted transition-colors hover:text-brand-primary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-brand-primary px-8 py-3 text-sm font-bold text-white shadow-lg shadow-brand-primary/20 transition-all hover:bg-brand-secondary active:scale-95 dark:text-main-bg"
                  >
                    Record Transaction
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
