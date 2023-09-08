import React from "react";
import styles, { layout } from "../style";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className={`${layout.section} ${styles.marginY}`}>
    {/* <div className="absolute z-[0] w-[40%] h-[40%] right-0 bottom-0 rounded-full blue__gradient" /> */}
      <div className="grid gap-4 sm:grid-cols-12 w-full font-poppins">
        <div className="sm:col-span-4 col-span-12">
          <div className="sm:text-left">
            <div className="h-2 w-1/12 bg-secondary rounded-full mb-2" />
            <h3 className={styles.heading4}>Skills</h3>
          </div>
        </div>
        <div className="sm:col-span-8 col-span-12 grid gap-16 grid-cols-1 md:grid-cols-2">
          {skills.map((skill) => (
            <div className="col-span-1" key={skill.id}>
              <h6 className={`${styles.heading6} text-gradient mb-4`}>
                {skill.title}
              </h6>
              <div className="flex flex-row flex-wrap gap-6">
                {skill?.skillSet?.map((skillSet) => (
                  <div className="flex flex-col items-center" key={skillSet.id}>
                    <div className="flex items-center justify-center w-16 mb-2 h-16 p-2 rounded-lg bg-gray-100 hover:bg-gray-900 transition-all duration-300 ease-in-out group relative">
                      <img
                        src={skillSet.img}
                        alt="skills"
                        className="mix-blend-multiply"
                      />
                      <p className="absolute hidden group-hover:block text-white text-sm font-bold">
                        {skillSet.rate + '%'}
                      </p>
                    </div>
                    <p className="text-white text-[12px]">{skillSet.title}</p>
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
