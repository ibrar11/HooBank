import React from "react";
import { Container, Divider, Feature, Button } from "../index";
import { benefitList } from "@/data/benefitsData";
import Link from "next/link";

const BenefitsSection = () => {
  return (
    <section>
      <Divider py="py-5 sm:py-10" />
      <Container>
        <div className="flex flex-col gap-y-10 sm:flex-row-reverse sm:gap-x-5">
          <div className="flex flex-col gap-y-5 sm:w-1/2 sm:self-center lg:self-end">
            {benefitList.map((benefit) => (
              <Feature
                key={benefit.id}
                src={benefit.svgPath}
                alt={benefit.alt}
                text={benefit.text}
                paragraph={benefit.paragraph}
              />
            ))}
          </div>
          <div className="flex flex-col gap-y-8 sm:w-1/2 sm:items-start xl:w-[58%]">
            <h2 className="text-3xl font-semibold leading-relaxed  md:text-4xl md:leading-relaxed xl:text-5xl xl:leading-relaxed">
              You do the business, we’ll handle the money.
            </h2>
            <p className="text-base font-normal leading-relaxed ">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <Link href={"/"}>
              <Button text="Get Started" />
            </Link>
          </div>
        </div>
      </Container>
      <Divider py="py-5 sm:py-10" />
    </section>
  );
};

export default BenefitsSection;
