import React from "react";
import Button from "../Micro/Button/Button";

const Cta = () => {
  return (
    <main className="px-5 mx-auto container bg-background text-gray-100 py-20">
      <div className="flex flex-col items-center text-center justify-center ">
        <h1 className="text-3xl font-semibold">Get started today</h1>
        <p className="max-w-lg py-5 text-sm">
          It is time to take charge of your goals. Sign up with progressPal
          today and let us help you make the most of what you do while also
          getting things done quickly.
        </p>
        <Button className="bg-white text-black rounded-full p-2 w-44 h-14">
          Free Forever
        </Button>
      </div>
    </main>
  );
};

export default Cta;
