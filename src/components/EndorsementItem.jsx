import React from "react";

const EndorsementItem = ({ count = "", text = "", slashStyle = "" }) => {
  return (
    <div className="flex items-center gap-x-1 sm:gap-x-5">
      <p className={`hidden  text-opacity-60 sm:mr-5 sm:${slashStyle} xl:mt-2`}>
        |
      </p>
      <h3 className="text-xl font-semibold  sm:text-2xl md:text-3xl xl:text-4xl">
        {count}
      </h3>
      <p className="bg-gradient-text bg-clip-text text-lg font-normal uppercase text-transparent sm:text-xl">
        {text}
      </p>
    </div>
  );
};

export default EndorsementItem;
