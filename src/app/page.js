// import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";
import {HomepageCarousel} from "@/components/ui/HomepageCarousel";
import './globals.css'
import { BrandsCarousel } from "@/components/ui/BrandsCarousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomepageCarousel/>

      <h2 className="text-5xl font-sans font-bold text-center mt-7"> Our Brands Collection </h2>

      <BrandsCarousel />
    </div>
  );
}
