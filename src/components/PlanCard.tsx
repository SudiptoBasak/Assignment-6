"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import type { Workout } from "../types/workout";
import { useFitLog } from "../context/FitLogContext";

export default function PlanCard({
  workout,
  savedTab = false,
}: {
  workout: Workout;
  savedTab?: boolean;
}) {
  const { doneIds, markAsDone, removeFromPlan, removeFromSaved } = useFitLog();
  const done = doneIds.includes(workout.id);

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-[#292d2f] bg-[#0d1012] p-3 sm:flex-row sm:items-center sm:p-4">
      <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-md bg-[#171a1c] sm:h-28 sm:w-40">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="160px"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="display-font text-2xl uppercase">{workout.name}</h3>
        <p className="mt-1 text-sm text-white/50">{workout.equipment}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/55">
          <span className="flex items-center gap-1"><Clock3 size={14} /> {workout.duration} min</span>
          <span className="flex items-center gap-1"><Flame size={14} /> {workout.caloriesBurned} kcal</span>
          <span className="flex items-center gap-1"><Star size={14} /> {workout.rating}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:justify-end">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-md border border-[#3a3e40] px-3 py-2 text-xs font-bold uppercase"
        >
          View Details
        </Link>
        {!savedTab && (
          <button
            onClick={() => markAsDone(workout.id)}
            disabled={done}
            className="inline-flex items-center gap-1 rounded-md bg-(--accent) px-3 py-2 text-xs font-black uppercase text-black disabled:opacity-50"
          >
            <Check size={14} />
            {done ? "Done" : "Mark as Done"}
          </button>
        )}
        <button
          onClick={() =>
            savedTab ? removeFromSaved(workout.id) : removeFromPlan(workout.id)
          }
          aria-label="Remove"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[#3a3e40]"
        >
          <X size={16} />
        </button>
      </div>
    </article>
  );
}
