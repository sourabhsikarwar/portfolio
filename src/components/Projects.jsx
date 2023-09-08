import React from "react";
import layout from "../style";
import styles from "../style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects" className={`${layout.section} ${styles.marginY} relative`}>
      <div className="absolute z-[3] -left-1/4 -top-1/4 w-[25%] h-[25%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/4 -top-1/4 w-[25%] h-[25%] rounded-full pink__gradient" />

      <div className="grid sm:grid-cols-12 items-start">
        <div className="col-span-12 sm:col-span-4">
          <div className="sm:text-left">
            <div className="h-2 w-1/12 bg-secondary rounded-full mb-2" />
            <h3 className={styles.heading4}>Projects</h3>
          </div>
        </div>
        <div className="col-span-12 space-y-6 sm:col-span-8">
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            laboriosam est incidunt dolor dicta minima quas velit nostrum.
          </p>
        </div>
      </div>

      {/* Projects */}

      <Splide
        aria-label="My Favorite Images"
        options={{
          wheel: true,
          waitForTransition: true,
          wheelSleep: false,
          wheelMinThreshold: 5,
          releaseWheel: true,
          arrows: false,
        }}
      >
        <SplideSlide>
          <Project value="1" />
        </SplideSlide>
        <SplideSlide>
          <Project value="2" />
        </SplideSlide>
        <SplideSlide>
          <Project value="3" />
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default Projects;
