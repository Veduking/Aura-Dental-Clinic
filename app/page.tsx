import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import About from "@/components/About";
import Doctor from "@/components/Doctor";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Doctor />
        <Services />
        <Gallery />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
