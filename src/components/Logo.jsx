import React from "react";

const Logo = ({ styles = "", iconStyles = "", titleStyles = "" }) => {
  return (
    <div className={`${styles}`}>
      <div className={`${iconStyles}`}>
        <img src="/svgs/hoo-bank.svg" alt="hoo-bank" />
      </div>
      <p className={`${titleStyles}`}>
        Hoo<span className="text-primary">Bank</span>
      </p>
    </div>
  );
};

export default Logo;
