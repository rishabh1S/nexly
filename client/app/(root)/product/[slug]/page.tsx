"use client";

import React, { useState, useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  Wrapper,
  ProductDetailsCarousel,
  RelatedProducts,
  Announcement,
} from "@/components";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { Toaster, toast } from "sonner";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Product } from "@/utils/types";

interface ProductApiResponse {
  data: Product[];
}

const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState<ProductApiResponse | null>(null);
  const [products, setProducts] = useState<ProductApiResponse | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>();
  const [showError, setShowError] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      fetchData(slug.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async (productSlug: string) => {
    const productData = await fetchDataFromApi(
      `/api/products?populate=*&filters[slug][$eq]=${productSlug}`
    );
    const otherProducts = await fetchDataFromApi(
      `/api/products?populate=*&[filters][slug][$ne]=${productSlug}`
    );

    setProduct(productData);
    setProducts(otherProducts);
  };

  if (!product || !products) {
    return (
      <div className="w-full md:py-20 relative min-h-screen">
        <Toaster richColors position="top-center" closeButton />
        <div className="text-2xl fixed inset-0 bg-white/[0.5] flex justify-center items-center gap-4">
          <div>
            <Image width={50} height={50} src="/carts.png" alt="logo" />
          </div>
          Loading ...
        </div>
      </div>
    );
  }

  const p = product?.data?.[0]?.attributes;
  return (
    <div className="w-full min-h-screen">
      <Announcement />
      <Wrapper className="md:py-16 py-4">
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p?.image?.data} />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p?.name}
            </div>
            <div className="text-lg font-semibold mb-5">{p?.subtitle}</div>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;{p?.price}
              </p>
              {p?.original_price && (
                <>
                  <p className="text-base  font-medium line-through">
                    &#8377;{p?.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage(p?.original_price, p?.price)}%
                    off
                  </p>
                </>
              )}
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {p?.size?.data?.map(
                  (item: { size: string; enabled: boolean }, i: number) => (
                    <div
                      key={i}
                      className={`border rounded-md text-center py-3 font-medium ${
                        item.enabled
                          ? "hover:border-black cursor-pointer"
                          : "cursor-not-allowed bg-black/[0.1] opacity-50"
                      } ${selectedSize === item.size ? "border-black" : ""}`}
                      onClick={() => {
                        setSelectedSize(item.size);
                        setShowError(false);
                      }}
                    >
                      {item.size}
                    </div>
                  )
                )}
              </div>

              {showError && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}
            </div>

            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  const sizesGridElement = document.getElementById("sizesGrid");
                  if (sizesGridElement) {
                    sizesGridElement.scrollIntoView({
                      block: "center",
                      behavior: "smooth",
                    });
                  }
                } else {
                  toast.success("Success. Check your cart!");
                }
              }}
            >
              Add to Cart
            </button>

            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5 text-justify">
                <ReactMarkdown>{p?.description}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts products={products.data} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
