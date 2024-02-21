/* eslint-disable @next/next/no-img-element */

"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarouselItem } from "../utils/types";
import { useRouter } from "next/navigation";

const subMenuData: CarouselItem[] = [
  {
    id: 1,
    imgSrc:
      "https://res.cloudinary.com/dnp36kqdc/image/upload/v1708530555/SupaBazaar%20E-commerce/slide1.webp",
    alt: "Carousel 1",
  },
  {
    id: 2,
    imgSrc:
      "https://res.cloudinary.com/dnp36kqdc/image/upload/v1708530437/SupaBazaar%20E-commerce/slide2.webp",
    alt: "Carousel 2",
  },
  {
    id: 3,
    imgSrc:
      "https://res.cloudinary.com/dnp36kqdc/image/upload/v1708530438/SupaBazaar%20E-commerce/slide3.webp",
    alt: "Carousel 3",
  },
  {
    id: 4,
    imgSrc:
      "https://res.cloudinary.com/dnp36kqdc/image/upload/v1708530437/SupaBazaar%20E-commerce/slide4.webp",
    alt: "Carousel 4",
  },
  {
    id: 5,
    imgSrc:
      "https://res.cloudinary.com/dnp36kqdc/image/upload/v1708530438/SupaBazaar%20E-commerce/slide5.webp",
    alt: "Carousel 5",
  },
];

const renderCustomIndicator = (
  onClickHandler: React.MouseEventHandler<HTMLDivElement>,
  isSelected: boolean,
  index: React.Key
) => {
  return (
    <div
      key={index}
      onClick={onClickHandler}
      style={{
        background: isSelected ? "#7E808B" : "#DEDEE1",
        width: 7,
        height: 7,
        display: "inline-block",
        margin: "0 6px",
        cursor: "pointer",
        borderRadius: "50%",
      }}
    />
  );
};

const HeroBanner = () => {
  const router = useRouter();
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showArrows={false}
      showIndicators={true}
      showStatus={false}
      renderIndicator={renderCustomIndicator}
    >
      {subMenuData.map((item) => (
        <div
          key={item.id}
          onClick={() => router.push("/category/sale")}
          className="cursor-pointer sm:py-10 py-3"
        >
          <img src={item.imgSrc} alt={item.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default HeroBanner;
