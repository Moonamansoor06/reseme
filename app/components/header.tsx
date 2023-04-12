"use client";
import { ScrollLink } from "./ScrollLink";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="h-auto z-20 sticky inset-0 backdrop-blur-md py-3 
       bg-opacity-90 text-rosy flex justify-between "
    >
      <div className=" flex-shrink-0 transform skew-y-6 w-20 h-16  md:h-20 md:w-20">
        <Image
          priority
          fill
          className="rounded-xl p-4"
          src="/logo3.jpg"
          alt=""
        />
      </div>
      {/* nav */}
      <nav className="font-navFont">
        <div className=" mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2
                rounded-md text-gray-400 hover:scale-75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex  text-2xl font-extrabold">
              <div className="hidden lg:block lg:ml-6">
                <div className="flex space-x-4">
                  <ScrollLink
                    href="#home"
                    className="btn hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
                  >
                    Home
                  </ScrollLink>
                  <ScrollLink
                    href="#skill"
                    className="btn hover:bg-gray-700 px-3 py-2 rounded-md"
                  >
                    Skills
                  </ScrollLink>
                  <ScrollLink
                    href="#experience"
                    className="btn hover:bg-gray-700 px-3 py-2 rounded-md "
                  >
                    Experience
                  </ScrollLink>
                  <Link
                    href="/contact"
                    className="btn hover:bg-gray-700  px-3 py-2 rounded-md "
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3" >
            <ScrollLink
              href="#home"
              className="btn  hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-bold"
            >
              Home
            </ScrollLink>
            <ScrollLink
              href="#skill"
              className="btn  hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-bold"
            >
              Skill
            </ScrollLink>
            <ScrollLink
              href="#experience"
              className="btn  hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-bold"
            >
              Experience
            </ScrollLink>
            <Link
              href="/contact"
              className="btn  hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-bold"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
