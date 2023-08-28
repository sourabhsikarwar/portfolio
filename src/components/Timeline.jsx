import React from "react";
import styles from "../style";

const Timeline = () => {
  return (
    <section
      className={`dark:bg-primary dark:text-gray-100 ${styles.paddingY}`}
    >
      <div className="grid gap-4 sm:grid-cols-12">
        <div className="col-span-12 sm:col-span-4">
          <div className="sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:dark:bg-secondary">
            <h3 className={styles.heading4}>Work Experience</h3>
            {/* <span className="text-sm font-bold tracki uppercase dark:text-gray-400">
              Vestibulum diam nunc
            </span> */}
          </div>
        </div>
        <div className="relative col-span-12 space-y-6 sm:col-span-8 px-4">
          <div className="col-span-12 space-y-12 relative sm:col-span-8 px-4 sm:space-y-12 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-gray-700">
            <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-secondary">
              <h3 className="tracki font-poppins font-semibold xs:text-[24px] text-[20px] text-white">
                Software Developer Intern - OneAssure
              </h3>
              <time className="text-xs tracki uppercase dark:text-gray-400">
                March 2023 - August 2023
              </time>
              <p className="mt-3">
                Pellentesque feugiat ante at nisl efficitur, in mollis orci
                scelerisque. Interdum et malesuada fames ac ante ipsum primis in
                faucibus.
              </p>
            </div>
            <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-secondary">
              <h3 className="tracki font-poppins font-semibold xs:text-[24px] text-[20px] text-white">
                Web Developer Intern - Endeavor Welfare Society
              </h3>
              <time className="text-xs tracki uppercase dark:text-gray-400">
                June 2021 - July 2021
              </time>
              <p className="mt-3">
                Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc
                ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget
                egestas sodales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
