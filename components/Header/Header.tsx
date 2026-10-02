import Link from "next/link";

const sample = [
  { title: "Ship the weekly review", done: true },
  { title: "Write the Q4 goals", done: true },
  { title: "Close three open tasks", done: false },
  { title: "Check what is still pending", done: false },
];

const Header = () => {
  return (
    <header className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-16 pt-8 sm:px-8 lg:grid-cols-2 lg:pt-16">
      <div>
        <p className="text-sm font-medium text-accent">Goal tracking</p>
        <h1 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          Track the goals you mean to finish.
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-mist">
          Write a goal, keep the tasks next to it, and see what is still open.
          The free plan is enough to start.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/signup"
            className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink"
          >
            Start free
          </Link>
          <Link
            href="/login"
            className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-paper"
          >
            Sign in
          </Link>
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-panel p-5 shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-paper">This week</p>
          <p className="text-sm text-accent">2 of 4 done</p>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 rounded-full bg-accent" />
        </div>
        <ul className="mt-5 space-y-2">
          {sample.map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-3 rounded-xl border border-white/8 bg-ink px-3 py-3"
            >
              <span
                className={`grid h-5 w-5 place-items-center rounded-md border text-[11px] ${
                  item.done
                    ? "border-accent bg-accent text-ink"
                    : "border-white/20 text-transparent"
                }`}
              >
                ✓
              </span>
              <span
                className={`text-sm ${
                  item.done ? "text-mist line-through" : "text-paper"
                }`}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
