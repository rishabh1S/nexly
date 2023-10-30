import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "@/store/wishlistSlice";
import { MdClose } from "react-icons/md";
import { getDiscountedPricePercentage } from "@/utils/helper";
import Link from "next/link";
import { addToCart } from "@/store/cartSlice";
import { Toaster, toast } from "sonner";

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
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-full">
        <button
          onClick={handleRemoveFromWishlist}
          className="absolute top-2 right-2 bg-gray-100 rounded-full"
        >
          <MdClose size={20} />
        </button>
        <Link
          href={`/product/${data.slug}`}
          passHref
          className="flex flex-col justify-between border bg-gray-100 h-full"
        >
          <Image src={p.thumbnail} alt={data.name} width={290} height={300} />
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
      </div>
      <button
        onClick={() => {
          dispatch(
            addToCart({
              id: data.id,
              slug: data.slug,
              name: data.name,
              subtitle: data.subtitle,
              quantity: 1,
              oneQuantityPrice: p.price,
              attributes: {
                price: p.price,
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
        className="w-full py-4 text-violet-600 text-lg font-medium border border-t-0"
      >
        Move to Cart
      </button>
    </div>
  );
};

export default WishlistItem;
