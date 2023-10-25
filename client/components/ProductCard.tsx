import React from "react";
import Link from "next/link";
import { Product } from "@/utils/types";
import Image from "next/image";
import { getDiscountedPricePercentage } from "@/utils/helper";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      passHref
      className="transform overflow-hidden duration-200 hover:scale-105 cursor-pointer flex flex-col justify-between items-center border bg-gray-100"
    >
      <Image
        width={290}
        height={300}
        src={product.attributes.thumbnail?.data.attributes.url}
        alt={product.attributes.name}
      />
      <div className="p-4 text-black/[0.9] border-t w-full bg-white">
        <h2 className="text-lg font-medium">{product.attributes.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">
            &#8377;{product.attributes.price}
          </p>
          <p className="text-base font-medium line-through">
            &#8377;{product.attributes.original_price}
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            {getDiscountedPricePercentage(
              product.attributes.original_price,
              product.attributes.price
            )}
            % off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
