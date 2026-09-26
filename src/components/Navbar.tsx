"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useFitLog } from "../context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  return (
    <header className="border-b border-[#24282a] bg-[#070809]">
      <div className="container-fitlog flex min-h-18 flex-wrap items-center justify-between gap-4 py-3">
        <Link href="/" aria-label="FitLog home">
          <Logo />
        </Link>

        <nav className="order-3 flex w-full items-center justify-center gap-7 text-xs font-bold uppercase tracking-[0.12em] sm:order-none sm:w-auto">
          <Link
            href="/"
            className={pathname === "/" ? "text-(--accent)" : "text-white/60 hover:text-white"}
          >
            Workout
          </Link>
          <Link
            href="/my-plan"
            className={pathname === "/my-plan" ? "text-(--accent)" : "text-white/60 hover:text-white"}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
          <Link
            href="/my-plan"
            className="rounded-full bg-(--accent) px-3 py-2 text-black"
          >
            Plan {plan.length}
          </Link>
          <Link
            href="/my-plan"
            className="rounded-full border border-(--accent) px-3 py-2 text-white"
            
          >
            Saved {saved.length}
          </Link>
        </div>
      </div>
    </header>
  );
}
