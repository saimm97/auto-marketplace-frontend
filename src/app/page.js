import { Navbar } from "@/components/ui/navbar";
import { HomepageCarousel } from "@/components/ui/HomepageCarousel";
import './globals.css'
import { SearchCar } from "@/components/ui/SearchCar";


export default function Home() {
  return (
    <div>
      <div className="backgroundImage">
        <Navbar />
        <p className="logo-line">The Largest Car Marketplace</p>
      </div>
      <h2 className="text-5xl font-serif font-bold text-center mt-20"> Search Your Dream Car </h2>
      <p className="text-center"> There are 30+ Categories</p>
      <SearchCar />
    </div>
  );
}
