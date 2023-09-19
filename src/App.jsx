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
} from "./components";

const App = () => {
  return (
    <div className="bg-primary dark:bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary dark:bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-primary dark:bg-primary ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Timeline />
          <Projects />
          <Skills />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
