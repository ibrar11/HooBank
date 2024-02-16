import React from "react";

const FooterSocialLinks = ({ iconPath = "", alt = "" }) => {
  return (
    <div className="flex items-center  justify-center">
      <img src={iconPath} alt={alt} />
    </div>
  );
};

export default FooterSocialLinks;
