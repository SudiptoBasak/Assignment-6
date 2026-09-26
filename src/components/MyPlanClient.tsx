"use client";

import Link from "next/link";
import { useState } from "react";
import PlanCard from "./PlanCard";
import { useFitLog } from "../context/FitLogContext";

export default function MyPlanClient() {
  const { plan, saved } = useFitLog();
  const [tab, setTab] = useState<"plan" | "saved">("plan");
  const minutes = plan.reduce((total, item) => total + item.duration, 0);
  const calories = plan.reduce((total, item) => total + item.caloriesBurned, 0);
  const current = tab === "plan" ? plan : saved;

  return (
    <main className="container-fitlog py-14 md:py-20">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[.3em] text-[var(--accent)]">Workout Log</p>
        <h1 className="display-font mt-3 text-5xl uppercase md:text-7xl">My Plan</h1>
        <p className="mt-3 text-sm text-white/50">Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Metric label="Exercises" value={plan.length} />
        <Metric label="Minutes" value={minutes} />
        <Metric label="Calories" value={calories} />
      </div>

      <div className="mt-12 border-b border-[#292929]">
        <div className="flex gap-7">
          <button onClick={() => setTab("plan")} className={`border-b-2 px-1 pb-4 text-sm font-bold uppercase tracking-wider ${tab === "plan" ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent text-white/45"}`}>Today&apos;s Plan</button>
          <button onClick={() => setTab("saved")} className={`border-b-2 px-1 pb-4 text-sm font-bold uppercase tracking-wider ${tab === "saved" ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent text-white/45"}`}>Saved</button>
        </div>
      </div>

      <div className="mt-7 space-y-4">
        {current.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#333] px-6 py-20 text-center">
            <h2 className="display-font text-3xl uppercase">Nothing Here Yet</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/45">Browse the library and add a lift to get today moving.</p>
            <Link href="/" className="mt-6 inline-block rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-black uppercase text-black">Go to workouts</Link>
          </div>
        ) : current.map((workout) => <PlanCard key={workout.id} workout={workout} savedTab={tab === "saved"} />)}
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return <div className="rounded-xl border border-[#292929] bg-[#0d0d0d] p-6"><p className="text-xs font-bold uppercase tracking-widest text-white/40">{label}</p><p className="display-font mt-2 text-5xl text-[var(--accent)]">{value}</p></div>;
}
