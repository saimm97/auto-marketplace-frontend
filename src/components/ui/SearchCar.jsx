"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BrandsCarousel } from "@/components/ui/BrandsCarousel";

export function SearchCar() {
  return (
    <div>
      <div className="border border-darkgrey-500 max-w-7xl justify-center ml-60 mr-60 mt-8"></div>
      <div className="flex flex-row justify-center mt-3 space-x-2.5 text-xl font-bold flex flex-row gap-8">
        <Link href="#" className="">
          Make
        </Link>
        <Link href="#">
          Body Type
        </Link>
        <Link href="#">
          Location
        </Link>
        <Link href="#">
          <div className="flex flex-row">
            View More
          </div>
        </Link>
      </div>
      <div className="border border-darkgrey-500 max-w-7xl justify-center ml-60 mr-60 mt-5"></div>
      <BrandsCarousel />
    </div>
  )
}