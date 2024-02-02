import styles, { layout } from "../style";
import { features } from "../constants";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={`flex flex-row items-center p-4 rounded-[20px] w-full
  ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
  >
    <div
      className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue dark:bg-dimBlue backdrop-blur-lg`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className={styles.heading6}>{title}</h4>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="about" className={`${layout.section} items-start md:items-center`}>
      <div className={layout.sectionInfo}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="bg-secondary/10 dark:bg-secondary/10 ring-1 ring-inset ring-secondary/10 px-4 py-2 rounded-full text-secondary dark:text-secondary font-semibold mb-2 w-fit">
          About me
        </h1>
        <h2 className={styles.heading4}>
          Transforming ideas into
          <br className="sm:block hidden" /> interactive digital realities.
        </h2>
        <p className={`${styles.paragraph2} max-w-[470px] mt-4`}>
          Welcome to my world of full stack development! I am Sourabh Sikarwar,
          a seasoned full stack developer with a passion for crafting innovative
          digital solutions that seamlessly blend front-end aesthetics with
          back-end functionality. With the experience of tech industry through
          internships and projects, I have honed my skills to provide
          comprehensive, end-to-end web development services.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
