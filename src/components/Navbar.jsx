import { useState } from "react";
import { close, mylogo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-3 sm:py-4 justify-between items-center bg-transparent backdrop-blur-md">
      <img src={mylogo} alt="bank" className="w-[48px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-gray-300 hover:text-white duration-300 dark:text-gray-300 group ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
            <hr className="border border-secondary w-1 mx-auto mt-2 group-hover:w-full duration-300" />
          </li>
        ))}
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
          } p-6 bg-black-gradient dark:bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-gray-200 group hover:text-white duration-300 dark:text-gray-200 ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }
                `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
                <hr className="border border-secondary w-1 mx-auto mt-2 group-hover:w-full duration-300" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
