import React from "react";
import {BsCheck2All} from "react-icons/bs"
const Completed = ({ tasks }: any) => {
  return (
    <div className=" text-black py-2 gap-5 grid ">
      {tasks &&
        tasks.map((goals: any) => (
          <div key={goals.id} className="flex justify-between items-center bg-white p-3 rounded-lg">
            <h2 className="text-base line-through">{goals.title}</h2>
            <BsCheck2All className="text-card"/>
          </div>
        ))}
    </div>
  );
};

export default Completed;
