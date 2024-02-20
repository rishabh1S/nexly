"use client";

import React from "react";
import Image from "next/image";

function Loading() {
  return (
    <div className="min-h-screen">
      <div className="text-2xl bg-white/20 backdrop-blur-sm fixed inset-0 flex justify-center items-center gap-4 z-40">
        <style jsx>{`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          .animate-spin {
            animation: spin 0.8s linear infinite;
          }
        `}</style>
        <div className="animate-spin">
          <Image width={50} height={50} src="/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
