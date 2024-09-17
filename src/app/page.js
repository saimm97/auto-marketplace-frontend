// import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";
import {HomepageCarousel} from "@/components/ui/HomepageCarousel";
import './globals.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomepageCarousel/>
    </div>
  );
}
