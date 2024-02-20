"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import WishlistItem from "@/components/WishlistItem";
import Link from "next/link";
import Image from "next/image";
import { Wrapper } from "@/components";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state: RootState) => state.wishlist);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {wishlistItems.length === 0 ? (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-wishlist.jpg"
              alt="image"
              width={300}
              height={300}
              className="w-[300px] md:w-[355px]"
            />
            <span className="text-xl font-bold">Your wishlist is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything to your wishlist.
              <br />
              Review them anytime and easily move them to the bag.
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-medium transition-transform mb-3 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-2 px-5 md:px-0">
            {wishlistItems.map((item) => (
              <WishlistItem key={item.id} data={item} />
            ))}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Wishlist;
