import React from "react";
import Link from "next/link";

const Solution = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-white">This is solution page</h1>
      <Link href={"/"} className="text-white">
        Go to home
      </Link>
    </div>
  );
};

export default Solution;
