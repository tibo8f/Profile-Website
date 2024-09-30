"use client";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { NAV_LINKS } from "../constants";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-end py-10">
      <ul className="hidden h-full gap-12 lg:flex mr-8">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            scroll={false}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            onClick={(e) => {
              e.preventDefault();
              const targetSection = document.querySelector(link.href);
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className=" flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/thibaut-fran%C3%A7ois-143549258">
          <FaLinkedin />
        </a>
        <a href="https://github.com/tibo8f">
          <FaGithub />
        </a>
      </div>

      {/* <IoMenu className="inline-block cursor-pointer lg:hidden" /> */}
      {/* <nav className=" mb-20 flex items-center justify-between py-6">
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight">
          Thibaut François
        </h1>
      </div>
       */}
    </nav>
  );
};

export default Navbar;
