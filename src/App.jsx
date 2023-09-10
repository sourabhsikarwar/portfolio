import React, { useEffect, useState } from "react";
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
import { mylogo } from "./assets";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return !isLoading ? (
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

      <div className={`bg-primary dark:bg-primary ${styles.paddingX} ${styles.flexStart}`}>
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
  ) : (
    <div className="bg-primary dark:bg-primary flex flex-col justify-center items-center w-full h-screen overflow-hidden">
      <img src={mylogo} alt="loader" className="animate-pulse w-[96px] md:w-[136px] mb-8" />
    </div>
  );
};

export default App;
