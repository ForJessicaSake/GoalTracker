import React from "react";
import Footer from "../../Footer/Footer";
import Button from "../../Micro/Button/Button";
import { onSuccess, onClose, config } from "../../Paystack/Paystack";
import { usePaystackPayment } from "react-paystack";
import useFetch from "../../Hooks/fetch/useFetch";

const Home = () => {
  const goals = useFetch("goals");
  const completedGoals = useFetch("completedGoals");
  const todos = useFetch("todos");
  const completdTodo = useFetch("completdTodo");
  const initializePayment = usePaystackPayment(config);
  return (
    <main>
      <div className="px-3 sm:px-5">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center">
          <div className="leading-7">
            <h1 className="lg:text-5xl text-4xl font-semibold">
              Did you know?{" "}
            </h1>
            <p className="py-1">
              If you can write it down and keep the momentum going, you can make
              it happen.
            </p>
          </div>
          <Button
            className="bg-black my-5 lg:my-0 motion-safe:animate-pulse text-white lg:w-40 w-fit rounded-lg"
            onClick={() => initializePayment(onSuccess, onClose)}
          >
            Upgrade to Pro
          </Button>
        </div>
        <div className="grid grid-cols-2 h-[600px] sm:gap-8 gap-5 py-5">
          <div className="bg-black text-white w-full flex flex-col justify-center items-center  rounded-lg p-5">
            <div className="bg-card h-20 w-20  text-white flex items-center justify-center text-2xl font-semibold rounded-full">
              {goals.length}
            </div>
            <p className="py-2 sm:text-lg font-semibold">Goals</p>
          </div>
          <div className="bg-black text-white w-full flex flex-col justify-center items-center  rounded-lg p-5">
            <div className="bg-white h-20 w-20 text-black flex items-center justify-center text-2xl font-semibold rounded-full">
            {todos.length}
            </div>
            <p className="py-2 sm:text-lg font-semibold">Tasks</p>
          </div>
          <div className="bg-black text-white w-full flex flex-col justify-center items-center  rounded-lg p-5">
            <div className="bg-white h-24 w-24 text-black flex items-center justify-center text-2xl font-semibold rounded-full">
            {goals.length + todos.length}

            </div>
            <p className="py-2 sm:text-lg font-semibold">Pending</p>
          </div>
          <div className="bg-black text-white w-full flex flex-col justify-center items-center  rounded-lg p-5">
            <div className="bg-background h-24 w-24 text-white flex items-center justify-center text-2xl font-semibold rounded-full">
            {completdTodo.length + completedGoals.length}
            </div>
            <p className="py-2 sm:text-lg font-semibold">Completed</p>
          </div>
        </div>
      </div>
      <div className="border-t">
        <Footer />
      </div>
    </main>
  );
};

export default Home;
