"use client";

import {
  HeroBanner,
  Categories,
  Wrapper,
  ProductCard,
  NewsLetter,
  Announcement,
  Loading,
} from "@/components";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "@/utils/api";
import { Product } from "@/utils/types";

export default function Home() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchDataFromApi("/api/products?populate=*");
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen">
      <Announcement />
      <HeroBanner />
      <Wrapper>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div className="text-center max-w-[800px] mx-auto my-10 md:my-14">
              <div className="text-[30px] md:text-[40px] mb-5 font-semibold leading-tight">
                Experience Exceptional Style and Unrivaled Quality
              </div>
              <div className="text-md md:text-xl">
                Explore our curated collection of premium fashion and
                accessories. From timeless classics to the latest trends, find
                the perfect pieces to elevate your style. Experience exceptional
                craftsmanship and unmatched quality with every purchase. Shop
                now for a wardrobe that speaks volumes.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
              {data.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </Wrapper>
      <Categories />
      <NewsLetter />
    </main>
  );
}
