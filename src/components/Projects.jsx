import React from "react";
import layout from "../style";
import styles from "../style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Project from "./Project";
import Circular from "./Gradients/Circular";
import { projects } from "../constants/projects";
import classNames from "classnames";

const Projects = () => {
  return (
    <section
      id="projects"
      className={classNames(layout.section, styles.marginY, "relative")}
    >
      <Circular />

      <div className="grid sm:grid-cols-12 items-start">
        <div className="col-span-12 sm:col-span-4">
          <div className="sm:text-left">
            <div className="h-2 w-1/12 bg-secondary dark:bg-secondary rounded-full mb-2" />
            <h3 className={styles.heading4}>Projects</h3>
          </div>
        </div>
        <div className="col-span-12 space-y-6 sm:col-span-8">
          <p className={styles.paragraph}>
            Explore my portfolio of diverse web projects, showcasing my
            full-stack development expertise. From stunning front-end designs to
            powerful back-end functionality, these examples demonstrate my
            commitment to crafting seamless digital experiences.
          </p>
        </div>
      </div>

      <div>
        <Splide
          aria-label="Projects"
          options={{
            wheel: true,
            waitForTransition: true,
            wheelSleep: false,
            wheelMinThreshold: 5,
            releaseWheel: true,
            arrows: false,
            pagination: true,
          }}
        >
          {projects.map((project, index) => (
            <SplideSlide key={index}>
              <Project projectData={project} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Projects;
