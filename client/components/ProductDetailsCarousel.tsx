/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface ProductCarouselProps {
  images: any;
}

const ProductDetailsCarousel: React.FC<ProductCarouselProps> = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map(
          (img: {
            id: React.Key | null | undefined;
            attributes: { url: string | undefined; name: string | undefined };
          }) => (
            <img
              key={img.id}
              src={img.attributes?.url}
              alt={img.attributes.name}
            />
          )
        )}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
