import React from "react";
import styles from "../style";

const ProjectNew = ({ title, description, tech, github, image, live }) => {
  return (
    <div
      className="h-[400px] flex rounded-lg overflow-hidden group shadow-lg bg-primary transition duration-500 ease-in-out hover:shadow-xl z-40"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="bg-gray-300 p-4 rounded-t-lg min-h-1/3 self-end translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-opacity-10 w-full backdrop-filter backdrop-blur-lg">
        <h2 className={`${styles.heading5} !text-primary`}>{title}</h2>
        <div className="flex gap-1 mt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded-full bg-gray-300/50 text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectNew;
