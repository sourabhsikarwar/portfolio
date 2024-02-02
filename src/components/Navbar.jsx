import { useState } from "react";
import { close, mylogo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full z-50 fixed top-0 backdrop-blur-md bg-transparent">
      <div className="flex py-3 sm:py-4 mx-auto justify-between items-center px-4 xl:px-0 max-w-6xl xl:max-w-7xl ">
        <img src={mylogo} alt="bank" className="w-[48px]" />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-gray-300 hover:text-white duration-300 dark:text-gray-300 group ${
                index === navLinks.length - 1 ? "mr-10" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              <hr className="border border-secondary w-1 mx-auto mt-2 group-hover:w-full duration-300" />
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-4 py-2 md:px-6 md:py-3 bg-blue-gradient dark:bg-blue-gradient rounded font-semibold"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient dark:bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-gray-200 group hover:text-white duration-300 dark:text-gray-200 ${
                    index === navLinks.length - 1 ? "mb-4" : "mb-4"
                  }
                `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                  <hr className="border border-secondary w-1 mx-auto mt-2 group-hover:w-full duration-300" />
                </li>
              ))}
              <li className="my-2">
                <a
                  href="#contact"
                  className="px-4 py-2 bg-blue-gradient dark:bg-blue-gradient rounded font-semibold"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
