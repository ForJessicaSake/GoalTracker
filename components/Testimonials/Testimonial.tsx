const Reviews = [
  {
    name: "Therasa George",
    role: "Teacher",
    deets: "I write the goal down and leave it. Coming back to the same list is the part that helps.",
  },
  {
    name: "Steven Ray",
    role: "Software engineer",
    deets: "Goals and notes in one place. I stopped keeping a second list in another app.",
  },
  {
    name: "Steve Grey",
    role: "Engineer",
    deets: "I open it, update the work, and close it. That is the whole routine.",
  },
  {
    name: "John Doe",
    role: "Student",
    deets: "The useful part is the note next to the due date.",
  },
  {
    name: "Rachael Moses",
    role: "Doctor",
    deets: "Fewer steps than the tools I used before. The list is the product.",
  },
  {
    name: "Peter Kye",
    role: "Receptionist",
    deets: "The open work is still there on Monday.",
  },
];

const Testimonial = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8" id="testimonials">
      <h2 className="text-3xl font-semibold tracking-tight">What people use it for</h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Reviews.map((reviews) => (
          <li key={reviews.name} className="rounded-2xl border border-white/10 p-5">
            <p className="text-sm leading-relaxed text-paper">{reviews.deets}</p>
            <p className="mt-4 text-sm text-mist">
              {reviews.name}
              <span className="text-accent"> · {reviews.role}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonial;
