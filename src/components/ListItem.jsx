import React from "react";

const ListItem = ({ iconPath = "", alt = "", text = "", title = "" }) => {
  return (
    <div className="flex gap-x-3">
      <div className="max-h-12 max-w-12">
        <img src={iconPath} alt={alt} className="rounded-complete" />
      </div>
      <div>
        <p className="text-lg font-normal leading-normal sm:text-xl">{title}</p>
        <p className="text-base font-normal leading-normal text-white text-opacity-60 sm:text-lg">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ListItem;
