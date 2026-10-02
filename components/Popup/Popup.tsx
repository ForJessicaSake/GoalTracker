import Modal, { ModalContent } from "../Micro/Modal.tsx/Modal";
import React from "react";
import Button from "../Micro/Button/Button";
import { UseAuth, db } from "../Utils/Firebase/Firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export type DueDate = {
  seconds: number;
  nanoseconds: number;
};

const PopUp = ({
  modal,
  edit,
  setModal,
  task,
  setTask,
  handleAdd,
  id,
  collectionName,
  value,
}: any) => {
  const currentUser = UseAuth();
  const handleEdit = async (
    e: React.FormEvent,
    id: string,
    collectionName: string
  ) => {
    e.preventDefault();
    try {
      const docRef = doc(db, collectionName, id);
      const payload = {
        uid: currentUser?.uid,
        time: serverTimestamp(),
        description: task.description,
        title: task.title,
        priority: task.priority,
        dueDate: value,
      };
      const data = await setDoc(docRef, payload, {
        merge: true,
      });
      toast.success("Updated successfully!");
      setModal(false);
      setTask(data);
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };
  return (
    <Modal open={modal} onClose={() => setModal(false)}>
      <ModalContent className="mx-4 w-[min(100%,440px)] rounded-2xl border border-white/10 bg-panel p-6 text-paper md:p-8">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">
            {edit ? "Edit entry" : "Add to the list"}
          </h2>
          <form className="mt-8 flex flex-col">
            <label className="text-sm font-medium text-mist">
              Title
            </label>
            <input
              type="text"
              required
              placeholder="Title"
              value={task?.title}
              onChange={(e) => {
                setTask({ ...task, title: e.target.value });
              }}
              className="field mt-2"
            />
            <label className="mt-5 text-sm font-medium text-mist">
              Description
            </label>
            <input
              type="text"
              required
              placeholder="A short note"
              value={task?.description}
              onChange={(e) => {
                setTask({ ...task, description: e.target.value });
              }}
              className="field mt-2"
            />
            <label className="mt-5 text-sm font-medium text-mist">
              Priority
            </label>
            <select
              value={task?.priority}
              onChange={(e) => {
                setTask({ ...task, priority: e.target.value });
              }}
              className="field mt-2"
            >
              <option value="Low">Low</option>
              <option value="High">High</option>
            </select>
            {!edit ? (
              <Button
                className="mt-8 rounded-lg bg-accent text-sm font-semibold text-ink"
                onClick={handleAdd}
              >
                Submit
              </Button>
            ) : (
              <button
                className="mt-8 rounded-lg bg-accent p-3 text-sm font-semibold text-ink"
                onClick={(e: React.FormEvent) => {
                  handleEdit(e, id, collectionName);
                }}
              >
                Update
              </button>
            )}
          </form>
        </section>
      </ModalContent>
    </Modal>
  );
};

export default PopUp;
