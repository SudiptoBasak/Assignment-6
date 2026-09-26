export default function Loading() {
  return (
    <main className="container-fitlog flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#333] border-t-(--accent)" />
      <p className="mt-4 text-sm uppercase tracking-widest text-white/50">Loading workouts…</p></div>
    </main>
  );
}
