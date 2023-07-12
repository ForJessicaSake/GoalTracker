import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { getDateValue } from "../../Dashboard/Tabs/Goals";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../Utils/Firebase/Firebase";

const Card = ({ tasks }: any) => {
  const handleDelete = async (id: string) => {
    const docRef = doc(db, "goals", id);
    await deleteDoc(docRef);
    setTimeout(() => {
      toast.success("goal deleted successfully!");
    });
  };
  return (
    <div className=" text-black py-3 gap-5 grid ">
      {tasks &&
        tasks.map((goals: any) => (
          <div key={goals.id} className="bg-white p-4 rounded-md">
            <div className="flex justify-between">
              <div className=" bg-green-500 text-white rounded-sm text-xs w-fit p-1 flex justify-center items-center">
                {goals.priority}
              </div>
              <div
                className="text-lg cursor-pointer"
                onClick={() => handleDelete(goals.id)}
              >
                <AiOutlineDelete />
              </div>
            </div>
            <h2 className="py-3 font-semibold">{goals.title}</h2>
            <p className="text-xs">{goals.description}</p>

            <h2 className="py-3 text-sm">
              Due date: {goals.dueDate ? getDateValue(goals.dueDate) : ""}
            </h2>
            <div className="flex justify-end pt-3 text-lg cursor-pointer">
              <FiEdit />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
