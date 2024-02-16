import React from "react";

const Button = ({ text = "", onClick = undefined }) => {
  return (
    <button
      onClick={onClick}
      className="from-light-cyan to-m-turquoise rounded-lg bg-gradient-to-br to-40% px-5 py-3 text-lg font-medium text-black hover:bg-gradient-to-tl"
    >
      {text}
    </button>
  );
};

export default Button;
