import React from "react";
import { Container, Divider, EndorsementItem } from "../index";
import { Endorsements } from "@/data/EndorsementList";

const EndorsementSection = () => {
  return (
    <section>
      <Divider py="py-5 sm:py-10" />
      <Container>
        <div className="flex flex-wrap gap-x-10 gap-y-5 sm:justify-center lg:justify-evenly xl:justify-between">
          {Endorsements.map((item) => (
            <EndorsementItem
              slashStyle={item.display}
              count={item.count}
              text={item.text}
            />
          ))}
        </div>
      </Container>
      <Divider py="py-5 sm:py-10" />
    </section>
  );
};

export default EndorsementSection;
