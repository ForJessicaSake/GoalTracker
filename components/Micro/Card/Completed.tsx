const Completed = ({ tasks }: any) => {
  return (
    <div className="grid gap-3 py-4 text-paper">
      {tasks &&
        tasks.map((goals: any) => (
          <div
            key={goals.id}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-ink px-4 py-3"
          >
            <h2 className="text-sm text-mist line-through">{goals.title}</h2>
            <span className="text-xs font-medium text-accent">
              Done
            </span>
          </div>
        ))}
    </div>
  );
};

export default Completed;
