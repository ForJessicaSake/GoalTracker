import Image from "next/image";
import React from "react";
import {BsCheck2All} from "react-icons/bs"

const featureArray = [
  {
    name: "Goals",
    deets:
      "All your goals organized in one place as long as your don't mind typing it by hand, we got you!",
  },
  {
    name: "Journal",
    deets:
      "Keep track of everything you'd like to make notes of in one place by using goalTracker",
  },
  {
    name: "Reporting",
    deets:
      "Easily report the progress of your goals and do whatever you want with it!",
  },
  {
    name: "Security",
    deets:
      "You get to store all your goals and important information digitally in a cloud-based storage system.",
  },
];

const Features = () => {
  return (
    <div className="bg-background px-5 py-4 mx-auto container">
      <div className="text-gray-100 lg:py-16 py-6 flex flex-col items-center justify-end text-center">
        <h1 className="sm:text-4xl text-2xl font-semibold">
          Everything your team needs to track goals.
        </h1>
        <p className="text-gray-200 font-light py-2">
          Well everything you need if you can stay consistent and keep the
          momentum going.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col-reverse justify-center text-gray-100">
        <div>
          {featureArray.map((feature) => (
            <div key={feature.name} className="max-w-md py-3">
              <div className="bg-card p-5 rounded-lg">
                <h3 className="font-semibold text-xl flex items-center">{feature.name} <span className="text-green-400 pl-2 text-xl"><BsCheck2All/></span></h3>
                <p className="text-sm py-2 font-light">{feature.deets}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-10">
          <Image src="/assets/people.png" alt="logo" width={600} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Features;
