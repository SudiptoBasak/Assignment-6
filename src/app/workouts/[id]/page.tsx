import { notFound } from "next/navigation";
import DetailContent from "../../../components/DetailContent";
import type { Workout } from "../../../types/workout";

const getWorkout = async (id: string): Promise<Workout> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  

  if (!res.ok) {
    notFound();
  }

  const data: Workout = await res.json();
  return data;
};

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkout(id);

  return <DetailContent workout={workout} />;
}
