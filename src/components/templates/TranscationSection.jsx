import React from "react";
import { Container, Divider } from "../index";

const TranscationSection = () => {
  return (
    <section>
      <Divider py="py-5 sm:py-10" />
      <Container>
        <div className="flex flex-col gap-y-10 sm:flex-row-reverse sm:gap-x-10">
          <div className="flex flex-col gap-y-5 sm:w-1/2 sm:justify-center">
            <h2 className="text-3xl font-semibold leading-relaxed  md:text-4xl md:leading-relaxed xl:text-5xl xl:leading-relaxed">
              Easily control your billing & invoicing.
            </h2>
            <p className="max-w-[403px] text-base font-normal leading-normal text-white text-opacity-70  sm:text-lg">
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-4">
              <img src="/svgs/apple.svg" alt="apple" />
              <img src="/svgs/google-play-store.svg" alt="google-play-store" />
            </div>
          </div>
          <div className="relative flex w-full items-center justify-center sm:w-1/2">
            <img src="/svgs/invoice.svg" alt="invoice" className="w-auto" />
            <div className="blur-4xl to-light-purple absolute -left-[90%] bottom-1/3 h-[470px] w-[405px] rounded-full bg-gradient-to-r from-white opacity-60"></div>
          </div>
        </div>
      </Container>
      <Divider py="py-5 sm:py-10" />
    </section>
  );
};

export default TranscationSection;
