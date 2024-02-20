import React from "react";
import Link from "next/link";
import { Product } from "@/utils/types";
import Image from "next/image";
import { getDiscountedPricePercentage } from "@/utils/helper";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const p = product.attributes;
  return (
    <Link
      href={`/product/${p.slug}`}
      passHref
      className="transform overflow-hidden duration-200 cursor-pointer flex flex-col justify-between items-center border bg-gray-100"
    >
      <Image
        width={300}
        height={300}
        src={p.thumbnail?.data.attributes.url}
        alt={p.name}
        className="w-72 h-96"
      />
      <div className="p-4 text-black/[0.9] border-t w-full bg-white">
        <h2 className="text-lg font-medium">{p.name}</h2>
        <div className="flex items-center text-black/[0.8]">
          <p className="mr-2 text-lg font-semibold">&#8377;{p.price}</p>
          {p.original_price && (
            <>
              <p className="text-base font-medium line-through">
                &#8377;{p.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(p.original_price, p.price)}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
