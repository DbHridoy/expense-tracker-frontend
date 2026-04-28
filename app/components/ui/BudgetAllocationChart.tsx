"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Housing", value: 3500, color: "var(--color-brand-primary)" },
  { name: "Groceries", value: 1200, color: "var(--color-accent)" },
  { name: "Transportation", value: 800, color: "var(--color-success)" },
  { name: "Healthcare", value: 1500, color: "var(--color-ui-muted)" },
];

const total = data.reduce((acc, item) => acc + item.value, 0);

export function BudgetAllocationChart() {
  return (
    <div className="h-full w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const item = payload[0].payload;
                return (
                  <div className="rounded-xl border border-ui-border bg-ui-surface p-3 shadow-xl">
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-wider">{item.name}</p>
                    <p className="mt-1 text-lg font-black text-brand-primary">
                      ${item.value.toLocaleString()}
                    </p>
                    <p className="text-[10px] font-medium text-ui-muted">
                      {((item.value / total) * 100).toFixed(1)}% of total
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={85}
            paddingAngle={8}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-[10px] font-bold text-ui-muted uppercase tracking-[0.2em]">Total</span>
        <span className="text-2xl font-black text-brand-primary mt-1">${(total/1000).toFixed(1)}k</span>
      </div>
    </div>
  );
}
