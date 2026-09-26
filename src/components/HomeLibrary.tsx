"use client";

import { useMemo, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import SortSelect, { type SortValue } from "./SortSelect";
import type { Workout } from "../types/workout";

export default function HomeLibrary({ workouts }: { workouts: Workout[] }) {
  const [sort, setSort] = useState<SortValue>("duration");

  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sort === "calories") return b.caloriesBurned - a.caloriesBurned;
      if (sort === "rating") return b.rating - a.rating;
      return a.duration - b.duration;
    });
  }, [workouts, sort]);

  return (
    <section id="library" className="container-fitlog py-14 md:py-18 lg:py-20">
      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-(--accent)]">
            Workout Library
          </p>
          <h2 className="display-font text-4xl uppercase md:text-5xl">The Library</h2>
          <p className="mt-2 text-sm text-white/50">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <SortSelect value={sort} onChange={setSort} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}
