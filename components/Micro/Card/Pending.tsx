import React from "react";
import { getDateValue } from "../../Dashboard/Tabs/Goals";
import { BsCheck2All } from "react-icons/bs";

const Pending = ({tasks}:any) => {
    console.log("data", tasks)
  return (
    <div className=" text-black py-3 gap-5 grid ">
      {tasks &&
        tasks.map((tasks: any) => (
          <div key={tasks.id} className="bg-white p-4 rounded-md">
            <div className="flex justify-between">
              <div className=" bg-green-500 text-white rounded-sm text-xs w-fit p-1 flex justify-center items-center">
                {tasks.priority}
              </div>
            </div>
            <h2 className="py-3 font-semibold">{tasks.title}</h2>
            <p className="text-xs">{tasks.description}</p>
            <h2 className="py-4 text-sm">
              Due date: {tasks.dueDate ? getDateValue(tasks.dueDate) : ""}
            </h2>
            <div className="flex border-b hover:border-b-2 cursor-pointer border-black justify-end items-center text-sm">
              Mark as Completed <BsCheck2All className="ml-2 text-lg" />{" "}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Pending;
