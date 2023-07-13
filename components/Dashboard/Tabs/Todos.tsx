import React from "react";
import Footer from "../../Footer/Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsDot, BsPlusLg } from "react-icons/bs";
import {
  FieldValue,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { UseAuth, db } from "../../Utils/Firebase/Firebase";
import PopUp from "../../Popup/Popup";
import { toast } from "react-toastify";
import { FaArrowRight } from "react-icons/fa";
import Pending from "../../Micro/Card/Pending";
import Card from "../../Micro/Card/Card";
import useFetch from "../../Hooks/fetch/useFetch";
import Completed from "../../Micro/Card/Completed";
import Image from "next/image";
import Button from "../../Micro/Button/Button";

type goal = {
  name: string;
  description: string;
  priority: string;
  time: FieldValue;
  dueDate: string;
  uid: string | null;
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
    } catch (err: any) {
      console.log(err);
      toast.error("Failed to set the new goal. Please try again.");
    }
  };
  return (
    <main>
      <div className="sm:px-5 px-3">
        <div className="flex lg:flex-row flex-col items-center md:items-start text-center md:text-start justify-between max-w-full">
          <div className="leading-7">
            <h1 className="sm:text-4xl text-2xl font-semibold">
              Welcome back,{" "}
            </h1>
            <p className="py-2 sm:text-base text-sm">
              What are your todos for today?{" "}
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
            <Calendar onChange={handleDateChange} value={value} className="" />
          </div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 py-7">
          <div className="bg-slate-50 w-full rounded-lg p-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center text-lg">
                  <BsDot className="mr-1 text-5xl text-background" />
                  Todos
                </div>
                <div className="bg-gray-100 h-7 w-7 ml-2  text-background flex items-center justify-center text-lg font-semibold rounded-full">
                  0
                </div>
              </div>
              <div className="cursor-pointer animate-bounce bg-gray-100 h-7 w-7 ml-2  text-background flex items-center justify-center text-lg font-semibold rounded-full">
                <BsPlusLg
                  className="text-xl font-semibold"
                  onClick={() => setModal(true)}
                />
              </div>
            </div>
            <div className="h-1 rounded-full bg-card w-full"></div>
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

          <div className="bg-slate-100 text-black w-full rounded-lg p-2">
            <div className="flex items-center">
              <div className="flex items-center text-lg">
                <BsDot className="mr-1 text-5xl text-black" />
                In Progress
              </div>
              <div className="bg-white h-7 w-7 ml-2  text-black flex items-center justify-center text-lg font-semibold rounded-full">
                0
              </div>
            </div>
            <div className="h-1 rounded-full bg-black w-full"></div>
            <Pending
              tasks={data}
              collectionName="todos"
              database="completedTodos"
            />
          </div>

          <div className="bg-slate-50 text-black w-full rounded-lg p-2">
            <div className="flex items-center">
              <div className="flex items-center text-lg">
                <BsDot className="mr-1 text-5xl text-background" />
                Done
              </div>
              <div className="bg-gray-100 h-7 w-7 ml-2  text-background flex items-center justify-center text-lg font-semibold rounded-full">
                0
              </div>
            </div>
            <div className="h-1 rounded-full bg-card w-full"></div>
            <Completed tasks={completed.slice(0, 5)} />
          </div>
        </div>
        <div className="border-t">
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
