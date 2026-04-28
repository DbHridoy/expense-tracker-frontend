"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  ArrowLeftRight, 
  Wallet, 
  HandCoins,
  X
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Action {
  id: string;
  name: string;
  icon: any;
  color: string;
  onClick: () => void;
}

export function MultiActionFAB({ 
  onAddTransaction,
  onAddBudget,
  onAddDebt
}: {
  onAddTransaction: () => void;
  onAddBudget: () => void;
  onAddDebt: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const actions: Action[] = [
    { 
      id: "transaction", 
      name: "Add Transaction", 
      icon: ArrowLeftRight, 
      color: "bg-accent",
      onClick: () => {
        onAddTransaction();
        setIsOpen(false);
      }
    },
    { 
      id: "budget", 
      name: "Create Budget", 
      icon: Wallet, 
      color: "bg-success",
      onClick: () => {
        onAddBudget();
        setIsOpen(false);
      }
    },
    { 
      id: "debt", 
      name: "Record Debt", 
      icon: HandCoins, 
      color: "bg-brand-primary",
      onClick: () => {
        onAddDebt();
        setIsOpen(false);
      }
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-2">
            {actions.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-center gap-3"
              >
                <span className="rounded-lg bg-ui-surface px-3 py-1.5 text-xs font-bold text-brand-primary shadow-xl ring-1 ring-ui-border">
                  {action.name}
                </span>
                <button
                  onClick={action.onClick}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-xl transition-transform hover:scale-110 active:scale-95",
                    action.color,
                    action.id === "debt" && "dark:text-main-bg"
                  )}
                >
                  <action.icon size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-[2rem] shadow-2xl transition-all duration-300 active:scale-95",
          isOpen 
            ? "bg-ui-surface text-brand-primary ring-2 ring-ui-border" 
            : "bg-brand-primary text-white dark:text-main-bg"
        )}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {isOpen ? <X size={28} /> : <Plus size={28} />}
        </motion.div>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 -z-10 bg-main-bg/40 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
