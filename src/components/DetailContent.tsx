import Image from "next/image";
import type { Workout } from "../types/workout";
import WorkoutActions from "./WorkoutActions";

export default function DetailContent({ workout }: { workout: Workout }) {
  const specs = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <main className="container-fitlog py-10 md:py-14 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-[#252a2c] bg-[#111417] lg:min-h-[650px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="py-1 lg:py-4">
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full border border-[#3a3d3f] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]"
              >
                {group}
              </span>
            ))}
          </div>

          <h1 className="display-font text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
            {workout.name}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            {workout.description}
          </p>

          <div className="mt-7 overflow-hidden rounded-lg border border-[#292d2f]">
            {specs.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-6 border-b border-[#24282a] px-4 py-3.5 last:border-b-0"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                  {label}
                </span>
                <span className="text-sm font-semibold text-white/85">{value}</span>
              </div>
            ))}
          </div>

          <section className="mt-9">
            <h2 className="display-font text-2xl uppercase">Instructions</h2>
            <ol className="mt-5 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-4 border-b border-[#202427] pb-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-black text-black">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-white/65">{instruction}</span>
                </li>
              ))}
            </ol>
          </section>

          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
}
