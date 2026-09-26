import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-[#202427] bg-[#080a0b]">
      <div className="container-fitlog grid min-h-[560px] items-center gap-8 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-12">
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            Workout Library
          </p>
          <h1 className="display-font max-w-[720px] text-5xl uppercase leading-[0.9] sm:text-6xl lg:text-[76px]">
            Train With Intent. Log Every Set.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 md:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="mt-7 inline-flex items-center gap-3 rounded-md bg-[var(--accent)] px-5 py-3 text-xs font-black uppercase tracking-wider text-black"
          >
            Browse Workouts
            <ArrowDownRight size={18} />
          </a>
        </div>

        <div className="relative flex min-h-[330px] items-center justify-center lg:min-h-[500px]">
          <Image
            src="/images/hero-machine.png"
            alt="Workout illustration"
            width={620}
            height={620}
            priority
            className="relative z-10 max-h-[500px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
