import Hero from "@/components/HomePage/Hero";
import NewProducts from "@/components/HomePage/NewProducts";
import Testimonials from "@/components/HomePage/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
     <Hero/>
     <NewProducts/>
     <Testimonials/>
    </main>
  );
}
