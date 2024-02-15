import React from "react";

const Feature = ({
  iconStyle = "",
  src = "",
  alt = "",
  textContainerStyle = "",
  textStyle = "",
  paragraphStyle = "",
  paragraph = "",
  text = "",
}) => {
  return (
    <div className="to-dark-purple flex items-center gap-x-4 from-white hover:rounded-lg hover:bg-gradient-to-br">
      <div className={`flex min-w-10 justify-center ${iconStyle}`}>
        <img src={src} alt={alt} />
      </div>
      <div className={` ${textContainerStyle}`}>
        <p className={`text-lg font-semibold ${textStyle}`}>{text}</p>
        <p
          className={`text-base font-normal text-opacity-70 ${paragraphStyle}`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Feature;
