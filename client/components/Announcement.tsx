"use client";

import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="h-7 bg-teal-600 text-white flex items-center text-sm font-medium">
      <div className="flex-1 flex items-center justify-center text-center sm:text-sm text-[10px]">
        Super Deal! Free Shipping on Orders Over &#8377;800
      </div>
      <button onClick={handleClose} className="p-2 hover:text-gray-200">
        <MdClose size={20} />
      </button>
    </div>
  ) : null;
};

export default Announcement;
