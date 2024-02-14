import { Container } from "../index";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <div className="my-10 flex flex-col-reverse gap-y-10 sm:flex-row-reverse">
          <div className="w-overflow-width relative flex flex-col items-center justify-center sm:w-1/2">
            <img
              src="/images/hand-with-cards.svg"
              alt="hand-with-cards"
              className="w-auto"
            />
            <div className="blur-3.5xl from-light-purple to-water-blue absolute -top-12 left-0 -z-10 h-full w-full bg-gradient-to-b opacity-60"></div>
            <div className="blur-4xl absolute -top-20 left-20 -z-50 h-full w-1/2 bg-white opacity-60"></div>
          </div>
          <div className="flex flex-col gap-y-5 sm:w-1/2 sm:justify-center lg:gap-y-14">
            <div className="flex items-center gap-x-5">
              <img src="/images/icon-discount.svg" alt="icon-discount" />
              <p className="text-base font-normal text-white text-opacity-60 sm:text-lg">
                <span className="text-white text-opacity-100">20% </span>
                DISCOUNT FOR{" "}
                <span className="text-white text-opacity-100">1 MONTH </span>
                ACCOUNT
              </p>
            </div>
            <div className="relative flex flex-col gap-y-5">
              <h1 className="pr-32 text-3xl font-semibold text-white sm:pr-0 sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
                The Next{" "}
                <span className="bg-gradient-to-r from-[#33BBCF] to-[#DEF9FA] bg-clip-text text-transparent">
                  Generation
                </span>{" "}
                Payment Method.
              </h1>
              <div className="absolute -top-4 right-0 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-[#33BBCF] to-[#DEF9FA] p-1 sm:-right-0 sm:-top-4 md:-top-5 md:right-0 lg:-top-0 lg:right-16">
                <div className="bg-secondary relative flex h-full w-full items-center justify-center rounded-full">
                  <p className="ml-4 bg-gradient-to-r from-[#33BBCF] to-[#DEF9FA] bg-clip-text text-base font-medium text-transparent sm:text-lg">
                    Get Started
                  </p>
                  <span className="absolute right-4 top-5">
                    <img src="/images/Arrow-Up.svg" alt="Arrow-Up" />
                  </span>
                </div>
              </div>
              <div></div>
            </div>
            <p className="text-opacity-70sm:text-lg text-base font-normal leading-normal text-white lg:pr-20">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
