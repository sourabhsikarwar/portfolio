import React from "react";
import styles, { layout } from "../style";

const Timeline = () => {
  return (
    <section
      className={`dark:text-gray-100 ${layout.section} ${styles.marginY}`}
    >
      <div className="grid gap-8 md:grid-cols-12">
        <div className="col-span-12 md:col-span-4">
          <div className="sm:text-left">
            <div className="h-2 w-1/12 bg-secondary rounded-full mb-2"/>
            <h3 className={styles.heading4}>Work Experience</h3>
          </div>
        </div>
        <div className="relative col-span-12 space-y-6 md:col-span-8 px-4">
          <div className="col-span-12 space-y-12 relative sm:col-span-8 px-4 sm:space-y-12 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-gray-700">
            <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-secondary">
              <h3 className={styles.heading5}>
                Software Developer Intern - OneAssure
              </h3>
              <time className="text-xs mt-2 font-semibold uppercase tracki text-gradient">
                March 2023 - August 2023
              </time>
              <p className={`${styles.paragraph} mt-4`}>
                Pellentesque feugiat ante at nisl efficitur, in mollis orci
                scelerisque. Interdum et malesuada fames ac ante ipsum primis in
                faucibus.
              </p>
            </div>
            <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-secondary">
              <h3 className={styles.heading5}>
                Web Developer Intern - Endeavor Welfare Society
              </h3>
              <time className="text-xs mt-2 font-semibold uppercase tracki text-gradient">
                June 2021 - July 2021
              </time>
              <p className={`${styles.paragraph} mt-4`}>
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
