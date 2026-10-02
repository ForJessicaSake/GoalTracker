import React from "react";
import Footer from "../../Footer/Footer";
import { onSuccess, onClose, config } from "../../Paystack/Paystack";
import { usePaystackPayment } from "react-paystack";
import useFetch from "../../Hooks/fetch/useFetch";

const Home = () => {
  const goals = useFetch("goals");
  const completedGoals = useFetch("completedGoals");
  const todos = useFetch("todos");
  const completdTodo = useFetch("completdTodo");
  const initializePayment = usePaystackPayment(config);

  const figures = [
    { label: "Goals", value: goals.length },
    { label: "Tasks", value: todos.length },
    { label: "Pending", value: goals.length + todos.length },
    {
      label: "Completed",
      value: completdTodo.length + completedGoals.length,
    },
  ];

  return (
    <main>
      <div className="px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              The list is still here.
            </h1>
            <p className="mt-4 max-w-lg text-mist">
              Write it down, keep the date, and come back. The count below is
              the whole status.
            </p>
          </div>
          <button
            type="button"
            className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink"
            onClick={() => initializePayment(onSuccess, onClose)}
          >
            Upgrade to Pro
          </button>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {figures.map((figure) => (
            <div
              key={figure.label}
              className="rounded-2xl border border-white/10 bg-panel p-5"
            >
              <p className="text-4xl font-semibold tracking-tight text-accent">
                {figure.value}
              </p>
              <p className="mt-2 text-sm text-mist">{figure.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </main>
  );
};

export default Home;
