import Link from "next/link";

const Cta = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-panel px-6 py-8 sm:flex-row sm:items-center sm:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Start a list today.</h2>
          <p className="mt-2 max-w-lg text-sm text-mist">
            The free plan holds the practice. Upgrade when you need more room.
          </p>
        </div>
        <Link
          href="/signup"
          className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink"
        >
          Create an account
        </Link>
      </div>
    </section>
  );
};

export default Cta;
