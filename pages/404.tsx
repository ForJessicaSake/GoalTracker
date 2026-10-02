import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Notfound = () => {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <Navbar />
      <section className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col justify-center px-6 sm:px-8">
        <h1 className="text-6xl font-semibold tracking-tight">404</h1>
        <p className="mt-4 max-w-md text-mist">This page is not on the list.</p>
        <Link
          href="/"
          className="mt-8 inline-flex w-fit rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink"
        >
          Go home
        </Link>
      </section>
      <Footer />
    </main>
  );
};

export default Notfound;
