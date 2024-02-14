import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-white">This is features page</h1>
      <Link href={"/"} className="text-white">
        Go to home
      </Link>
    </div>
  );
};

export default Features;
