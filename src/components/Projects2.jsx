import React from "react";
import layout from "../style";
import styles from "../style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Project from "./Project";
import { motion } from "framer-motion";
import Circular from "./Gradients/Circular";
import { project1, project2, project3, project4 } from "../assets";

const Projects2 = () => {
  return (
    <section
      id="projects"
      className={`${layout.section} ${styles.marginY} relative`}
    >
      <Circular />

      <div className="grid sm:grid-row-6 grid-cols-3 items-start gap-8 w-full text-black">
        <div className="group row-start-1 row-end-2 h-full col-span-2 flex justify-between bg-secondary hover:shadow-lg overflow-hidden rounded-xl border border-gray-700 p-8">
          <div>
            <h1 className="font-poppins font-semibold sm:text-[32px] md:text-[36px] text-[28px] w-full">
              Scene - Movie Showcase
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae atque magnam temporibus in minima!
            </p>
          </div>
        </div>
        <div className="row-start-1 row-end-2 h-full col-span-1 w-full text-right">
          <h3 className="text-white font-poppins font-semibold sm:text-[32px] md:text-[36px] text-[28px] w-full">
            Projects
          </h3>
        </div>
        <div className="group overflow-hidden row-start-2 h-full bg-gray-50 row-end-3 col-span-1 rounded-xl border border-gray-700 p-8 ">
          <div>
            <h1 className="font-poppins font-semibold sm:text-[32px] md:text-[36px] text-[28px] w-full">
              Multithreaded Webscraper
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae atque magnam temporibus in minima!
            </p>
          </div>
        </div>
        <div className="group overflow-hidden row-start-2 h-full bg-[#aeddff] flex row-end-3 col-span-2 rounded-xl border border-gray-700 p-8 ">
          <div>
            <h1 className="font-poppins font-semibold sm:text-[32px] md:text-[36px] text-[28px] w-full">
              In A Bin - Waste Pickup Service
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae atque magnam temporibus in minima!
            </p>
          </div>
        </div>
        <div className="group overflow-hidden row-start-3 h-full bg-[#f4c4f3] row-end-4 col-span-2 rounded-xl border border-gray-700 p-8 ">
          <div>
            <h1 className="font-poppins font-semibold sm:text-[32px] md:text-[36px] text-[28px] w-full">
              Zoak
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae atque magnam temporibus in minima!
            </p>
          </div>
        </div>
        <div className="group row-start-3 row-end-4 h-full bg-[#cdabff] flex justify-between col-span-1 rounded-xl border border-gray-700 p-8  overflow-hidden">
          <div>
            <h1 className="font-poppins font-semibold sm:text-[32px] md:text-[36px] text-[28px] w-full">
              Client Portfolio
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae atque magnam temporibus in minima!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects2;
