/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel: React.FC = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/p1.png" alt="image"></img>
        <img src="/p2.png" alt="image"></img>
        <img src="/p3.png" alt="image"></img>
        <img src="/p4.png" alt="image"></img>
        <img src="/p5.png" alt="image"></img>
        <img src="/p6.png" alt="image"></img>
        <img src="/p7.png" alt="image"></img>
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
