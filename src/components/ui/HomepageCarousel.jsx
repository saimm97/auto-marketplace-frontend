"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "@/public/css/carousel.css";
import Image1 from "@/public/images/slider-pic-1.png";
import Image2 from "@/public/images/slider-pic-2.png";
import Image3 from "@/public/images/slider-pic-3.png";
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

export function HomepageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ loop: true, delay: 2000 }),
  ]);

  const [images] = useState([Image1, Image2, Image3]);

  return (
    <div className="embla mt-3" ref={emblaRef}>
      <div className="embla__container">
        {images.map((index) => (
          <div className="embla__slide" key={index}>
            <Card>
              <Image src={index} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
