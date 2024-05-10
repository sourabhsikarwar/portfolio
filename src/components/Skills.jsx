import React from "react";
import styles, { layout } from "../style";
import { skills } from "../constants";
import {motion} from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className={`${layout.section} ${styles.marginY}`}>
      <div className="grid gap-4 sm:grid-cols-12 w-full font-poppins">
        <div className="sm:col-span-4 col-span-12"
          // initial={{ opacity: 0, y: 100 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
        >
          <div className="sm:text-left">
            <div className="h-2 w-1/12 bg-secondary dark:bg-secondary rounded-full mb-2" />
            <h3 className={styles.heading4}>Skills</h3>
          </div>
        </div>
        <div className="sm:col-span-8 col-span-12 grid gap-16 grid-cols-1 md:grid-cols-2">
          {skills.map((skill) => (
            <div className="col-span-1" key={skill.id}
              // initial={{ opacity: 0, y: 100 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8 }}
            >
              <h6 className={`${styles.heading6} text-gradient dark:text-gradient mb-4`}>
                {skill.title}
              </h6>
              <div className="flex flex-row flex-wrap gap-6">
                {skill?.skillSet?.map((skillSet) => (
                  <div className="flex flex-col items-center" key={skillSet.id}>
                    <div className="flex items-center justify-center w-16 aspect-square mb-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-100 transition-all duration-300 ease-in-out">
                      <img
                        src={skillSet.img}
                        alt="skills"
                        className="mix-blend-multiply aspect-square object-contain"
                      />
                    </div>
                    <p className="text-white dark:text-white text-[12px]">{skillSet.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
