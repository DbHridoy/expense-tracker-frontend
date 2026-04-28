"use client";

import { Header } from "@/app/components/layout/Header";
import { User, Mail, MapPin, Calendar, Camera, Briefcase, Award } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header title="User Profile" />
      
      <div className="flex-1 space-y-8 p-8">
        {/* Profile Header */}
        <div className="rounded-3xl bg-ui-surface border shadow-sm overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-brand-primary to-accent relative">
             <button className="absolute right-6 bottom-4 p-2 rounded-lg bg-ui-surface/20 backdrop-blur-md text-white border border-white/20 hover:bg-ui-surface/30 transition-all">
               <Camera size={18} />
             </button>
          </div>
          <div className="px-8 pb-8 flex flex-col md:flex-row items-end gap-6 -mt-12 relative z-10">
            <div className="h-32 w-32 rounded-3xl bg-ui-surface p-1 shadow-xl">
              <div className="h-full w-full rounded-[1.25rem] bg-slate-200 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=James')] bg-cover"></div>
            </div>
            <div className="flex-1 pb-2">
              <h3 className="text-2xl font-bold text-brand-primary">James Sterling</h3>
              <p className="text-ui-muted font-medium">Wealth Management Expert</p>
            </div>
            <div className="flex gap-3 pb-2">
              <button className="px-6 py-2.5 rounded-xl border font-bold text-sm text-brand-primary hover:bg-main-bg transition-all">Edit Profile</button>
              <button className="px-6 py-2.5 rounded-xl bg-brand-primary text-white font-bold text-sm shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all">Follow</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* About Me */}
          <div className="lg:col-span-3 space-y-8">
            <div className="rounded-2xl border bg-ui-surface p-8 shadow-sm space-y-6">
              <h4 className="font-bold text-brand-primary text-lg">About Me</h4>
              <p className="text-sm text-ui-muted leading-relaxed">
                Dedicated financial professional with over 12 years of experience in wealth management and institutional investment strategies. 
                Passionate about helping individuals and organizations optimize their cash flows and achieve long-term financial stability.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-4 text-ui-muted">
                  <div className="h-10 w-10 rounded-lg bg-main-bg flex items-center justify-center text-brand-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ui-muted">Email</p>
                    <p className="text-sm font-medium">james@sovereign.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-ui-muted">
                  <div className="h-10 w-10 rounded-lg bg-main-bg flex items-center justify-center text-brand-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ui-muted">Location</p>
                    <p className="text-sm font-medium">New York, USA</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-ui-muted">
                  <div className="h-10 w-10 rounded-lg bg-main-bg flex items-center justify-center text-brand-primary">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ui-muted">Company</p>
                    <p className="text-sm font-medium">Sovereign Finance</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-ui-muted">
                  <div className="h-10 w-10 rounded-lg bg-main-bg flex items-center justify-center text-brand-primary">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ui-muted">Joined</p>
                    <p className="text-sm font-medium">January 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
