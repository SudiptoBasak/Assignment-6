import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#252525] bg-[#080808]">
      <div className="container-fitlog flex min-h-30 items-center justify-between gap-6">
        <Logo />
        <p className="text-right text-xs text-white/50">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
}
