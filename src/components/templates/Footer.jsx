import React from "react";
import Link from "next/link";
import { Container, Divider, Logo, FooterDetails, FooterSocialLinks } from "..";
import { footerDetails, links } from "@/data/footerData";

const Footer = () => {
  return (
    <footer>
      <Divider py="py-5 sm:py-10" />
      <Container>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-row flex-wrap gap-x-12 gap-y-10 md:justify-between">
            <div className="flex flex-col gap-y-5">
              <Link href={"/"}>
                <Logo
                  styles="flex items-center text-lg leading-6 font-semibold"
                  iconStyles="min-w-16"
                  titleStyles="font-semibold text-4xl"
                />
              </Link>
              <p className="max-w-80 pl-3 text-base font-normal leading-normal text-white text-opacity-70 sm:text-lg">
                A new way to make the payments easy, reliable and secure.
              </p>
            </div>
            {footerDetails.map((data, index) => {
              return (
                <FooterDetails
                  key={index}
                  title={data.title}
                  list={data.list}
                  textStyle="text-white text-opacity-70"
                />
              );
            })}
          </div>
          <div className="border-charcoal-gray sm:flex-warp flex flex-col justify-center gap-x-4  gap-y-5 border-t-[1px] border-solid pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              <p className="text-base font-normal leading-normal text-white text-opacity-60 sm:text-lg">
                Copyright
              </p>
              <img src="/svgs/copyright.svg" alt="copyright" />
              <p className="text-base font-normal leading-normal text-white text-opacity-60 sm:text-lg">
                2021 HooBank. All Rights Reserved.
              </p>
            </div>
            <div className="flex gap-x-8">
              {links.map((link, index) => {
                return (
                  <FooterSocialLinks
                    key={index}
                    iconPath={link.iconPath}
                    alt={link.alt}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Divider py="py-5 sm:py-10" />
    </footer>
  );
};

export default Footer;
