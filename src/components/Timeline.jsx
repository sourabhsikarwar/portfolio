import React from "react";
import styles, { layout } from "../style";
import { timelineData } from "../constants/timeline";
import PillsContainer from "./Common/PillsContainer";
import TextWithHighlights from "./Common/TextWithHighlights";
import classNames from "classnames";

const Timeline = () => {
  return (
    <section className={`${layout.section} ${styles.marginY}`}>
      <div className="flex flex-col gap-8">
        <div className="col-span-12 md:col-span-4">
          <div className="sm:text-left">
            <div className="h-2 w-[3rem] bg-secondary dark:bg-secondary rounded-full mb-2" />
            <h3 className={styles.heading4}>Work Experience</h3>
          </div>
        </div>

        <div className="relative col-span-12 space-y-6 md:col-span-8 px-4">
          <div className="col-span-12 space-y-12 relative sm:col-span-8 px-4 sm:space-y-12 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-gray-600 before:bg-gray-600">
            {timelineData.map((experience, index) => (
              <div
                key={index}
                className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-secondary before:bg-secondary"
              >
                <h3 className={styles.heading5}>
                  {experience.title} -{" "}
                  <span className="text-gradient">{experience.company}</span>
                </h3>
                <time className="text-xs mt-2 font-medium uppercase tracki text-gradient">
                  {experience.period}
                </time>
                <ul className="list-disc list-inside mt-2 pr-2">
                  {experience.achievements.map((achievement, idx) => (
                    <TextWithHighlights
                      key={idx}
                      tag="li"
                      text={achievement.text}
                      highlights={achievement.highlights}
                      className={classNames(styles.paragraph2, "mt-2")}
                    />
                  ))}
                </ul>
                {experience.techStack && (
                  <PillsContainer
                    items={experience.techStack}
                    className={classNames(styles.paragraph2, "mt-4")}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
