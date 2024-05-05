import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Business,
  CTA,
  Footer,
  Timeline,
  Projects,
  Skills,
  Zigzag,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary dark:bg-primary w-full overflow-hidden">
      <Navbar />
      <Hero />

      <div
        className={`bg-primary dark:bg-primary ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Timeline />
          <Projects />
          <Skills />
          <Testimonials />
          <div className="relative">
            <Zigzag />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
