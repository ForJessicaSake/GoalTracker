import React from "react";
import Footer from "../../Footer/Footer";

const Todos = () => {
  return (
    <main>
      <div className="px-5">
        <h1 className="text-5xl font-semibold">Todos</h1>
        <p className="pt-2">What are your plans for today? </p>
        <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 h-96  py-7">
          <div className="bg-gray-100 w-full rounded-lg p-5">To do</div>
          <div className="bg-gray-100 w-full rounded-lg p-5">In progress </div>
          <div className="bg-gray-100 w-full rounded-lg p-5">Done</div>
        </div>
        <div className="border-t">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Todos;
