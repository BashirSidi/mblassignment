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
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main
      className="relative bg-white flex justify-center items-center
      flex-col overflow-clip mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <Navigation />
        <Hero />
        {/* <Grid />
        <RecentProject />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
}
