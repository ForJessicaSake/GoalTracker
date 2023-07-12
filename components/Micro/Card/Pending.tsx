import React from "react";
import { getDateValue } from "../../Dashboard/Tabs/Goals";
import { handleComplete } from "../../Hooks/complete/handleComplete";

const Pending = ({ tasks, collectionName, database }: any ) => {
  return (
    <div className="text-black py-3 gap-5 grid">
      {tasks &&
        tasks.map((task: any) => (
          <div key={task.id} className="bg-white p-4 rounded-md">
            <div className="flex justify-between">
              <div
                className={`text-white rounded-sm text-xs w-fit p-1 px-2 flex justify-center items-center ${
                  task.priority === "Low" ? "bg-yellow-400" : "bg-green-500"
                }`}
              >
                {task.priority}
              </div>
            </div>
            <h2 className="py-5 font-semibold">{task.title}</h2>
            <p className="text-sm">{task.description}</p>
            <div className="flex justify-between pt-5">
              <h2 className="text-base">
                <span className="font-semibold">Due on: </span>{" "}
                {task.dueDate ? getDateValue(task.dueDate) : ""}
              </h2>
              <div>
                <input
                  type="checkbox"
                  className="h-6 w-6 rounded-md"
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
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Pending;
