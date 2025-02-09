import { updateCart, removeFromCart } from "@/store/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

interface CartItemProps {
  data: any;
  selectedSize: string;
}

const CartItem: React.FC<CartItemProps> = ({ data, selectedSize }) => {
  const p = data.attributes;

  const dispatch = useDispatch();

  const updateCartItem = (
    e: React.ChangeEvent<HTMLSelectElement>,
    key: string
  ) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <Link
        href={`/product/${data.slug}`}
        passHref
        className="shrink-0 aspect-square w-[50px] md:w-[120px]"
      >
        <Image src={p.thumbnail} alt={data.name} width={120} height={120} />
      </Link>
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {data.name}
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {data.subtitle}
          </div>
          <div className="flex gap-2">
            <p className="text-sm md:text-md font-bold text-black/[0.9] mt-2">
              &#8377;{p?.price}
            </p>
            <p className="text-sm md:text-md font-bold text-black/[0.5] line-through mt-2">
              MRP: &#8377;{p?.original_price}
            </p>
          </div>
        </div>
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {data.subtitle}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                {p.size.data.map(
                  (item: { size: string; enabled: boolean }, i: number) => {
                    return (
                      <option
                        key={i}
                        value={item.size}
                        disabled={!item.enabled ? true : false}
                        selected={selectedSize === item.size}
                      >
                        {item.size}
                      </option>
                    );
                  }
                )}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
