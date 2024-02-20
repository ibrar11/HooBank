import React from "react";

const Feature = ({
  iconStyle = "",
  iconPath = "",
  alt = "",
  textContainerStyle = "",
  textStyle = "",
  paragraphStyle = "",
  paragraph = "",
  text = "",
}) => {
  return (
    <div className="to-dark-purple from-g-purple flex items-center gap-x-4 rounded-lg p-5 hover:bg-gradient-to-br">
      <div
        className={`bg-gun-metal flex min-w-10 items-center justify-center rounded-full p-3 ${iconStyle}`}
      >
        <img src={iconPath} alt={alt} />
      </div>
      <div className={`${textContainerStyle}`}>
        <p className={`text-lg font-semibold ${textStyle}`}>{text}</p>
        <p
          className={`text-base font-normal text-white text-opacity-70 ${paragraphStyle}`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Feature;
