import React from "react";
import Footer from "../../Footer/Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaArrowRight } from "react-icons/fa";
import { BsDot, BsPlusLg } from "react-icons/bs";
import PopUp from "../../Popup/Popup";
import { DueDate } from "../../Popup/Popup";
import Pending from "../../Micro/Card/Pending";
import Card from "../../Micro/Card/Card";
import Completed from "../../Micro/Card/Completed";
import useFetch from "../../Hooks/fetch/useFetch";
import Image from "next/image";
import {
  FieldValue,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { UseAuth, db } from "../../Utils/Firebase/Firebase";
import { toast } from "react-toastify";

export interface Task {
  id: string;
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
    } catch (err: any) {
      toast.error(err);
    }
  };

  return (
    <main>
      <div className="px-3 sm:px-5">
        <div className="flex lg:flex-row flex-col items-center lg:items-start text-center lg:text-start justify-between max-w-full">
          <div className="leading-7">
            <h1 className="sm:text-4xl text-2xl font-semibold">
              Welcome back,{" "}
            </h1>
            <p className="py-2 sm:text-base text-sm">
              What are your goals for today?{" "}
            </p>
            <Image src="/assets/signup.jpg" alt="id" width={400} height={300} />
          </div>
          <div className="w-64 sm:w-fit">
            <div className="flex items-center justify-between py-3">
              <h3 className="flex items-center justify-center">
                <FaArrowRight className="text-lg mr-2 animate-verticalBounce" />
                <span className="text-background mr-2 font-semibold">Due</span>
                date?
              </h3>
            </div>
            <Calendar onChange={handleDateChange} value={value} />
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 py-7">
          <div className="bg-slate-50 w-full rounded-lg p-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center text-lg">
                  <BsDot className="mr-1 text-5xl text-background" />
                  Goals
                </div>
                <div className="bg-gray-100 h-7 w-7 ml-2  text-background flex items-center justify-center text-lg font-semibold rounded-full">
                  0
                </div>
              </div>

              <div
                onClick={() => setModal(true)}
                className="cursor-pointer bg-gray-100 h-7 w-7 ml-2 animate-bounce text-background flex items-center justify-center text-lg font-semibold rounded-full"
              >
                <BsPlusLg className="text-xl font-semibold" />
              </div>
            </div>
            <div className="h-1 rounded-full bg-card w-full"></div>
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

          <div className="bg-slate-100 text-black w-full rounded-lg p-2">
            <div className="flex items-center">
              <div className="flex items-center text-lg">
                <BsDot className="mr-1 text-5xl text-black" />
                Pending
              </div>
              <div className="bg-white h-7 w-7 ml-2  text-black flex items-center justify-center text-lg font-semibold rounded-full">
                0
              </div>
            </div>
            <div className="h-1 rounded-full bg-black w-full"></div>
            <Pending
              tasks={data}
              collectionName="goals"
              database="completedGoals"
            />
          </div>

          <div className="bg-slate-50 text-black w-full rounded-lg p-2">
            <div className="flex items-center text-lg">
              <BsDot className="mr-1 text-5xl text-background" />
              Achieved
              <div className="bg-gray-100 h-7 w-7 ml-2  text-background flex items-center justify-center text-lg font-semibold rounded-full">
                0
              </div>
            </div>
            <div className="h-1 rounded-full bg-card w-full"></div>
            <Completed tasks={completed.slice(0, 5)} />
          </div>
        </div>
      </div>
      <div className="border-t">
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
