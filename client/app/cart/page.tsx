/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrapper, CartItem } from "@/components";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [shippingCost, setShippingCost] = useState(100);
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const totalMRP = useMemo(() => {
    return cartItems.reduce(
      (total, val) => total + val.attributes.original_price,
      0
    );
  }, [cartItems]);

  const subTotal = useMemo(() => {
    return (
      cartItems.reduce((total, val) => total + val.attributes.price, 0) +
      shippingCost
    );
  }, [cartItems, shippingCost]);

  useEffect(() => {
    if (subTotal > 800) {
      setShippingCost(0);
    } else {
      setShippingCost(100);
    }
  }, [subTotal]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: cartItems,
        shippingCost: shippingCost,
      });
      await stripe?.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    data={item}
                    selectedSize={item.attributes.selectedSize}
                  />
                ))}
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold">Price Details</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <div className="text-md md:text-lg font-medium text-black">
                        Total MRP
                      </div>
                      <div className="text-md md:text-lg font-medium text-black">
                        &#8377;{totalMRP}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-md md:text-lg font-medium text-black">
                        Discount on MRP
                      </div>
                      <div className="text-md md:text-lg font-medium text-green-500">
                        -&#8377;{totalMRP - subTotal + shippingCost}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-md md:text-lg font-medium text-black">
                        Shipping Cost
                      </div>
                      <div className="text-md md:text-lg font-medium text-black">
                        {subTotal > 800 ? (
                          <span className="text-green-500">FREE</span>
                        ) : (
                          `₹${shippingCost}`
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-zinc-300 mt-3 pt-3 flex justify-between">
                    <div className="text-md md:text-lg font-semibold text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-semibold text-black">
                      &#8377;{subTotal}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-3">
                    The subtotal reflects the total price of your order, you
                    need to pay including duties and taxes.
                  </div>
                </div>
                <button
                  className="w-full py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-medium transition-transform mb-3 flex items-center gap-2 justify-center"
                  onClick={handlePayment}
                >
                  Checkout
                  {loading && <img src="/spinner.svg" alt="spinner" />}
                </button>
              </div>
            </div>
          </>
        )}
        {cartItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image src="/empty-cart.svg" alt="image" width={300} height={300} />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-medium transition-transform mb-3 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
