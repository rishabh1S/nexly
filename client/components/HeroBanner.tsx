/* eslint-disable @next/next/no-img-element */

"use client";
import React from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarouselItem } from "./types";

const subMenuData: CarouselItem[] = [
  {
    id: 1,
    imgSrc:
      "https://res.cloudinary.com/dnp36kqdc/image/upload/v1697549100/SupaBazaar%20E-commerce/slide-1.png",
    alt: "Carousel 1",
  },
  {
    id: 2,
    imgSrc:
      "https://res.cloudinary.com/dnp36kqdc/image/upload/v1697555697/SupaBazaar%20E-commerce/slide-2.png",
    alt: "Carousel 2",
  },
  {
    id: 3,
    imgSrc:
      "https://res.cloudinary.com/dnp36kqdc/image/upload/v1697549100/SupaBazaar%20E-commerce/slide-3.png",
    alt: "Carousel 3",
  },
];

const HeroBanner = () => {
  return (
    <div className="relative text-white bg-gradient-to-r from-purple-200 to-violet-600 text-[20px] w-full max-w-[1000px] mx-auto z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-200 via-violet-600 -z-10" />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        {subMenuData.map((item, index) => (
          <div key={item.id}>
            <img
              src={item.imgSrc}
              alt={item.alt}
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop now
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
