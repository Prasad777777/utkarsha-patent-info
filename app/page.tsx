import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PatentGrid from "@/components/patent/PatentGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <PatentGrid />
    </>
  );
}