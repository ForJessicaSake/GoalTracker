import Link from "next/link";

const Brand = ({ href = "/" }: { href?: string }) => {
  return (
    <Link href={href} className="inline-flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm font-bold text-ink">
        G
      </span>
      <span className="text-base font-semibold tracking-tight text-paper">
        Goal Tracker
      </span>
    </Link>
  );
};

export default Brand;
