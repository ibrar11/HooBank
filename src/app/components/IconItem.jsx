import React from "react";

const IconItem = ({
  styles = "",
  iconStyles = "",
  titleStyles = "",
  titleStyles2 = "",
  src = "",
  alt = "",
  title_part1 = "",
  title_part2 = "",
}) => {
  return (
    <div className={`${styles}`}>
      <div className={`${iconStyles}`}>
        <img src={src} alt={alt} />
      </div>
      <p className={`${titleStyles}`}>
        {title_part1}
        <span className={titleStyles2}>{title_part2}</span>
      </p>
    </div>
  );
};

export default IconItem;
