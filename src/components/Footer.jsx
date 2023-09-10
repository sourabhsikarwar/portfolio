import { mylogo } from "../assets";
import { navLinks, socialMedia } from "../constants";

const Footer = () => (
  <footer className="bg-primary dark:bg-primary relative">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 z-100">
      <div className="flex justify-center">
        <img src={mylogo} alt="logo" className="w-40 shadow-img" />
      </div>

      <ul className="z-100 list-none my-12 flex sm:flex-row gap-4 sm:gap-8 flex-col justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-[14px] hover:text-gray-300 text-white dark:text-white transition-all duration-200"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-8">
        {socialMedia.map((social, index) => (
          <a
            href={social.link}
            key={index}
            className="text-white dark:text-white hover:text-dimWhite transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d={social.pathD} />
            </svg>
          </a>
        ))}
      </div>
    </div>
    <div className="mt-0 border-t border-dimBlue dark:border-dimBlue py-8 z-10">
      <p className="text-center text-xs/relaxed text-gray-400 dark:text-gray-400">
        © 2023. All rights reserved. Created by Sourabh Sikarwar
      </p>
    </div>
  </footer>
);

export default Footer;
