import { Dumbbell } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 font-black tracking-wide">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-black">
        <Dumbbell size={17} strokeWidth={2.8} />
      </span>
      <span>FITLOG</span>
    </div>
  );
}
