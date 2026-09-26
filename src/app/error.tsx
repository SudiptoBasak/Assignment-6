"use client";

export default function ErrorPage() {
  return (
    <main className="container-fitlog flex min-h-[70vh] items-center justify-center text-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.3em] text-[var(--accent)]">Something went wrong</p>
        <h1 className="display-font mt-3 text-5xl uppercase">Could not load workouts</h1>
        <button onClick={() => window.location.reload()} className="mt-6 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-black uppercase text-black">Try again</button>
      </div>
    </main>
  );
}
