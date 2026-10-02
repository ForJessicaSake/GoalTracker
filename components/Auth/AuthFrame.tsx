import Brand from "../Micro/Brand/Brand";

const preview = [
  { title: "Finish the weekly review", done: true },
  { title: "Add the next goal", done: false },
  { title: "Clear two open tasks", done: false },
];

const AuthFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-ink text-paper lg:grid lg:grid-cols-2">
      <div className="flex min-h-screen flex-col px-6 py-8 sm:px-10 lg:px-14">
        <Brand />
        <div className="flex flex-1 flex-col justify-center py-16">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
      <aside className="hidden items-center justify-center border-l border-white/10 bg-panel/40 px-10 lg:flex">
        <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-ink p-5">
          <p className="text-sm font-medium">Open goals</p>
          <ul className="mt-4 space-y-2">
            {preview.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-3 rounded-xl border border-white/10 px-3 py-3 text-sm"
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
                <span className={item.done ? "text-mist line-through" : "text-paper"}>
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </main>
  );
};

export default AuthFrame;
