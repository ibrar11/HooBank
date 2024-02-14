"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../../data/navLinksData";
import { IconItem, Container, Divider, HamburgerIcon } from "../index";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setDropDown(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky">
      <Divider />
      <Container>
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="relative flex items-center justify-between">
            <IconItem
              src="/images/hooBank.svg"
              alt="hooBank"
              title_part1="Hoo"
              title_part2="Bank"
              styles="flex items-center text-lg leading-6 font-semibold"
              titleStyles="text-white"
              titleStyles2="text-primary"
            />
            <HamburgerIcon
              isNavOpened={dropDown}
              setIsNavOpened={setDropDown}
            />
          </div>
          <div
            className={
              dropDown
                ? "absolute left-0 right-0 top-16 z-10 flex w-full flex-col gap-y-3 rounded-lg"
                : "h-0 w-0 overflow-hidden sm:ml-auto sm:flex sm:h-auto sm:w-max  xl:gap-x-16"
            }
          >
            <nav className="text-sm sm:flex sm:items-center">
              <ul className="flex flex-col pl-4 sm:flex-row sm:items-center">
                {links.map((link) => {
                  return (
                    <li key={link.id} className="px-2 py-2">
                      <Link
                        href={link.to}
                        className={`${pathname === link.to ? "text-opacity-100" : ""} p-2 text-base font-normal text-white text-opacity-70`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
      <Divider />
    </header>
  );
};

export default Header;
