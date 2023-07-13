import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";
import Testimonial from "../components/Testimonials/Testimonial";
import Cta from "../components/Cta/Cta";
import Pricing from "../components/Pricing/Pricing";
import Head from "next/head";

const Home = () => {

  return (
    <div>
         <Head>
        <title>GoalTracker</title>
        <meta
          name="description"
          content="Goal Tracking made simple for you and your team"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <meta
          property="og:url"
          content=""
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GoalTracker" />
        <meta
          property="og:description"
          content="Goal Tracking made simple for you and your team"
        />
        <meta
          property="og:image"
          content="https://goaltracker.brimble.app/assets/SEO.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://goaltracker.brimble.app/assets/SEO.png" />
        <meta
          property="twitter:url"
          content="https://goaltracker.brimble.app/"
        />
        <meta name="twitter:title" content="GoalTracker" />
        <meta
          name="twitter:description"
          content="Goal Tracking made simple for you and your team"
        />
        <meta
          name="twitter:image"
          content="https://goaltracker.brimble.app/assets/SEO.png"
        />
      </Head>
      <main className="overflow-x-hidden">
        <Navbar />
        <Header/>
        <Features/>
        <Testimonial/>
        <Cta/>
        <Pricing/>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
