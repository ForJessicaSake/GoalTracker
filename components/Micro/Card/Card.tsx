import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { getDateValue } from "../../Dashboard/Tabs/Goals";
import { handleDelete } from "../../Hooks/delete/handleDelete";
import PopUp from "../../Popup/Popup";

const Card = ({ tasks, handleAdd, task, setTask, collectionName, value }: any) => {
  const [modal, setModal] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  let [id, setId] = React.useState("");
  return (
    <div className="grid gap-4 py-4 text-paper">
      {tasks &&
        tasks.map((goals: any) => (
          <div key={goals.id} className="rounded-xl border border-white/10 bg-ink p-4">
            <div className="flex justify-between">
              <div
                className={`w-fit rounded-md px-2 py-1 text-xs font-medium ${
                  goals.priority === "Low" ? "text-mist" : "text-accent"
                }`}
              >
                {goals.priority}
              </div>
              <button
                type="button"
                className="text-mist hover:text-paper"
                onClick={() => handleDelete(goals.id, collectionName)}
                aria-label="Delete"
              >
                <AiOutlineDelete />
              </button>
            </div>
            <h2 className="py-4 text-base font-semibold">{goals.title}</h2>
            <p className="text-sm text-mist">{goals.description}</p>

            <div className="flex items-center justify-between pt-5 text-sm">
              <h2>
                <span className="text-sm text-mist">Due </span>
                {goals.dueDate ? getDateValue(goals.dueDate) : ""}
              </h2>
              <button
                type="button"
                className="text-mist hover:text-paper"
                aria-label="Edit"
                onClick={() => {
                  setModal(true);
                  setTask(goals);
                  setEdit(true);
                  setId(goals.id);
                }}
              >
                <FiEdit />
              </button>
            </div>
          </div>
        ))}
      <PopUp
        modal={modal}
        setModal={setModal}
        handleAdd={handleAdd}
        task={task}
        value={value}
        setTask={setTask}
        edit={edit}
        id={id}
        collectionName={collectionName}
      />
    </div>
  );
};

export default Card;
