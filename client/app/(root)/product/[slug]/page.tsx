"use client";

import React, { useState, useEffect } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import {
  Wrapper,
  ProductDetailsCarousel,
  RelatedProducts,
  Loading,
} from "@/components";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { toast } from "react-hot-toast";
import { useParams } from "next/navigation";
import { Product } from "@/utils/types";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { addToWishlist } from "@/store/wishlistSlice";

interface ProductApiResponse {
  data: Product[];
}

const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState<ProductApiResponse | null>(null);
  const [products, setProducts] = useState<ProductApiResponse | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>();
  const [wishlistClicked, setWishlistClicked] = useState(false);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
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

    if (slug) {
      fetchData(slug.toString());
    }
  }, [slug]);

  if (!product || !products) {
    return <Loading />;
  }

  const p = product?.data?.[0]?.attributes;
  return (
    <div className="w-full min-h-screen">
      <Wrapper className="md:py-16 py-4">
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p?.image?.data} />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-1 leading-tight">
              {p?.name}
            </div>
            <div className="text-xl text-black/[0.5] font-medium pb-1.5">
              {p?.subtitle}
            </div>
            <div className="my-2 flex items-center">
              <p className="mr-2 text-2xl font-bold">&#8377;{p?.price}</p>
              {p?.original_price && (
                <>
                  <p className="text-xl text-black/[0.6] font-medium line-through">
                    MRP &#8377;{p?.original_price}
                  </p>
                  <p className="ml-auto text-xl font-semibold text-green-500">
                    {getDiscountedPricePercentage(p?.original_price, p?.price)}%
                    off
                  </p>
                </>
              )}
            </div>
            <div className="text-sm font-bold text-indigo-500 mb-20">
              inclusive of all taxes
            </div>

            <div className="mb-10">
              {p?.size && (
                <>
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
                              ? selectedSize === item.size
                                ? "border-indigo-500 text-indigo-500"
                                : "hover:border-indigo-500 cursor-pointer"
                              : "cursor-not-allowed bg-black/[0.1] opacity-50"
                          }`}
                          onClick={() => {
                            if (item.enabled) {
                              setSelectedSize(item.size);
                              setShowError(false);
                            } else {
                              setShowError(true);
                            }
                          }}
                        >
                          {item.size}
                        </div>
                      )
                    )}
                  </div>
                </>
              )}
              {showError && (
                <div className="text-red-600 mt-1">
                  {selectedSize
                    ? "This size is not available"
                    : "Size selection is required"}
                </div>
              )}
            </div>
            <button
              className="w-full py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-medium transition-transform mb-3"
              onClick={() => {
                if (selectedSize) {
                  dispatch(
                    addToCart({
                      id: product?.data?.[0].id,
                      slug: product?.data?.[0].attributes.slug,
                      name: product?.data?.[0].attributes.name,
                      subtitle: product?.data?.[0].attributes.subtitle,
                      quantity: 1,
                      oneQuantityOriginalPrice: p.original_price,
                      oneQuantityPrice: p.price,
                      attributes: {
                        price: p.price,
                        original_price: p.original_price,
                        selectedSize: selectedSize,
                        thumbnail: p.thumbnail?.data.attributes.url,
                        size: {
                          data: p.size.data,
                        },
                      },
                    })
                  );
                  toast.success("Success. Check your cart!");
                } else {
                  setShowError(true);
                }
              }}
            >
              Add to Cart
            </button>
            <button
              className={`w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10 ${
                wishlistClicked ? "bg-[#535766] text-white" : "bg-white"
              }`}
              onClick={() => {
                dispatch(
                  addToWishlist({
                    id: product?.data?.[0].id,
                    slug: product?.data?.[0].attributes.slug,
                    name: product?.data?.[0].attributes.name,
                    subtitle: product?.data?.[0].attributes.subtitle,
                    attributes: {
                      price: p.price,
                      original_price: p.original_price,
                      thumbnail: p.thumbnail?.data.attributes.url,
                      size: {
                        data: p.size.data,
                      },
                    },
                  })
                );
                toast.success("Success. Check your wishlist!");
                setWishlistClicked(true);
              }}
            >
              Wishlist
              {wishlistClicked ? (
                <IoMdHeart size={20} color="red" />
              ) : (
                <IoMdHeartEmpty size={20} />
              )}
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
