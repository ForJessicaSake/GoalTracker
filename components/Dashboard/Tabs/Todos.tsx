import React from "react";
import Footer from "../../Footer/Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsPlusLg } from "react-icons/bs";
import {
  FieldValue,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { UseAuth, db } from "../../Utils/Firebase/Firebase";
import PopUp from "../../Popup/Popup";
import { toast } from "react-toastify";
import Pending from "../../Micro/Card/Pending";
import Card from "../../Micro/Card/Card";
import useFetch from "../../Hooks/fetch/useFetch";
import Completed from "../../Micro/Card/Completed";

type goal = {
  title?: string;
  description?: string;
  priority?: string;
  time?: FieldValue;
  dueDate?: string;
  uid?: string | null;
};

const Todos = () => {
  const [value, onChange] = React.useState(new Date());
  const currentUser = UseAuth();
  const [modal, setModal] = React.useState(false);
  const handleModal = () => {
    () => setModal(false);
  };
  const data = useFetch("todos");
  const completed = useFetch("completedTodos");
  const [task, setTask] = React.useState<any>({
    title: "",
    description: "",
    priority: "Low",
    time: serverTimestamp(),
    dueDate: value,
    uid: currentUser?.uid ?? null,
  });
  const handleDateChange = (date: any) => {
    onChange(date);
  };

  //handleAdd
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const collectionRef = collection(db, "todos");
      const payload = {
        uid: currentUser?.uid,
        time: serverTimestamp(),
        description: task?.description,
        title: task?.title,
        priority: task?.priority,
        dueDate: value,
      };
      await addDoc(collectionRef, payload);
      setTimeout(() => {
        toast.success("New todo successfully added!");
        setModal(false);
      }, 200);
    } catch (err) {
      toast.error("Failed to set the new goal. Please try again.");
    }
  };
  return (
    <main>
      <div className="px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Tasks
            </h1>
            <p className="mt-4 max-w-md text-mist">
              Choose a due date, then add the task to the open list.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium text-mist">Due date</p>
            <Calendar
              onChange={handleDateChange}
              value={value}
              className="gt-cal"
            />
          </div>
        </div>
        <div className="grid gap-5 py-10 lg:grid-cols-3">
          <div className="w-full rounded-2xl border border-white/10 bg-panel p-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Todos</span>
                <span className="text-sm text-accent">{data.length}</span>
              </div>
              <button
                type="button"
                className="text-paper"
                aria-label="Add todo"
                onClick={() => setModal(true)}
              >
                <BsPlusLg />
              </button>
            </div>
            <Card
              tasks={data}
              modal={modal}
              setModal={setModal}
              handleModal={handleModal}
              handleAdd={handleAdd}
              value={value}
              task={task}
              setTask={setTask}
              collectionName="todos"
            />
          </div>

          <div className="w-full rounded-2xl border border-white/10 bg-panel p-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="text-sm font-medium">In progress</span>
              <span className="text-sm text-accent">{data.length}</span>
            </div>
            <Pending
              tasks={data}
              collectionName="todos"
              database="completedTodos"
            />
          </div>

          <div className="w-full rounded-2xl border border-white/10 bg-panel p-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="text-sm font-medium">Done</span>
              <span className="text-sm text-accent">{completed.length}</span>
            </div>
            <Completed tasks={completed.slice(0, 5)} />
          </div>
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
      <PopUp
        modal={modal}
        setModal={setModal}
        handleModal={handleModal}
        handleAdd={handleAdd}
        value={value}
        task={task}
        setTask={setTask}
        collectionName="todos"
      />
    </main>
  );
};
export default Todos;
