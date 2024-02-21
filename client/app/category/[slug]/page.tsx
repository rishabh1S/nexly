"use client";
import React, { useEffect, useState } from "react";
import { Wrapper, ProductCard, Announcement, Loading } from "@/components";
import { Product } from "@/utils/types";
import { fetchDataFromApi } from "@/utils/api";
import { useParams } from "next/navigation";

const Category = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      fetchData(slug.toString());
    }
  }, [slug]);

  const fetchData = async (categorySlug: string) => {
    const { data } = await fetchDataFromApi("/api/products?populate=*");
    const filteredData = data.filter((product: Product) => {
      const categories = product.attributes.categories.data;
      return categories.some(
        (category: { attributes: { slug: string } }) =>
          category.attributes.slug === categorySlug
      );
    });
    setData(filteredData);
    setLoading(false);
  };

  return (
    <div className="w-full relative min-h-screen">
      <Announcement />
      <Wrapper className="md:py-16 py-4">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                {Array.isArray(slug)
                  ? slug[0].charAt(0).toUpperCase() + slug[0].slice(1)
                  : slug.charAt(0).toUpperCase() + slug.slice(1)}
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
    </div>
  );
};

export default Category;
