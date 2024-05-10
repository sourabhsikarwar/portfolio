import React from "react";
import layout from "../style";
import styles from "../style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Project from "./Project";
import { motion } from "framer-motion";
import Circular from "./Gradients/Circular";
import { projectsArr } from "../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className={`${layout.section} ${styles.marginY} relative`}
    >
      <Circular />

      <div
        className="grid sm:grid-cols-12 items-start"
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8 }}
      >
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

      {/* Projects */}

      <div
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8 }}
      >
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
          <SplideSlide>
            <Project value="5" />
          </SplideSlide>
          <SplideSlide>
            <Project value="1" />
          </SplideSlide>
          <SplideSlide>
            <Project value="2" />
          </SplideSlide>
          <SplideSlide>
            <Project value="3" />
          </SplideSlide>
          <SplideSlide>
            <Project value="4" />
          </SplideSlide>
        </Splide>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start w-full mt-16">
        {projectsArr.map((project) => (
          <div key={project.key}>
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="shape"
              />
              <div className="w-24 h-24 bg-black absolute bottom-0 right-0 rounded-tl-[50px]">
                <div className="w-16 h-16 bg-secondary m-4 rounded-full" />
              </div>
            </div>
            <div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Projects;
