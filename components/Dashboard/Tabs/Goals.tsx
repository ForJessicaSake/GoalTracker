import React from "react";
import Footer from "../../Footer/Footer";

const Goals = () => {
  return (
    <main>
      <div className="px-5">
        <div className="flex justify-between">
          <div className="leading-7">
            <h1 className="text-4xl font-semibold">Hello User, </h1>
            <p className="pt-2">What are your goals for today? </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 h-96  py-7">
          <div className="bg-gray-100 w-full rounded-lg p-5">Goals</div>
          <div className="bg-gray-100 w-full rounded-lg p-5">Plans</div>
          <div className="bg-gray-100 w-full rounded-lg p-5">Achieved</div>
        </div>
      </div>
      <div className="border-t">
        <Footer />
      </div>
    </main>
  );
};

export default Goals;
