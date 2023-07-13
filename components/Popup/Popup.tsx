import Modal, { ModalContent } from "../Micro/Modal.tsx/Modal";
import React from "react";
import Button from "../Micro/Button/Button";

export type DueDate = {
  seconds: number;
  nanoseconds: number;
};

const PopUp = ({ modal, handleModal, task, setTask, handleAdd }: any) => {
  return (
    <Modal open={modal} onClose={handleModal} className="bg-btnHoverBlack ">
      <ModalContent className="text-black bg-slate-50 overflow-y-scroll mx-3 p-5 md:p-0 rounded-2xl w-[430px] h-[65vh] 2xl:h-fit max-w-5xltext-xs md:text-sm flex flex-col justify-between">
        <section>
          <form onSubmit={handleAdd} className="flex flex-col lg:p-5 ">
            <div className="flex flex-col max-w-sm">
              <label className="py-1">Goal</label>
              <input
                type="text"
                required
                placeholder="Enter your new goal here"
                value={task?.title}
                onChange={(e) => {
                  setTask({ ...task, title: e.target.value });
                }}
                className="max-w-sm p-4 rounded-lg"
              />
            </div>

            <div className="flex flex-col max-w-sm py-5">
              <label className="py-1">Description</label>
              <input
                type="text"
                placeholder="optional"
                value={task?.description}
                onChange={(e) => {
                  setTask({ ...task, description: e.target.value });
                }}
                className="max-w-sm p-4 rounded-lg"
              />
            </div>

            <div className="flex flex-col max-w-sm">
              <label className="py-1">Priority</label>
              <select
                value={task?.priority}
                onChange={(e) => {
                  setTask({ ...task, priority: e.target.value });
                }}
                className="max-w-xl p-4 rounded-lg"
              >
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </div>
            <Button className="bg-card rounded-full w-40 p-2 my-8 text-white">
              Set Goal
            </Button>
          </form>
        </section>
      </ModalContent>
    </Modal>
  );
};

export default PopUp;
