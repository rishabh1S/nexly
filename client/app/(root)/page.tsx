"use client";

import {
  HeroBanner,
  Categories,
  Wrapper,
  ProductCard,
  NewsLetter,
  Announcement,
} from "@/components";
import { useState, useEffect, useCallback } from "react";
import { Toaster } from "sonner";
import { fetchDataFromApi } from "@/utils/api";
import { checkAuthStatus } from "@/utils/supabase";
import { useRouter } from "next/navigation";

export default function Home() {
  const [data, setData] = useState(null);
  const router = useRouter();

  const checkStatus = useCallback(async () => {
    const user = await checkAuthStatus();
    if (!user) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    checkStatus();
    fetchProducts();
  }, [checkStatus]);

  const fetchProducts = async () => {
    const { data } = await fetchDataFromApi("/api/products");
    setData(data);
  };
  return (
    <main className="min-h-screen">
      <Toaster richColors position="top-center" closeButton />
      <Announcement />
      <HeroBanner />
      <h1>{data?.[0]?.attributes?.name}</h1>
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-10 md:my-14">
          <div className="text-[30px] md:text-[40px] mb-5 font-semibold leading-tight">
            Experience Exceptional Style and Unrivaled Quality
          </div>
          <div className="text-md md:text-xl">
            Explore our curated collection of premium fashion and accessories.
            From timeless classics to the latest trends, find the perfect pieces
            to elevate your style. Experience exceptional craftsmanship and
            unmatched quality with every purchase. Shop now for a wardrobe that
            speaks volumes.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
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
      <Categories />
      <NewsLetter />
    </main>
  );
}
