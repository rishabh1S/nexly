import React from "react";
import { MdSend } from "react-icons/md";

const NewsLetter = () => {
  return (
    // <div className="h-[50vh] font-bold bg-[#fcf5f5] flex flex-col items-center justify-center m-[10px]">
    //   <h1 className="text-[30px] md:text-[40px] font-semibold leading-tight">
    //     Newsletter
    //   </h1>
    //   <div className="text-md md:text-xl font-light mb-5 text-center">
    //     Get timely updates from your favorite products.
    //   </div>
    //   <div className="sm:w-1/2 w-9/12 h-10 bg-white flex justify-between border border-gray-400">
    //     <input
    //       type="text"
    //       placeholder="Your email"
    //       className="sm:w-[90%] w-[80%] border-none pl-5 focus:outline-none"
    //     />
    //     <button className="flex-1 bg-teal-600 hover:bg-teal-500 text-white border-none flex items-center justify-center">
    //       <MdSend size={28} />
    //     </button>
    //   </div>
    // </div>
    <div className="relative isolate overflow-hidden bg-[#fcf5f5] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="max-w-xl lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Subscribe to our newsletter.
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Get timely updates from your favorite products.
          </p>
          <div className="mt-6 flex max-w-md gap-x-1">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm sm:text-sm sm:leading-6 border-none focus:outline-none"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="px-3.5 py-2.5 rounded-md bg-violet-600 hover:bg-violet-500 text-white border-none flex items-center justify-center"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default NewsLetter;
