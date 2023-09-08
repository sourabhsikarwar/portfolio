import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from "../style";

const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    dark: ["rgba(255, 255, 255, 0.1)", "#00f6ff"],
    light: ["hsl(0, 0%, 92%)", "#00f6ff"],
  };
  return (
    <section className={styles.marginY}>
      <GitHubCalendar
        username="sourabhsikarwar"
        blockSize={20}
        blockMargin={5}
        year={"2023"}
        theme={colourTheme}
        style={{ color: "rgba(255, 255, 255, 0.5)", margin: "auto" }}
      />
    </section>
  );
};

export default Github;
