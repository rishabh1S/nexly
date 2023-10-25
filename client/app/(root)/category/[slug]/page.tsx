"use client";
import React, { useEffect, useState } from "react";
import { Wrapper, ProductCard } from "@/components";
import { Product } from "@/utils/types";
import { fetchDataFromApi } from "@/utils/api";

const Category = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await fetchDataFromApi("/api/products?populate=*");
    setData(data);
  };
  return (
    <div className="w-full md:py-20 relative">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Men
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          {data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
