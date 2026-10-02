import Link from "next/link";
import Brand from "../Micro/Brand/Brand";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mx-auto flex w-full max-w-6xl flex-col gap-6 border-t border-white/10 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8"
    >
      <div>
        <Brand />
        <p className="mt-3 text-sm text-mist">goaltracker@gmail.com</p>
      </div>
      <div className="flex items-center gap-4 text-sm text-mist">
        <Link href="/login" className="hover:text-paper">
          Sign in
        </Link>
        <Link href="/signup" className="hover:text-paper">
          Start free
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
