import React from "react";
import Footer from "../../Footer/Footer";
import { Card, BarChart } from "@tremor/react";
import useFetch from "../../Hooks/fetch/useFetch";

const Statistics = () => {
  const goals = useFetch("goals");
  const completedGoals = useFetch("completedGoals");
  const todos = useFetch("todos");
  const completedTodos = useFetch("completedTodos");

  const chartdata = [
    {
      name: "Goals",
      "Number of registered Tasks": goals.length,
    },
    {
      name: "Tasks",
      "Number of registered Tasks": todos.length,
    },
    {
      name: "Completed Goals",
      "Number of registered Tasks": completedGoals.length,
    },
    {
      name: "Completed Tasks",
      "Number of registered Tasks": completedTodos.length,
    },
  ];

  const dataFormatter = (number: number) => {
    return Intl.NumberFormat("us").format(number).toString();
  };
  return (
    <main className="px-5 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">What has moved.</h1>
      <p className="mt-4 max-w-lg text-mist">
        Open work against what you have already closed.
      </p>
      <section className="mt-12">
        <Card className="bg-panel ring-white/10">
          <BarChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={["Number of registered Tasks"]}
            colors={["emerald"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </Card>
      </section>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  );
};

export default Statistics;
