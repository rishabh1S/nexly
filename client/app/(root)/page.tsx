"use client";

import {
  HeroBanner,
  Categories,
  Wrapper,
  ProductCard,
  NewsLetter,
  Announcement,
} from "@/components";
import { useEffect, useCallback, useState } from "react";
import { Toaster } from "sonner";
import { fetchDataFromApi } from "@/utils/api";
import { checkAuthStatus } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { Product } from "@/utils/types";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkStatus();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkStatus = useCallback(async () => {
    const user = await checkAuthStatus();

    if (!user) {
      router.push("/login");
    }
  }, [router]);

  const fetchData = async () => {
    const { data } = await fetchDataFromApi("/api/products?populate=*");
    setData(data);
    setLoading(false);
  };

  return (
    <main className="min-h-screen">
      <Toaster richColors position="top-center" closeButton />
      <Announcement />
      <HeroBanner />
      <Wrapper className="min-h-screen">
        {loading ? (
          <div className="text-2xl w-full h-full bg-white/[0.5] flex justify-center items-center gap-6">
            <div>
              <Image width={50} height={50} src="/carts.png" alt="logo" />
            </div>
            Loading ...
          </div>
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
