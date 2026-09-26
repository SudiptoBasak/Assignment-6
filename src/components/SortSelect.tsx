"use client";

import { ChevronDown } from "lucide-react";

export type SortValue = "duration" | "calories" | "rating";

export default function SortSelect({ value, onChange }: { value: SortValue; onChange: (value: SortValue) => void }) {
  return (
    <label className="relative flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/50">
      Sort By
      <span className="relative">
        <select value={value} onChange={(event) => onChange(event.target.value as SortValue)} className="appearance-none rounded-md border border-[#333] bg-[#101010] py-2 pl-3 pr-9 text-white outline-none">
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
        <ChevronDown size={15} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
      </span>
    </label>
  );
}
