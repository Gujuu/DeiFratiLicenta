import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedDishes from "@/components/FeaturedDishes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main id="home" className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedDishes />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
