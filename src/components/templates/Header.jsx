"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../../data/navLinksData";
import { Logo, Container, HamburgerIcon } from "../index";

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
    <header className="sticky top-0 z-20 bg-secondary">
      <Container>
        <div className="flex items-center py-4">
          <Link href={"/"}>
            <Logo styles="flex items-center text-lg leading-6 font-semibold" />
          </Link>
          <HamburgerIcon isNavOpened={dropDown} setIsNavOpened={setDropDown} />
          <div
            className={
              dropDown
                ? "blur-10 absolute left-0 right-0 top-14 z-10 flex w-full flex-col gap-y-3 rounded-lg bg-bgGradient transition-all duration-300 ease-in-out"
                : "h-0 w-0 overflow-hidden sm:ml-auto sm:flex sm:h-auto sm:w-max xl:gap-x-16"
            }
          >
            <nav className="text-sm sm:flex sm:items-center">
              <ul className="flex flex-col gap-y-5 px-5 py-10 sm:flex-row sm:items-center">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.to}
                      className={`${pathname === link.to ? "text-opacity-100" : "text-opacity-70"} rounded-lg from-g-purple to-dark-purple p-2 text-base font-medium text-white hover:bg-gradient-to-br`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
