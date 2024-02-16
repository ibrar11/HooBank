"use client";

import React, { useState, useEffect } from "react";
import { Container, Divider, Slider } from "../index";

const FeedBackSection = () => {
  const [slideCount, setSlideCount] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlideCount(3);
      } else if (window.innerWidth >= 768) {
        setSlideCount(2);
      } else {
        setSlideCount(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <Divider py="py-5 sm:py-10" />
      <Container>
        <div className="relative flex flex-col gap-y-14 overflow-hidden">
          <div className="flex flex-col items-center gap-y-5 sm:flex-row sm:gap-x-5">
            <h2 className="text-3xl font-semibold leading-relaxed sm:w-1/2 md:text-4xl  md:leading-relaxed  lg:pr-40 xl:text-5xl xl:leading-relaxed">
              What people are saying about us
            </h2>
            <p className="text-base font-normal leading-normal text-white text-opacity-70 sm:w-1/2 sm:text-lg  lg:pr-32">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <Slider
            bulletClass="swiper-pagination-bullet"
            slideCount={slideCount}
            delayTime="3000"
          />
          <div className="from-dark-cerulean-blue to-turquoise blur-4xl absolute -right-1/3 bottom-0 h-[544px] w-[436px] rotate-45 rounded-[200px] bg-white bg-gradient-to-r"></div>
        </div>
      </Container>
      <Divider py="py-5 sm:py-10" />
    </section>
  );
};

export default FeedBackSection;
