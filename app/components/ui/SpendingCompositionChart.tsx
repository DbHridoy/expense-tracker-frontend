"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Housing", value: 40, color: "var(--color-brand-primary)" },
  { name: "Food", value: 25, color: "var(--color-accent)" },
  { name: "Travel", value: 15, color: "var(--color-success)" },
  { name: "Misc", value: 20, color: "var(--color-ui-surface-muted)" },
];

export function SpendingCompositionChart() {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-[10px] font-bold uppercase tracking-widest text-ui-muted">Total</span>
        <span className="text-2xl font-black text-brand-primary">$18k</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "var(--color-ui-surface)", 
              borderColor: "var(--color-ui-border)",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "bold"
            }}
          />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={85}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
