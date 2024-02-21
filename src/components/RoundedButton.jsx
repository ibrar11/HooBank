import React from "react";

const RoundedButton = () => {
  return (
    <button className="absolute -right-4 -top-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-m-turquoise to-light-cyan p-0.5 sm:-right-0 sm:-top-4 sm:h-32 sm:w-32 md:right-4 md:top-0 lg:-top-0 lg:right-28 xl:right-40">
      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-secondary p-10">
        <p className="bg-gradient-text ml-2 bg-clip-text text-left text-base font-medium text-transparent sm:text-lg">
          Get Started
        </p>
        <span className="absolute right-5 top-6 sm:right-8 sm:top-[30%]">
          <img src="/svgs/arrow-up.svg" alt="Arrow-Up" />
        </span>
      </div>
    </button>
  );
};

export default RoundedButton;
