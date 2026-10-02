import Link from "next/link";
import Brand from "../Micro/Brand/Brand";

const Navbar = () => {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
      <Brand />
      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="px-3 py-2 text-sm text-mist transition-colors hover:text-paper"
        >
          Sign in
        </Link>
        <Link
          href="/signup"
          className="rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-ink"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
