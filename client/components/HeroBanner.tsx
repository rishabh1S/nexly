/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
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

const HeroBanner: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % subMenuData.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + subMenuData.length) % subMenuData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-300 to-violet-600 relative text-white w-full max-w-[1360px] mx-auto z-0 p-10">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-300 via-violet-600 -z-10" />
      <div className="text-white">
        <p className="text-xs md:text-sm">Small Text</p>
        <h3 className="text-3xl mt-2 md:text-4xl">Mid Heading</h3>
        <h1 className="text-5xl md:text-4xl xl:text-6xl mt-2 md:mt-4 xl:mt-6 uppercase font-semibold">
          Large Text
        </h1>
        <div className="absolute top-0 right-20 md:right-0 w-80 h-80 md:w-4/5 xl:w-2/3 md:h-4/5 xl:h-2/3">
          {subMenuData.map((item, index) => (
            <img
              key={item.id}
              src={item.imgSrc}
              alt={item.alt}
              className={`absolute top-10 md:top-0 left-0 transform translate-x-${
                index - activeSlide
              } ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link href={`/product/1`}>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-lg cursor-pointer transition duration-300">
              Shop Now
            </button>
          </Link>
          <div className="absolute right-10 bottom-5 w-64 flex flex-col items-end text-gray-200">
            <h5 className="mb-3 text-lg font-semibold text-right">
              Description
            </h5>
            <p className="text-gray-300 font-light text-right">Some text</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white bg-opacity-25 backdrop-blur-md z-0" />
    </div>
  );
};

export default HeroBanner;
