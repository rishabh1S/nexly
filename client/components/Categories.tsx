import Link from "next/link";
import React from "react";
import Image from "next/image";

const Categories: React.FC = () => {
  return (
    <>
      <div className="text-center max-w-[800px] mx-auto my-10 md:my-14">
        <div className="text-[30px] md:text-[40px] mb-5 font-semibold leading-tight">
          Discover the Finest Collection
        </div>
        <div className="text-md md:text-xl">
          Explore our extensive range of categories and discover products that
          are thoughtfully selected to elevate your wardrobe, lifestyle, and
          more. Whether you're seeking the latest fashion trends,
          high-performance gear, or everyday essentials, we've got you covered.
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:h-[80vh] h-full gap-[10px] m-[10px]">
        <div className="flex-1 flex flex-col gap-[10px]">
          <div className="flex-1 flex gap-[10px] overflow-hidden relative">
            <Image
              width={800}
              height={800}
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1697481095/SupaBazaar%20E-commerce/sale_h0faao.jpg"
              alt="sale"
            />
            <button className="cat-button">
              <Link className="link" href="/category/sale">
                Sale
              </Link>
            </button>
          </div>
          <div className="flex-1 flex gap-[10px] overflow-hidden relative">
            <Image
              width={800}
              height={800}
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1708440183/SupaBazaar%20E-commerce/workplace-business-modern-male-accessories-laptop-black-background_wnu02d.jpg"
              alt="electronics"
            />
            <button className="cat-button">
              <Link href="/category/electronics" className="link">
                Electronics
              </Link>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[10px]">
          <div className="flex-1 flex gap-[10px] overflow-hidden relative">
            <Image
              width={800}
              height={800}
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1708440183/SupaBazaar%20E-commerce/pexels-vika-glitter-1620760_stk9mm.jpg"
              alt="kids"
            />
            <button className="cat-button">
              <Link href="/category/kids" className="link cat-button">
                Kids
              </Link>
            </button>
          </div>
        </div>
        <div className="flex-2 flex flex-col gap-[10px]">
          <div className="flex-1 flex gap-[10px] overflow-hidden">
            <div className="flex-1 flex flex-col gap-[10px]">
              <div className="flex-1 flex gap-[10px] overflow-hidden relative">
                <Image
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1697480780/SupaBazaar%20E-commerce/men-fashion_ojt0lm.jpg"
                  alt="men"
                />
                <button className="cat-button">
                  <Link href="/category/men" className="link">
                    Men
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[10px]">
              <div className="flex-1 flex gap-[10px] overflow-hidden relative">
                <Image
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1697480781/SupaBazaar%20E-commerce/women-fashion_yqmqsg.jpg"
                  alt="women"
                />
                <button className="cat-button">
                  <Link href="/category/women" className="link">
                    Women
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex gap-[10px] overflow-hidden relative">
            <Image
              width={800}
              height={800}
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1708440549/SupaBazaar%20E-commerce/lotus-design-n-print-0sDzRgrN_pI-unsplash_euh13t.jpg"
              alt="home and living"
            />
            <button className="cat-button">
              <Link href="/category/homeAndLiving" className="link">
                Home & Living
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
