/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Categories: React.FC = () => {
  return (
    <div className="flex h-[80vh] gap-[10px] m-[10px]">
      <div className="flex-1 flex flex-col gap-[10px]">
        <div className="flex-1 flex gap-[10px] relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1697481095/SupaBazaar%20E-commerce/sale_h0faao.jpg"
            alt=""
          />
          <button className="cat-button">
            <Link className="link" href="/Products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="flex-1 flex gap-[10px] relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1697480779/SupaBazaar%20E-commerce/accessories_tieqwd.jpg"
            alt=""
          />
          <button className="cat-button">
            <Link href="/Products/1" className="link">
              Accessories
            </Link>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-[10px]">
        <div className="flex-1 flex gap-[10px] relative overflow-hidden">
          {" "}
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="cat-button">
            <Link href="/Products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-[10px] flex-2">
        <div className="flex-1 flex gap-[10px] relative overflow-hidden">
          <div className="flex-1 flex flex-col gap-[10px]">
            <div className="flex-1 flex gap-[10px] relative overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1697480780/SupaBazaar%20E-commerce/men-fashion_ojt0lm.jpg"
                alt=""
              />
              <button className="cat-button">
                <Link href="/Products/1" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[10px]">
            <div className="flex-1 flex gap-[10px] relative overflow-hidden">
              {" "}
              <img
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1697480781/SupaBazaar%20E-commerce/women-fashion_yqmqsg.jpg"
                alt=""
              />
              <button className="cat-button">
                <Link href="/Products/1" className="link">
                  Women
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-[10px] relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1697480782/SupaBazaar%20E-commerce/shoes_cywlsv.jpg"
            alt=""
          />
          <button className="cat-button">
            <Link href="/Products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
