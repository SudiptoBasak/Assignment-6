"use client";

import { Bookmark, Plus } from "lucide-react";
import type { Workout } from "../types/workout";
import { useFitLog } from "../context/FitLogContext";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  const { addToPlan, saveForLater } = useFitLog();

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        onClick={() => addToPlan(workout)}
        className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-black uppercase tracking-wide text-black"
      >
        <Plus size={17} />
        Add to today&apos;s plan
      </button>
      <button
        onClick={() => saveForLater(workout)}
        className="inline-flex items-center gap-2 rounded-md border border-[#444] px-5 py-3 text-sm font-black uppercase tracking-wide hover:border-[var(--accent)]"
      >
        <Bookmark size={17} />
        Save for later
      </button>
    </div>
  );
}
