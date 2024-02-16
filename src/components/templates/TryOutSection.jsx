import React from "react";
import { Container, Divider, Button } from "../index";
import Link from "next/link";

const TryOutSection = () => {
  return (
    <section>
      <Divider py="py-5 sm:py-10" />
      <Container>
        <div className="from-dark-purple to-g-purple flex flex-col gap-y-10 rounded-lg bg-gradient-to-tr p-5 sm:flex-row sm:justify-between sm:p-10  md:p-14 lg:p-16 xl:p-20">
          <div className="flex flex-col  gap-y-5 sm:w-3/5">
            <h2 className="text-3xl font-semibold  md:text-4xl  xl:text-5xl">
              Let’s try our service now!
            </h2>
            <p className="text-base font-normal leading-normal text-white text-opacity-70 sm:text-lg xl:pr-40">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <Link href={"/"} className="flex items-center justify-end">
            <Button text="Get Started" />
          </Link>
        </div>
      </Container>
      <Divider py="py-5 sm:py-10" />
    </section>
  );
};

export default TryOutSection;
