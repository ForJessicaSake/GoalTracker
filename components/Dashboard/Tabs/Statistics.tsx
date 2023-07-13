import Image from "next/image";
import React from "react";
import Footer from "../../Footer/Footer";
import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import useFetch from "../../Hooks/fetch/useFetch";

const Statistics = () => {
  const goals = useFetch("goals");
  const completedGoals = useFetch("completedGoals");
  const todos = useFetch("todos");
  const completedTodos = useFetch("completdTodo");
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
    <main className="sm:px-5 px-3 ">
      <h1 className="text-xl sm:text-4xl font-semibold">
      Welcome back,
      </h1>
      <p className="py-2">Check your goal status and more...</p>
      <section className="justify-center items-center sm:px-5 px-3 flex-col text-center">
        <Card className="overflow-x-scroll">
          <BarChart
            className="mt-6"
            data={chartdata}
            index="name"
            categories={["Number of registered Tasks"]}
            colors={["gray"]}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
          />
        </Card>
      </section>
  
      <div className="border-t">
        <Footer />
      </div>
    </main>
  );
};

export default Statistics;
