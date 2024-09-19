"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "@/public/css/carousel.css";
import Brand1 from "@/public/images/brands/audi-logo.jpg";
import Brand2 from "@/public/images/brands/bmw-logo.png";
import Brand3 from "@/public/images/brands/honda-logo.png";
import Brand4 from "@/public/images/brands/hyundai-logo.png";
import Brand5 from "@/public/images/brands/mercedes-logo.webp";
import Brand6 from "@/public/images/brands/nissan-logo.png";
import Brand7 from "@/public/images/brands/suzuki-logo.png";
import Brand8 from "@/public/images/brands/toyota-logo.png";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BrandsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ loop: true, delay: 2000 }),
  ]);

  const [images] = useState([
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
  ]);

  return (
    <div className="embla mt-8" ref={emblaRef}>
      <div className="embla__container">
        {images.map((index) => (
          <div className="embla__slide_1" key={index}>
            <Card className="w-[100%] h-64">
              <CardContent className='text-center mt-7'>
                <Image src={index} />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
