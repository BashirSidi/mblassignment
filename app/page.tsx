import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import Image from "next/image";
import RecentProject from "@/components/RecentProject";
import Experience from "@/components/Experience";
import { navItems } from "@/data";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Heroo from "@/components/Heroo";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import Payment from "@/components/Payment";
import Overview from "@/components/Overview";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Heroo />
      <Features />
      <Payment />
      <Overview />
      <Testimonial />
      <Faq />
      {/* <Hero /> */}
      {/* <Grid />
        <RecentProject />
        <Experience />
        <Approach />
        <Footer /> */}
    </main>
  );
}
