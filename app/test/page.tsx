"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Custom404: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure that dynamic styles or transforms are only applied on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#00] text-white relative">
      <div className="cloak__wrapper absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
        <div className="cloak__container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="cloak"></div>
        </div>
      </div>

      <div className="info text-center max-w-xl">
        <h1 className="font-bold text-[clamp(5rem,40vmin,20rem)] text-transparent bg-gradient-to-r from-[#a3b000] to-[#6e7b00] bg-clip-text">
          404
        </h1>
        <h2 className="text-2xl font-light">We can't find that page</h2>
        <p className="font-light my-3">
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on its behalf.
        </p>
        {/* Render the link only after the component has mounted */}
        {isMounted && <Link href="/">Home</Link>}
      </div>
    </div>
  );
};

export default Custom404;
