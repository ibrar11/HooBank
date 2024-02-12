import React from "react";

export default function Container({ children }) {
  return <div className={`max-w-container mx-auto px-5`}>{children}</div>;
}
