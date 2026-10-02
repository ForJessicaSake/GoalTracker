import Link from "next/link";

const pricingObject = [
  {
    plan: "Free",
    price: "0",
    description: "For one person and a long list.",
    number: "200",
    featured: false,
  },
  {
    plan: "Basic",
    price: "3",
    description: "For a shared practice with a small team.",
    number: "600",
    featured: true,
  },
  {
    plan: "Pro",
    price: "5",
    description: "For a team that needs the full record.",
    number: "1000+",
    featured: false,
  },
];

const features = (number: string) => [
  "Goals and tasks in one account",
  `Up to ${number} open items`,
  "A count of what is finished",
  "Notes on each piece of work",
  "Stored with your account",
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8"
    >
      <h2 className="text-3xl font-semibold tracking-tight">Pricing</h2>
      <p className="mt-3 max-w-lg text-mist">
        The list stays the same when you pay. You only get more room in it.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {pricingObject.map((plan) => (
          <article
            key={plan.plan}
            className={`flex flex-col rounded-2xl border p-6 ${
              plan.featured
                ? "border-accent bg-panel text-paper"
                : "border-white/10 bg-panel text-paper"
            }`}
          >
            <p className="text-sm font-medium text-accent">{plan.plan}</p>
            <p className="mt-4 text-4xl font-semibold tracking-tight">
              ${plan.price}
              <span className="text-base font-medium text-mist">/mo</span>
            </p>
            <p className="mt-3 text-sm text-mist">
              {plan.description}
            </p>
            <ul className="mt-8 flex-1 space-y-3 text-sm">
              {features(plan.number).map((item) => (
                <li key={item} className="border-t border-current/10 pt-3">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className={`mt-8 rounded-lg py-2.5 text-center text-sm font-semibold ${
                plan.featured
                  ? "bg-accent text-ink"
                  : "border border-white/15 text-paper"
              }`}
            >
              Choose {plan.plan}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
