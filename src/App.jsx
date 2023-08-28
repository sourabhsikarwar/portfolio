import React from "react";
import styles from "./style";
import GitHubCalendar from "react-github-calendar";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
  Timeline,
  Projects,
  Skills,
} from "./components";

const App = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    dark: ["rgba(255, 255, 255, 0.1)", "#00f6ff"],
    light: ['hsl(0, 0%, 92%)', '#00f6ff'],
  };
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Clients /> */}
          <Stats />
          <Business />
          <Timeline />
          <Skills />

          {/* <Billing /> */}
          {/* <CardDeal /> */}

          <Projects />
          {/* <Testimonials /> */}
          <CTA/>

          <GitHubCalendar
            username="sourabhsikarwar"
            blockSize={15}
            blockMargin={5}
            theme={colourTheme}
            fontSize={16}
            style={{color: "rgba(255, 255, 255, 0.5)", margin: "auto"}}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
