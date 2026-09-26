import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-fitlog flex min-h-[70vh] items-center justify-center text-center">
      <div>
        <p className="display-font text-8xl text-[var(--accent)]">404</p>
        <h1 className="display-font mt-2 text-4xl uppercase">Page not found</h1>
        <p className="mt-3 text-white/50">The workout you are looking for does not exist.</p>
        <Link href="/" className="mt-7 inline-block rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-black uppercase text-black">Go to workouts</Link>
      </div>
    </main>
  );
}
