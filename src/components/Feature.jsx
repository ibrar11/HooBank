import React from "react";

const Feature = ({
  icon_style = "",
  src = "",
  alt = "",
  text_container_style = "",
  text_style = "",
  paragraph_style = "",
  paragraph = "",
  text = "",
}) => {
  return (
    <div className="flex items-center gap-x-4 from-[#FFFFFF] to-[#14101D] hover:rounded-lg hover:bg-gradient-to-br">
      <div className={`flex min-w-10 justify-center ${icon_style}`}>
        <img src={src} alt={alt} />
      </div>
      <div className={`text-white ${text_container_style}`}>
        <p className={`text-lg font-semibold ${text_style}`}>{text}</p>
        <p
          className={`text-base font-normal text-opacity-70 ${paragraph_style}`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Feature;
