import React from "react";
import { MdSend } from "react-icons/md";

const NewsLetter = () => {
  return (
    <div className="h-[50vh] font-bold bg-[#fcf5f5] flex flex-col items-center justify-center">
      <h1 className="text-[30px] md:text-[40px] font-semibold leading-tight">
        Newsletter
      </h1>
      <div className="text-md md:text-xl font-light mb-5 text-center">
        Get timely updates from your favorite products.
      </div>
      <div className="sm:w-1/2 w-9/12 h-10 bg-white flex justify-between border border-gray-400">
        <input
          type="text"
          placeholder="Your email"
          className="sm:w-[90%] w-[80%] border-none pl-5 focus:outline-none"
        />
        <button className="flex-1 bg-teal-600 hover:bg-teal-500 text-white border-none flex items-center justify-center">
          <MdSend size={28} />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
