import React from "react";
import { Container, Divider, Button } from "../index";

const CardDealsSection = () => {
  return (
    <section>
      <Divider py="py-5 sm:py-10" />
      <Container>
        <div className="flex flex-col gap-y-10 sm:flex-row sm:gap-x-10">
          <div className="flex flex-col gap-y-5 sm:w-1/2 sm:items-start sm:justify-center">
            <h2 className="text-3xl font-semibold leading-relaxed md:text-4xl md:leading-relaxed xl:text-5xl xl:leading-relaxed">
              Find a better card deal in few easy steps.
            </h2>
            <p className="max-w-[560px] text-base font-normal leading-normal text-white text-opacity-70 sm:text-lg">
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <Button text="Get Started" />
          </div>
          <div className="flex w-full items-center justify-center sm:w-1/2">
            <img src="/svgs/credit-analysis.svg" alt="credit-analysis" />
          </div>
        </div>
      </Container>
      <Divider py="py-5 sm:py-10" />
    </section>
  );
};

export default CardDealsSection;
