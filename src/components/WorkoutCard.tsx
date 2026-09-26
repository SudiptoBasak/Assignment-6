import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import type { Workout } from "../types/workout";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-lg border border-[#292d2f] bg-[#0d1012]"
    >
      <div className="relative h-52 overflow-hidden bg-[#171a1c]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full border border-[#383d3f] px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[var(--accent)]"
            >
              {group}
            </span>
          ))}
        </div>
        <h3 className="display-font text-xl uppercase">{workout.name}</h3>
        <p className="mt-2 text-xs text-white/50">{workout.equipment}</p>
        <div className="mt-4 flex items-center justify-between border-t border-[#25292b] pt-3 text-[11px] text-white/60">
          <span className="flex items-center gap-1"><Clock3 size={13} /> {workout.duration} min</span>
          <span className="flex items-center gap-1"><Flame size={13} /> {workout.caloriesBurned} kcal</span>
          <span className="flex items-center gap-1"><Star size={13} /> {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}
