import Link from "next/link";
import { Container } from "../index";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <div className="my-10 flex flex-col-reverse gap-y-10 sm:flex-row-reverse">
          <div className="relative flex w-overflow-width flex-col items-center justify-center sm:w-1/2">
            <img
              src="/svgs/hand-with-cards.svg"
              alt="hand-with-cards"
              className="w-auto"
            />
            <div className="absolute -top-0 left-0 z-30 ml-28 h-2/3 w-1/2 bg-gradient-to-b from-light-purple to-water-blue opacity-60 blur-3.5xl"></div>
            <div className="absolute -top-0 left-20 z-30 h-2/3 w-1/2 bg-white opacity-60 blur-4xl"></div>
          </div>
          <div className="relative flex flex-col gap-y-5 sm:w-2/3 sm:justify-center lg:gap-y-8">
            <div className="flex items-center gap-x-2 rounded-lg bg-c-black px-3 md:w-max md:gap-x-1">
              <img
                src="/svgs/discount.svg"
                alt="discount"
                className="min-w-8"
              />
              <p className="text-base font-normal  text-white text-opacity-60  sm:text-lg">
                <span className="text-white text-opacity-100">20%</span>
                DISCOUNT FOR{" "}
                <span className="text-white text-opacity-100">1 MONTH </span>
                ACCOUNT
              </p>
            </div>
            <div className="relative flex flex-col gap-y-5">
              <h1 className="pr-28 text-3xl  font-semibold leading-snug  sm:pr-20 sm:text-4xl sm:leading-snug md:pr-28 md:text-5xl md:leading-snug lg:text-6xl lg:leading-snug">
                The Next{" "}
                <span className="bg-gradientText bg-clip-text text-transparent">
                  Generation
                </span>{" "}
                Payment Method.
              </h1>
              <Link
                href={"/"}
                className="absolute -right-4 -top-0 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-m-turquoise to-light-cyan p-0.5 sm:-right-0 sm:-top-4 md:right-20 md:top-0 lg:-top-0 lg:right-48"
              >
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-secondary p-1">
                  <p className="ml-2 bg-gradientText bg-clip-text text-base font-medium text-transparent sm:text-lg">
                    Get Started
                  </p>
                  <span className="absolute right-4 top-5">
                    <img src="/svgs/arrow-up.svg" alt="Arrow-Up" />
                  </span>
                </div>
              </Link>
              <div></div>
            </div>
            <p className="text-base font-normal leading-normal  text-white text-opacity-70 sm:text-lg md:pr-12 lg:pr-44 xl:pr-60">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
            <div className="absolute  -left-16 top-9 h-80 w-48 rounded-half bg-gradient-to-t from-white to-dark-blue to-70% opacity-70 blur-4xl sm:z-30"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
