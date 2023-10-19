/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Wrapper } from "@/components";

const page = () => {
  return (
    <Wrapper>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 lg:pr-10">
              <h2 className="text-[30px] md:text-[40px] font-semibold text-gray-800 mb-8 text-center">
                About Our Journey
              </h2>
              <div className="text-gray-800 text-md md:text-lg leading-relaxed text-justify">
                <p className="mb-2">
                  Welcome to the future of online shopping. At BuyNext, we're on
                  a mission to redefine your e-commerce experience.
                </p>
                <p className="mb-2">
                  We believe that shopping should be more than just a
                  transaction; it should be an immersive journey. Our story
                  began with a simple idea: to create a space where you can
                  explore, discover, and experience products in a way that feels
                  personal, seamless, and effortless.
                </p>
                <p className="mb-2">
                  We envisioned an online marketplace that reflects the charm of
                  a physical store, where every click brings you closer to the
                  essence of the product.
                </p>
                <p className="mb-2">
                  Our user-centric approach is what sets us apart. We understand
                  that your time is precious, and your choices matter. That's
                  why we've designed our platform to be a destination where you
                  can find products that resonate with your tastes, values, and
                  lifestyle.
                </p>
                <p className="mb-2">
                  What drives us is the passion for aesthetics, innovation, and
                  quality. We have curated a collection of handpicked products
                  that are not just items you buy but stories you own.
                </p>
                <p className="mb-2">
                  Every item on our platform has been selected with utmost care,
                  ensuring that it adds value to your life.
                </p>
                <p className="mb-2">
                  We take pride in our commitment to sustainability. We believe
                  that responsible shopping is the need of the hour. That's why
                  you'll find eco-friendly options, ethically sourced products,
                  and a strong emphasis on reducing our carbon footprint
                  throughout our supply chain.
                </p>
                <p className="mb-2">
                  BuyNext is not just a shopping destination; it's a community.
                  We invite you to connect with us, share your thoughts, and be
                  a part of this exciting journey.
                </p>
                <p className="mb-2">
                  Our customer support team is here to assist you, and we value
                  your feedback, as it helps us grow and improve.
                </p>
                <p className="mb-2">
                  As we move forward, our dedication to innovation remains
                  unwavering. We will continue to explore new technologies,
                  refine your shopping experience, and bring you closer to the
                  brands and products you love.
                </p>
                <p className="mb-2">
                  Thank you for choosing BuyNext. We're thrilled to have you
                  with us on this e-commerce adventure. Together, let's redefine
                  the art of shopping and create a better future for consumers
                  and businesses alike.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex flex-col items-center justify-center gap-4 ">
              <img
                src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1697481095/SupaBazaar%20E-commerce/sale_h0faao.jpg"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://res.cloudinary.com/dnp36kqdc/image/upload/v1694810969/pexels-olena-bohovyk-3646172_kp9qwk.jpg"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default page;
