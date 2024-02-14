import React from "react";
import { Container, Divider, Feature, Button } from "../index";
import { benefitList } from "@/app/data/benefitsData";

const Benefits = () => {
  return (
    <section>
      <Divider py="py-5 sm:py-10" />
      <Container>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-5">
            {benefitList.map((benefit) => {
              return (
                <Feature
                  key={benefit.id}
                  src={benefit.svgPath}
                  alt={benefit.alt}
                  text={benefit.text}
                  paragraph={benefit.paragraph}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-y-8">
            <h2 className="text-3xl font-semibold leading-relaxed text-white">
              You do the business, we’ll handle the money.
            </h2>
            <p className="text-base font-normal leading-normal text-white sm:text-lg">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <Button text="Get Started" />
          </div>
        </div>
      </Container>
      <Divider py="py-5 sm:py-10" />
    </section>
  );
};

export default Benefits;
