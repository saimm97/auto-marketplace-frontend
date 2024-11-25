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
import Brand9 from "@/public/images/brands/MGlogo2.png"
import Brand10 from "@/public/images/brands/kialogo2.png"

import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

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
    Brand9,
    Brand10
  ]);

  return (
    <div className="mt-8 items-center pr-8">
      <div class="grid gap-y-4 grid-cols-5 px-64 items-center">
        {images.map((index) => (
          <div>
            <Link href="*">
              <div>
                <Card className="w-[75%] h-70 ">
                  <CardContent className='text-center mt-7'>
                    <Image src={index} />
                    <Link href="*" > <b> Available (3)</b> </Link>
                  </CardContent>
                </Card>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
