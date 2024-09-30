import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import Payment from "@/components/Payment";
import Overview from "@/components/Overview";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="font-palanquin">
      <Navigation />
      <Hero />
      <Features />
      <Payment />
      <Overview />
      <Testimonial />
      <Faq />
      <Footer />
    </main>
  );
}
