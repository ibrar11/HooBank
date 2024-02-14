import React from "react";

const HamburgerIcon = ({ isNavOpened, setIsNavOpened }) => {
  return (
    <div
      className="flex h-5 w-6 cursor-pointer flex-col justify-between sm:hidden"
      onClick={() => setIsNavOpened(!isNavOpened)}
    >
      <div
        className={`h-1 ${
          isNavOpened ? "origin-[3px_6px] rotate-45" : ""
        } rounded-md bg-white transition-all duration-300`}
      ></div>
      <div
        className={`${
          isNavOpened ? "h-0 w-0 opacity-0" : "w-full"
        } h-1 rounded-md bg-white transition-all duration-300`}
      ></div>
      <div
        className={`h-1 ${
          isNavOpened ? "origin-[2px_-3px] -rotate-45" : ""
        } rounded-md bg-white transition-all duration-300`}
      ></div>
    </div>
  );
};

export default HamburgerIcon;
