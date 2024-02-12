import React from "react";

const IconItem = ({
  styles = "",
  iconStyles = "",
  textStyles = "",
  src = "",
  alt = "",
  text = "",
}) => {
  return (
    <div className={`${styles}`}>
      <div className={`${iconStyles}`}>
        <img src={src} alt={alt} />
      </div>
      <p className={`${textStyles}`}>{text}</p>
    </div>
  );
};

export default IconItem;
