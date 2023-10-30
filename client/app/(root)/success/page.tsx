import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="bg-white p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-[68px] h-[68px] mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Your order has been placed successfully.
            </h3>
            <p className="text-gray-600 my-2">Thanks for shopping with us!</p>
            <div className="text-base mt-5">
              For any product related query, drop an email to
            </div>
            <div className="underline">support@buynext.com</div>
            <div className="py-10 text-center">
              <Link
                href="/"
                className="py-4 px-8 rounded-full bg-violet-600 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Success;
