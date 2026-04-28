"use client";

import { Sidebar } from "@/app/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-main-bg">
      <Sidebar />
      <main className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-main-bg text-main-fg transition-colors">
        {children}
      </main>
    </div>
  );
}
