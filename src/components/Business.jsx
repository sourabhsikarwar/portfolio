import styles, { layout } from "../style";
import { features } from "../constants";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    // initial={{ opacity: 0, y: 100 }}
    // whileInView={{ opacity: 1, y: 0 }}
    // transition={{ duration: 0.8 }}
    className="flex flex-row items-center gap-6 w-full p-6 rounded-xl border-2 border-secondary/10 dark:border-secondary/10 shadow-card z-10"
  >
    <div
      className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-blue-gradient dark:bg-blue-gradient backdrop-blur-lg`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-col">
      <h4 className={styles.heading6}>{title}</h4>
    </div>
  </div>
);

const Business = () => {
  return (
    <section
      id="about"
      className={`${layout.section} items-start md:items-center gap-8`}
    >
      <div
        className={`${layout.sectionInfo} gap-6`}
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8 }}
      >
        <h1 className="bg-secondary/10 dark:bg-secondary/10 ring-1 ring-inset ring-secondary/10 px-4 py-2 rounded-full text-secondary dark:text-secondary font-semibold mb-2 w-fit">
          About me
        </h1>
        <h2 className={styles.heading4}>
          Transforming <span className="text-gradient">Ideas</span> into
          <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Seamless</span> Digital Experiences
        </h2>
        <p className={`${styles.paragraph} text-justify w-full md:w-5/6`}>
          Hi, I'm Sourabh Sikarwar, a software engineer at INDMoney. I
          have my experience in full stack development, with a flair for crafting
          dynamic web frontends using JavaScript, React.js, Next.js, and Node.js. My journey
          includes four impactful internships, diverse freelance projects, and
          adrenaline-pumping hackathons and projects. Always on the hunt for new knowledge,
          I'm a continuous learner passionate about pushing the boundaries of
          technology.
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-4 w-full">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
