import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { getDateValue } from "../../Dashboard/Tabs/Goals";
import { handleDelete } from "../../Hooks/delete/handleDelete";
import PopUp from "../../Popup/Popup";

const Card = ({ tasks, handleAdd, task, setTask, collectionName }: any) => {
  const [modal, setModal] = React.useState(false);
  const handleModal = () => setModal(false);
  return (
    <div className=" text-black py-3 gap-5 grid ">
      {tasks &&
        tasks.map((goals: any) => (
          <div key={goals.id} className="bg-white p-4 rounded-md">
            <div className="flex justify-between">
              <div
                className={`text-white rounded-sm text-xs w-fit p-1 px-2 flex justify-center items-center ${
                  goals.priority === "Low" ? "bg-yellow-400" : "bg-green-500"
                }`}
              >
                {goals.priority}
              </div>
              <div
                className="text-lg cursor-pointer"
                onClick={() => handleDelete(goals.id, collectionName)}
              >
                <AiOutlineDelete />
              </div>
            </div>
            <h2 className="py-5 font-semibold">{goals.title}</h2>
            <p className="text-sm">{goals.description}</p>

            <div className="flex justify-between pt-5">
              <h2 className="text-base">
                <span className="font-semibold">Due on: </span>{" "}
                {goals.dueDate ? getDateValue(goals.dueDate) : ""}
              </h2>
              <FiEdit
                className=" text-lg cursor-pointer"
                onClick={() => {
                  setModal(true);
                  setTask(goals);
                }}
              />
            </div>
          </div>
        ))}
      <PopUp
        modal={modal}
        handleModal={handleModal}
        handleAdd={handleAdd}
        task={task}
        setTask={setTask}
      />
    </div>
  );
};

export default Card;
