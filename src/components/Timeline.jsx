import React from "react";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <section className={`${layout.section} ${styles.marginY}`}>
      <div className="grid gap-8 md:grid-cols-12">
        <div
          className="col-span-12 md:col-span-4"
          // initial={{ opacity: 0, y: 100 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
        >
          <div className="sm:text-left">
            <div className="h-2 w-1/12 bg-secondary dark:bg-secondary rounded-full mb-2" />
            <h3 className={styles.heading4}>Work Experience</h3>
          </div>
        </div>

        <div className="relative col-span-12 space-y-6 md:col-span-8 px-4">
          <div className="col-span-12 space-y-12 relative sm:col-span-8 px-4 sm:space-y-12 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-gray-600 before:bg-gray-600">
            {/* INDMoney */}
            <div
              // initial={{ opacity: 0, y: 100 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8 }}
              className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-secondary before:bg-secondary"
            >
              <h3 className={styles.heading5}>
                Software Engineer -{" "}
                <span className="text-gradient">INDmoney</span>
              </h3>
              <time className="text-xs mt-2 font-medium uppercase tracki text-gradient">
                JULY 2024 - Present
              </time>
              <ul className="list-disc list-inside mt-2 pr-2">
                <li className={`${styles.paragraph2} mt-2`}>
                  Contributed to{" "}
                  <span className="font-medium text-white">
                    advanced charting for traders
                  </span>{" "}
                  enhancing user experience in the mobile app by integrating{" "}
                  <span className="font-medium text-white">webviews</span> and
                  native mobile development, and optimizing{" "}
                  <span className="font-medium text-white">
                    AI-driven chart patterns for 90% faster rendering
                  </span>
                </li>
                <li className={`${styles.paragraph2} mt-2`}>
                  Improved chart functionality and usability by adding{" "}
                  <span className="font-medium text-white">
                    live news, real-time profit/loss updates, order displays,
                    index pinning on trading terminal,
                  </span>{" "}
                  and a revamped authentication flow across mobile and web
                  trading products
                </li>
                <li className={`${styles.paragraph2} mt-2`}>
                  Contributed in{" "}
                  <span className="font-medium text-white">
                    top-of-the-funnel SEO projects
                  </span>
                  , including commodity, live market, and financial detail
                  pages.{" "}
                  <span className="font-medium text-white">
                    Improved crawlability and user experience{" "}
                  </span>{" "}
                  by developing content-rich components and resolving various
                  audit issues
                </li>
                <li className={`${styles.paragraph2} mt-2`}>
                  Provided{" "}
                  <span className="font-medium text-white">
                    development support
                  </span>{" "}
                  for web applications and mobile webviews for{" "}
                  <span className="font-medium text-white">
                    Instant Withdrawal and Insurance teams
                  </span>
                </li>
              </ul>
            </div>

            {/* INDMoney Internship */}
            <div
              // initial={{ opacity: 0, y: 100 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8 }}
              className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-secondary before:bg-secondary"
            >
              <h3 className={styles.heading5}>
                Software Engineer Intern -{" "}
                <span className="text-gradient">INDmoney</span>
              </h3>
              <time className="text-xs mt-2 font-medium uppercase tracki text-gradient">
                March 2024 - June 2024
              </time>
              <ul className="list-disc list-inside mt-2 pr-2">
                <li className={`${styles.paragraph2} mt-2`}>
                  Led{" "}
                  <span className="font-medium text-white">in-house flyer</span>{" "}
                  widget development replacing Appsflyer,{" "}
                  <span className="font-medium text-white">
                    driving 25% user acquisition growth
                  </span>{" "}
                  and enhanced user engagement and performance
                </li>
                <li className={`${styles.paragraph2} mt-2`}>
                  Developed{" "}
                  <span className="font-medium text-white">
                    SEO-optimized finance pages and calculators
                  </span>{" "}
                  with interactive charts, resulting in measurable improvements
                  in search engine ranking
                </li>
                <li className={`${styles.paragraph2} mt-2`}>
                  Optimized{" "}
                  <span className="font-medium text-white">
                    Strapi APIs and images
                  </span>{" "}
                  by more than{" "}
                  <span className="font-medium text-white">50%</span> reduction
                  in size and time
                </li>
              </ul>
              <p className={`${styles.paragraph2} !text-white mt-4 text-[16px]`}>
                <span className="font-medium text-gradient">Tech Stack:</span>{" "}
                NextJS, TypeScript, JavaScript, NodeJS, TailwindCSS, Strapi CMS
              </p>
            </div>

            {/* Causal Funnel */}
            <div
              // initial={{ opacity: 0, y: 100 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8 }}
              className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-secondary before:bg-secondary"
            >
              <h3 className={styles.heading5}>
                Full Stack Developer Intern -{" "}
                <span className="text-gradient">CausalFunnel</span>
              </h3>
              <time className="text-xs mt-2 font-medium uppercase tracki text-gradient">
                Jan 2024 - Feb 2024
              </time>
              <ul className="list-disc list-inside mt-2 pr-2">
                <li className={`${styles.paragraph2} mt-2`}>
                  Streamlined list and contact management by{" "}
                  <span className="font-medium text-white dark:text-white">
                    integrating 5+
                  </span>{" "}
                  marketing and automation tools, leveraging their{" "}
                  <span className="font-medium text-white dark:text-white">
                    REST APIs and custom cloud functions
                  </span>{" "}
                  for efficient client solutions.
                </li>
              </ul>
              <p className={`${styles.paragraph2} !text-white mt-4 text-[16px]`}>
                <span className="font-medium text-gradient">Tech Stack:</span>{" "}
                NodeJS for Firebase Cloud Functions, ReactJS, JavaScript, TailwindCSS
              </p>
            </div>

            {/* OneAssure */}
            <div
              // initial={{ opacity: 0, y: 100 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8 }}
              className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-secondary before:bg-secondary"
            >
              <h3 className={styles.heading5}>
                Software Developer Intern -{" "}
                <span className="text-gradient">OneAssure</span>
              </h3>
              <time className="text-xs mt-2 font-medium uppercase tracki text-gradient">
                March 2023 - August 2023
              </time>
              <ul className="list-disc list-inside mt-2 pr-2">
                <li className={`${styles.paragraph2} mt-2`}>
                  Contributed in development of{" "}
                  <span className="font-medium text-white">
                    application forms
                  </span>{" "}
                  with a status and submit flow, incorporating summary and KYC
                  sections for a{" "}
                  <span className="font-medium text-white dark:text-white">
                    seamless user experience.
                  </span>
                </li>
                <li className={`${styles.paragraph2} mt-2`}>
                  Successfully refactored and optimized{" "}
                  <span className="font-medium text-white dark:text-white">
                    10+ reusable and scalable components
                  </span>
                  , enhancing overall codebase efficiency and maintainability.
                </li>
                <li className={`${styles.paragraph2} mt-2`}>
                  Utilized{" "}
                  <span className="font-medium text-white dark:text-white">
                    ReactJS, Redux, TailwindCSS, and MaterialUI
                  </span>{" "}
                  to create a modern and user-friendly interface.
                </li>
              </ul>
              <p className={`${styles.paragraph2} !text-white mt-4 text-[16px]`}>
                <span className="font-medium text-gradient">Tech Stack:</span>{" "}
                ReactJS, JavaScript, Redux, TailwindCSS, MaterialUI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
