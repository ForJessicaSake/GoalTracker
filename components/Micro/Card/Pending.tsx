import React from "react";
import { handleComplete } from "../../Hooks/complete/handleComplete";

const Pending = ({ tasks, collectionName, database }: any) => {
  return (
    <div className="grid gap-4 py-4 text-paper">
      {tasks &&
        tasks.map((task: any) => (
          <div key={task.id} className="rounded-xl border border-white/10 bg-ink p-4">
            <div
              className={`w-fit text-xs font-medium ${
                task.priority === "Low" ? "text-mist" : "text-accent"
              }`}
            >
              {task.priority}
            </div>
            <h2 className="py-4 text-base font-semibold">{task.title}</h2>
            <p className="text-sm text-mist">{task.description}</p>
            <label className="mt-5 flex items-center justify-between text-sm text-mist">
              Mark complete
              <input
                type="checkbox"
                className="h-4 w-4 accent-accent"
                onChange={() =>
                  handleComplete(
                    task.description,
                    task.uid,
                    task.title,
                    task.priority,
                    task.id,
                    collectionName,
                    database
                  )
                }
              />
            </label>
          </div>
        ))}
    </div>
  );
};

export default Pending;
