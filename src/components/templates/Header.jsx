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
    <header className="bg-secondary sticky top-0 z-20">
      <Container>
        <div className="flex items-center py-4">
          <Link href={"/"}>
            <Logo styles="flex items-center text-lg leading-6 font-semibold" />
          </Link>
          <HamburgerIcon isNavOpened={dropDown} setIsNavOpened={setDropDown} />
          <div
            className={
              dropDown
                ? "bg-bgGradient blur-10 absolute left-0 right-0 top-14 z-10 flex w-full flex-col gap-y-3 rounded-lg"
                : "h-0 w-0 overflow-hidden sm:ml-auto sm:flex sm:h-auto sm:w-max  xl:gap-x-16"
            }
          >
            <nav className="text-sm sm:flex sm:items-center">
              <ul className="flex flex-col pl-4 sm:flex-row sm:items-center">
                {links.map((link) => (
                  <li key={link.id} className="mx-5 my-2">
                    <Link
                      href={link.to}
                      className={`${pathname === link.to ? "text-opacity-100" : "text-opacity-70"} text-base font-medium `}
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
