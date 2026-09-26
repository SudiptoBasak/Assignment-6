import Hero from "../components/Hero";
import HomeLibrary from "../components/HomeLibrary";
import type { Workout } from "../types/workout";

const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch workouts");
  const data: Workout[] = await res.json();
  return data;
};

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />
      <HomeLibrary workouts={workouts} />
    </main>
  );
}
