import React from "react";
import { Container, Divider } from "../index";

const Endorsement = () => {
  return (
    <section>
      <Divider py="sm:py-10" />
      <Container>
        <div className="flex flex-wrap gap-x-10 gap-y-5 sm:justify-center lg:justify-between">
          <div className="flex items-center gap-x-1 sm:gap-x-5">
            <h3 className="text-xl font-semibold text-white  sm:text-2xl md:text-3xl xl:text-4xl">
              3800+
            </h3>
            <p className="bg-gradientText sm:text- bg-clip-text text-lg font-normal uppercase text-transparent sm:text-2xl">
              User Active
            </p>
          </div>
          <div className="flex items-center gap-x-1 sm:gap-x-5">
            <p className="hidden text-white text-opacity-60 sm:mr-5 sm:block">
              |
            </p>
            <h3 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl xl:text-4xl">
              230+
            </h3>
            <p className="bg-gradientText bg-clip-text text-lg font-normal uppercase text-transparent sm:text-xl">
              trusted by company
            </p>
          </div>
          <div className="flex items-center gap-x-1 sm:gap-x-5">
            <p className="hidden text-white text-opacity-60 sm:mr-5 sm:block">
              |
            </p>
            <h3 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl xl:text-4xl">
              $230M+
            </h3>
            <p className="bg-gradientText bg-clip-text text-lg font-normal uppercase text-transparent sm:text-xl">
              transcation
            </p>
          </div>
        </div>
      </Container>
      <Divider py="sm:py-10" />
    </section>
  );
};

export default Endorsement;