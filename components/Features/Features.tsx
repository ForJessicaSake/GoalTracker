const featureArray = [
  {
    name: "Goals",
    deets: "One list for what you are working toward, with a title, a priority, and a due date.",
  },
  {
    name: "Tasks",
    deets: "The smaller work sits beside the goal. Mark it done and it leaves the open list.",
  },
  {
    name: "Progress",
    deets: "A plain count of what is open, what is waiting, and what you have already closed.",
  },
  {
    name: "Your account",
    deets: "Goals and notes stay with your account, so the list is still there when you come back.",
  },
];

const Features = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8" id="features">
      <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-paper">
        Everything you need to keep a goal moving.
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {featureArray.map((feature) => (
          <article
            key={feature.name}
            className="rounded-2xl border border-white/10 bg-panel p-5"
          >
            <h3 className="text-lg font-semibold text-paper">{feature.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{feature.deets}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
