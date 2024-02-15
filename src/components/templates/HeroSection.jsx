import { Container } from "../index";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <div className="my-10 flex flex-col-reverse gap-y-10 sm:flex-row-reverse">
          <div className="w-overflow-width relative flex flex-col items-center justify-center sm:w-1/2">
            <img
              src="/svgs/hand-with-cards.svg"
              alt="hand-with-cards"
              className="w-auto"
            />
            <div className="blur-3.5xl from-light-purple to-water-blue absolute -top-0 left-0 z-30 ml-28 h-2/3 w-1/2 bg-gradient-to-b opacity-60"></div>
            <div className="blur-4xl absolute -top-0 left-20 z-30 h-2/3 w-1/2 bg-white opacity-60"></div>
          </div>
          <div className="relative flex flex-col gap-y-5 sm:w-2/3 sm:justify-center lg:gap-y-8">
            <div className="bg-c-black flex items-center gap-x-2 rounded-lg px-3 md:w-max md:gap-x-1">
              <img
                src="/svgs/discount.svg"
                alt="discount"
                className="min-w-8"
              />
              <p className="text-base font-normal  text-opacity-60 sm:text-lg">
                <span className=" text-opacity-100">20% </span>
                DISCOUNT FOR <span className=" text-opacity-100">1 MONTH </span>
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
              <div className="from-m-turquoise to-light-cyan absolute -right-4 -top-0 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r p-0.5 sm:-right-0 sm:-top-4 md:right-20 md:top-0 lg:-top-0 lg:right-48">
                <div className="bg-secondary relative flex h-full w-full items-center justify-center rounded-full">
                  <p className="bg-gradientText ml-4 bg-clip-text text-base font-medium text-transparent sm:text-lg">
                    Get Started
                  </p>
                  <span className="absolute right-4 top-5">
                    <img src="/svgs/arrow-up.svg" alt="Arrow-Up" />
                  </span>
                </div>
              </div>
              <div></div>
            </div>
            <p className="text-base font-normal leading-normal  text-opacity-70 sm:text-lg md:pr-12 lg:pr-44 xl:pr-60">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
            <div className="rounded-half  blur-4xl to-dark-blue absolute -left-16 top-9 z-30 h-80 w-48 bg-gradient-to-t from-white to-70% opacity-70"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
