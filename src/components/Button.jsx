import React from "react";

const Button = ({ text = "" }) => {
  return (
    <button className="rounded-lg bg-gradient-to-br from-[#DEF9FA] to-[#33BBCF] px-5 py-3 text-lg font-medium focus:border-2 focus:border-solid focus:border-white focus:opacity-90">
      {text}
    </button>
  );
};

export default Button;
