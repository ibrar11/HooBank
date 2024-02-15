import React from "react";

const Button = ({ text = "", onClick = undefined }) => {
  return (
    <button
      onClick={onClick}
      className="from-light-cyan to-m-turquoise rounded-lg bg-gradient-to-br px-5 py-3 text-lg font-medium hover:bg-gradient-to-tl"
    >
      {text}
    </button>
  );
};

export default Button;
