import React from "react";
import { Container, Divider } from "@/components/index";

const PartnerLogosSection = () => {
  return (
    <section>
      <Divider py="py-5 sm:py-10" />
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-10 sm:justify-evenly">
          <img src="/svgs/airbnb.svg" alt="airbnb" />
          <img src="/svgs/binance.svg" alt="binance" />
          <img
            src="/svgs/coin-base.svg"
            alt="coin-base"
            className="self-start"
          />
          <img src="/svgs/drop-box.svg" alt="drop-box" />
        </div>
      </Container>
      <Divider py="py-5 sm:py-10" />
    </section>
  );
};

export default PartnerLogosSection;
