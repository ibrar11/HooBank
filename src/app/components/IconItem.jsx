import React from "react";

const IconItem = ({
  styles = "",
  iconStyles = "",
  textStyles = "",
  textStyles2 = "",
  src = "",
  alt = "",
  text1 = "",
  text2 = "",
}) => {
  return (
    <div className={`${styles}`}>
      <div className={`${iconStyles}`}>
        <img src={src} alt={alt} />
      </div>
      <p className={`${textStyles}`}>
        {text1}
        <span className={textStyles2}>{text2}</span>
      </p>
    </div>
  );
};

export default IconItem;
