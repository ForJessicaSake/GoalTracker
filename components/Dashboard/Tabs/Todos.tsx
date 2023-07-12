import React from "react";
import Footer from "../../Footer/Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsDot, BsPlusLg } from "react-icons/bs";
import {
  FieldValue,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../Utils/Firebase/Firebase";
import PopUp from "../../Popup/Popup";
import { Task, getDateValue } from "./Goals";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
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
  const [modal, setModal] = React.useState(false);
  const [value, onChange] = React.useState(new Date());
  const handleDateChange = (date: any) => {
    onChange(date);
  };

  const data = useFetch("todos");
  const completed = useFetch("completedTodos");

  //delete frunctionality -goals(collection name)
  const handleDelete = async (id: string) => {
    try {
      const docRef = doc(db, "todos", id);
      await deleteDoc(docRef);
      setTimeout(() => {
        toast.success("task deleted successfully!");
      });
    } catch (error) {
      toast.error("An unexpected error occured");
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
              <Button
                onClick={() => setModal(true)}
                className="bg-black text-white rounded-lg p-1 "
              >
                Add Todo
              </Button>
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
            <Card tasks={data} />
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
        handleModal={() => setModal(false)}
        value={value}
        collectionName="todos"
      />
    </main>
  );
};
export default Todos;
