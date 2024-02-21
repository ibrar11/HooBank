import React from "react";

const DiscountBar = () => {
  return (
    <div className="flex items-center gap-x-2 rounded-lg bg-c-black px-3 md:w-max md:gap-x-1">
      <img src="/svgs/discount.svg" alt="discount" className="min-w-8" />
      <p className="text-base font-normal  text-white text-opacity-60  sm:text-lg">
        <span className="text-white text-opacity-100">20%</span>
        DISCOUNT FOR{" "}
        <span className="text-white text-opacity-100">1 MONTH </span>
        ACCOUNT
      </p>
    </div>
  );
};

export default DiscountBar;
