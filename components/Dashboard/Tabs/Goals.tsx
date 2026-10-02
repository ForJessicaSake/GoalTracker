import React from "react";
import Footer from "../../Footer/Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsPlusLg } from "react-icons/bs";
import PopUp from "../../Popup/Popup";
import { DueDate } from "../../Popup/Popup";
import Pending from "../../Micro/Card/Pending";
import Card from "../../Micro/Card/Card";
import Completed from "../../Micro/Card/Completed";
import useFetch from "../../Hooks/fetch/useFetch";
import {
  FieldValue,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { UseAuth, db } from "../../Utils/Firebase/Firebase";
import { toast } from "react-toastify";

export interface Task {
  id?: string;
  title?: string;
  dueDate?: any;
  time?: FieldValue;
  priority?: string;
  description?: string;
  uid?: string | null;
}

export const getDateValue = (value: DueDate) => {
  const calc = new Date(value.seconds * 1000);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(calc);
};

const Goals = () => {
  const [value, onChange] = React.useState(new Date());
  const currentUser = UseAuth();
  const [modal, setModal] = React.useState(false);
  const handleModal = () => {
    () => setModal(false);
  };
  const data = useFetch("goals");
  const completed = useFetch("completedGoals");

  //tasks
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
      const collectionRef = collection(db, "goals");
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
        toast.success("New goal successfully set!");
        setModal(false);
      }, 200);
    } catch (err) {
      toast.error("An unexpected error occured");
    }
  };

  return (
    <main>
      <div className="px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Goals
            </h1>
            <p className="mt-4 max-w-md text-mist">
              Choose a due date, then add the goal to the open list.
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
                <span className="text-sm font-medium">Goals</span>
                <span className="text-sm text-accent">{data.length}</span>
              </div>

              <button
                type="button"
                onClick={() => setModal(true)}
                className="text-paper"
                aria-label="Add goal"
              >
                <BsPlusLg />
              </button>
            </div>
            <Card
              tasks={data}
              modal={modal}
              handleModal={handleModal}
              handleAdd={handleAdd}
              task={task}
              setTask={setTask}
              collectionName="goals"
              value={value}
            />
          </div>

          <div className="w-full rounded-2xl border border-white/10 bg-panel p-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="text-sm font-medium">Pending</span>
              <span className="text-sm text-accent">{data.length}</span>
            </div>
            <Pending
              tasks={data}
              collectionName="goals"
              database="completedGoals"
            />
          </div>

          <div className="w-full rounded-2xl border border-white/10 bg-panel p-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="text-sm font-medium">Achieved</span>
              <span className="text-sm text-accent">{completed.length}</span>
            </div>
            <Completed tasks={completed.slice(0, 5)} />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
      <PopUp
        modal={modal}
        handleModal={handleModal}
        setModal={setModal}
        value={value}
        collectionName="goals"
        handleAdd={handleAdd}
        task={task}
        setTask={setTask}
      />
    </main>
  );
};
export default Goals;
