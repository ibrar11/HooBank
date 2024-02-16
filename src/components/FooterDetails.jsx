import React from "react";
import Link from "next/link";

const FooterDetails = ({ title = "", list = [], textStyle = "" }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <p className="text-base font-medium leading-normal sm:text-lg">{title}</p>
      <div className="flex flex-col gap-y-2">
        {list.map((item, index) => {
          return (
            <Link
              href={"/"}
              key={index}
              className={`text-base font-medium leading-normal sm:text-lg ${textStyle}`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterDetails;
