"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { month: "JAN", income: 4500, expenses: 3200 },
  { month: "FEB", income: 5200, expenses: 3800 },
  { month: "MAR", income: 6100, expenses: 4400 },
  { month: "APR", income: 6800, expenses: 5100 },
  { month: "MAY", income: 5800, expenses: 3900 },
  { month: "JUN", income: 7200, expenses: 4800 },
];

export function FinancialVelocityChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
          barGap={12}
        >
          <CartesianGrid 
            vertical={false} 
            strokeDasharray="3 3" 
            stroke="var(--color-ui-border)" 
            opacity={0.5}
          />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "var(--color-ui-muted)", fontSize: 10, fontWeight: 700 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "var(--color-ui-muted)", fontSize: 10, fontWeight: 700 }}
          />
          <Tooltip 
            cursor={{ fill: "var(--color-ui-surface-muted)", opacity: 0.4 }}
            contentStyle={{ 
              backgroundColor: "var(--color-ui-surface)", 
              borderColor: "var(--color-ui-border)",
              borderRadius: "12px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              fontSize: "12px",
              fontWeight: "bold",
              color: "var(--color-brand-primary)"
            }}
          />
          <Bar 
            dataKey="expenses" 
            fill="var(--color-accent)" 
            radius={[4, 4, 4, 4]} 
            barSize={40}
            stackId="a"
          />
          <Bar 
            dataKey="income" 
            fill="var(--color-brand-primary)" 
            radius={[4, 4, 0, 0]} 
            barSize={40}
            stackId="a"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
