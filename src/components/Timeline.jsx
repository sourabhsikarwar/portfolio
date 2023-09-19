import React from "react";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <section className={`${layout.section} ${styles.marginY}`}>
      <div className="grid gap-8 md:grid-cols-12">
        <div
          className="col-span-12 md:col-span-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="sm:text-left">
            <div className="h-2 w-1/12 bg-secondary dark:bg-secondary rounded-full mb-2" />
            <h3 className={styles.heading4}>Work Experience</h3>
          </div>
        </div>
        <div className="relative col-span-12 space-y-6 md:col-span-8 px-4">
          <div className="col-span-12 space-y-12 relative sm:col-span-8 px-4 sm:space-y-12 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-gray-600 before:bg-gray-600">
            <div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-secondary before:bg-secondary"
            >
              <h3 className={styles.heading5}>
                Software Developer Intern - OneAssure
              </h3>
              <time className="text-xs mt-2 font-semibold uppercase tracki text-gradient">
                March 2023 - August 2023
              </time>
              <ul className="list-disc list-inside mt-2 pr-2">
                <li className={`${styles.paragraph2} mt-2`}>
                  Contributed in development of an{" "}
                  <span className="font-semibold text-white">
                    application form
                  </span>{" "}
                  with a status and submit flow, incorporating summary and KYC
                  sections for a{" "}
                  <span className="font-semibold text-white dark:text-white">
                    seamless user experience.
                  </span>
                </li>
                <li className={`${styles.paragraph2} mt-2`}>
                  Successfully refactored and optimized{" "}
                  <span className="font-semibold text-white dark:text-white">
                    10+ reusable and scalable components
                  </span>
                  , enhancing overall codebase efficiency and maintainability.
                </li>
                <li className={`${styles.paragraph2} mt-2`}>
                  Utilized{" "}
                  <span className="font-semibold text-white dark:text-white">
                    ReactJS, Redux, TailwindCSS, and MaterialUI
                  </span>{" "}
                  to create a modern and user-friendly interface.
                </li>
              </ul>
            </div>
            <div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-secondary before:bg-secondary"
            >
              <h3 className={styles.heading5}>
                Web Developer Intern - Endeavor Welfare Society
              </h3>
              <time className="text-xs mt-2 font-semibold uppercase tracki text-gradient">
                June 2021 - July 2021
              </time>
              <ul className="list-disc list-inside mt-2 pr-2">
                <li className={`${styles.paragraph2} mt-2`}>
                  Leveraged{" "}
                  <span className="font-semibold text-white dark:text-white">
                    HTML, CSS, JavaScript, and Bootstrap
                  </span>{" "}
                  to design and implement the frontend of the website.
                </li>
                <li className={`${styles.paragraph2} mt-2`}>
                  Collaborated with a team of{" "}
                  <span className="font-semibold text-white dark:text-white">
                    3 developers
                  </span>{" "}
                  to create a donation platform from scratch.
                </li>
                <li className={`${styles.paragraph2} mt-2`}>
                  Integrated the{" "}
                  <span className="font-semibold text-white dark:text-white">
                    Razorpay payment gateway
                  </span>{" "}
                  for secure and hassle-free online donations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
