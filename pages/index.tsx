import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";
import Testimonial from "../components/Testimonials/Testimonial";
import Cta from "../components/Cta/Cta";

const Home = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Header/>
        <Features/>
        <Testimonial/>
        <Cta/>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
