import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Reviews = [
  {
    name: "Therasa George",
    role: "Teacher",
    deets:`ProgressPal is so easy to use I can't help but wonder if it's really going to track my goals, we'd see I guess.`,
  },
  {
    name: "Steven Ray",
    role: "software Engineer",
    deets:`ProgressPal offers a ton of features and it's really woth the buz. Tracking goals and making notes makes a huge difference in getting organized.`,
  },
  {
    name: "Steve Grey",
    role: "Engineer",
    deets:`I love ProgressPal, the UI is top much and the features it offers are so amazing especially cause it's free forever!`,
  },
  {
    name: "John Doe",
    role: "Student",
    deets:"The best part of progressPal is that I can make notes on my progress and reschedule it.",
  },
  {
    name: "Rachael Moses",
    role: "Doctor",
    deets:`There are so many things I had to do with other note applications that I just don't do with progressPal. Suspicious but I can't say I don't love it!`,
  },
  {
    name: "Peter Kye",
    role: "Receptionist",
    deets:`I am usually very disorgonized but since I started using progressPal, I've been nailing all my tasks on time!`,
  },
];

const Testimonial = () => {
  return (
    <main className="mx-auto container px-5 py-20 ">
      <div className="flex flex-col items-center text-center justify-center">
        <h1 className="sm:text-4xl text-3xl">Loved by People Worldwide.</h1>
        <p className="max-w-2xl py-3">
          Our software is so simple that people can't help but fall in love with
          it. Simplicity is easy when you know exaxtly what your end users want.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center pt-10">
        {Reviews.map((reviews, index) => (
          <div key={index} className="shadow-md p-5 rounded-lg">
            <p className="py-5">{reviews.deets}</p>
            <hr />
            <div className="flex justify-between items-center py-2">
              <div>
                <h4 className="font-semibold">{reviews.name}</h4>
                <p className="text-gray-500">{reviews.role}</p>
              </div>
              <FaUserAlt />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Testimonial;
