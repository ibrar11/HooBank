import React from "react";

const Button = ({ text = "", onClick = "" }) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg bg-gradient-to-br from-light-cyan via-[#7DE7EB] via-5% to-m-turquoise to-80% px-5 py-3 text-lg font-medium text-black hover:bg-gradient-to-tl sm:w-auto"
    >
      {text}
    </button>
  );
};

export default Button;
