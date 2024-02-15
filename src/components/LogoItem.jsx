import React from "react";

const LogoItem = ({
  styles = "",
  iconStyles = "",
  titleStyles = "",
  svgPath = "",
  alt = "",
}) => {
  return (
    <div className={`${styles}`}>
      <div className={`${iconStyles}`}>
        <img src={svgPath} alt={alt} />
      </div>
      <p className={`${titleStyles}`}>
        Hoo<span className="text-primary">Bank</span>
      </p>
    </div>
  );
};

export default LogoItem;
