import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "@/store/wishlistSlice";
import { MdClose } from "react-icons/md";
import { getDiscountedPricePercentage } from "@/utils/helper";
import Link from "next/link";
import { addToCart } from "@/store/cartSlice";
import { toast } from "react-hot-toast";

interface WishlistItemProps {
  data: any;
}

const WishlistItem: React.FC<WishlistItemProps> = ({ data }) => {
  const p = data.attributes;
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist(data.id));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-full">
        <button
          onClick={handleRemoveFromWishlist}
          className="absolute top-2 right-2 bg-zinc-200 rounded-full"
        >
          <MdClose size={22} />
        </button>
        <Link
          href={`/product/${data.slug}`}
          passHref
          className="flex flex-col justify-between border bg-gray-100"
        >
          <Image
            src={p.thumbnail}
            alt={data.name}
            width={256}
            height={320}
            className="w-64 h-80"
          />
          <div className="p-4 text-black/[0.9] border-t w-full bg-white">
            <h2 className="text-lg font-medium">{data.name}</h2>
            <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">&#8377;{p.price}</p>
              <p className="text-base font-medium line-through">
                &#8377;{p.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(p.original_price, p.price)}% off
              </p>
            </div>
          </div>
        </Link>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                id: data.id,
                slug: data.slug,
                name: data.name,
                subtitle: data.subtitle,
                quantity: 1,
                oneQuantityOriginalPrice: p.original_price,
                oneQuantityPrice: p.price,
                attributes: {
                  price: p.price,
                  original_price: p.original_price,
                  selectedSize: "",
                  thumbnail: p.thumbnail,
                  size: {
                    data: p.size.data,
                  },
                },
              })
            );
            dispatch(removeFromWishlist(data.id));
            toast.success("Success. Check your cart!");
          }}
          className="w-full py-3 text-violet-600 text-lg font-medium border border-t-0"
        >
          Move to Cart
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
