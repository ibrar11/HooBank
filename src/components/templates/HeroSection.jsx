import Link from "next/link";
import { Container, DiscountBar, RoundedButton } from "../index";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <div className="my-10 flex flex-col-reverse gap-y-10 sm:flex-row-reverse">
          <div className="w-calc-5 relative flex flex-col items-center justify-center sm:w-1/2">
            <img
              src="/svgs/hand-with-cards.svg"
              alt="hand-with-cards"
              className="w-auto"
            />
            <div className="absolute -top-0 left-0 z-30 ml-28 h-2/3 w-1/2 bg-gradient-to-b from-light-purple to-water-blue opacity-60 blur-3.5xl"></div>
            <div className="absolute -top-0 left-20 z-30 h-2/3 w-1/2 bg-white opacity-60 blur-4xl"></div>
            <div className="absolute -top-0 left-0 z-30 ml-28 h-2/3 w-1/2 bg-gradient-to-b from-light-purple to-water-blue opacity-60 blur-3.5xl"></div>
            <div className="absolute -top-0 left-20 z-30 h-2/3 w-1/2 bg-white opacity-60 blur-4xl"></div>
          </div>
          <div className="relative flex flex-col gap-y-5 sm:w-2/3 sm:justify-center lg:gap-y-8">
            <DiscountBar />
            <div className="relative flex flex-col gap-y-5">
              <h1 className="pr-28 text-3xl  font-semibold leading-snug  sm:pr-20 sm:text-4xl sm:leading-snug md:pr-28 md:text-5xl md:leading-snug lg:text-6xl lg:leading-snug">
                The Next{" "}
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  Generation
                </span>{" "}
                Payment Method.
              </h1>
              <RoundedButton />
              <div></div>
            </div>
            <p className="text-base font-normal leading-normal  text-white text-opacity-70 sm:text-lg md:pr-12 lg:max-w-[465px] lg:pr-0">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
            <div className="absolute  -left-16 top-9 z-30 h-80 w-48 rounded-half bg-gradient-to-t from-white to-dark-blue to-70% opacity-70 blur-4xl"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
