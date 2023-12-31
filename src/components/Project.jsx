import styles, { layout } from "../style";
import {
  project1,
  project2,
  live,
  github,
  project3,
  project4,
  project5,
  figmaIcon,
} from "../assets";

const Project = ({ value }) => {
  switch (value) {
    case "1":
      return (
        <section className={layout.sectionReverse}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading5}>Scene - OTT Platform</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
              Scene brings a world of content right to your fingertips, offering
              a rich library of movies, TV shows, and exclusive content, all
              designed to captivate and entertain.
            </p>
            <p className={styles.paragraph}>
              Built using{" "}
              <span className="font-semibold text-white dark:text-white">
                React.js and Firebase
              </span>
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/sourabhsikarwar/Scene-Movie-Platform"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-blue-gradient dark:bg-blue-gradient rounded font-semibold"
              >
                Source Code
                <img src={github} alt="code" className="w-4" />
              </a>
              <a
                href="https://scene-movie-platform.vercel.app/"
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-100 hover:bg-gray-200 rounded font-semibold"
              >
                Live Demo
                <img src={live} alt="demo" className="w-4" />
              </a>
            </div>
          </div>
          <div className={layout.sectionImg}>
            <img src={project2} alt="card" />
          </div>
        </section>
      );
    case "2":
      return (
        <section className={layout.section}>
          <div className={layout.sectionImgReverse}>
            <img src={project1} alt="card" />
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading5}>In A Bin</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
              In A Bin is a comprehensive waste management platform designed to
              address the growing environmental concerns related to improper
              waste disposal and streamline waste management operations.
            </p>
            <p className={styles.paragraph}>
              Built using{" "}
              <span className="font-semibold text-white dark:text-white">
                React.js, Node.js, Express.js and MongoDB
              </span>
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/sourabhsikarwar/Inabin-Waste-management-app"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-blue-gradient dark:bg-blue-gradient rounded font-semibold"
              >
                Source Code
                <img src={github} alt="code" className="w-4" />
              </a>
              <a
                href="https://inabin.vercel.app/"
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-100 hover:bg-gray-200 rounded font-semibold"
              >
                Live Demo
                <img src={live} alt="demo" className="w-4" />
              </a>
            </div>
          </div>
        </section>
      );
    case "3":
      return (
        <section className={layout.sectionReverse}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading5}>Zoak</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
              Online web presence for the appointment booking system of Zoak.
              Zoak is a startup that provides a platform for the users to book
              appointments with the vendor businesses.
            </p>
            <p className={styles.paragraph}>
              Built using{" "}
              <span className="font-semibold text-white dark:text-white">
                HTML, CSS, JS and BootStrap
              </span>
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/sourabhsikarwar/Zoak"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-blue-gradient dark:bg-blue-gradient rounded font-semibold"
              >
                Source Code
                <img src={github} alt="code" className="w-4" />
              </a>
            </div>
          </div>
          <div className={layout.sectionImg}>
            <img src={project3} alt="card" />
          </div>
        </section>
      );
    case "4":
      return (
        <section className={layout.section}>
          <div className={layout.sectionImgReverse}>
            <img src={project5} alt="card" />
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading5}>Veditra</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
              Veditra is a user-centric UI/UX project aimed at enhancing the
              online learning experience for college students and teachers
              amidst the challenges posed by COVID-19.
            </p>
            <p className={styles.paragraph}>
              Built in{" "}
              <span className="font-semibold text-white dark:text-white">
                Figma
              </span>
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.figma.com/file/ZCMdwOCz0VVdQBsHWdoGCc/Veditra?type=design&mode=design&t=ZkM4WobefjLNwQub-1"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-blue-gradient dark:bg-blue-gradient rounded font-semibold"
              >
                Figma
                <img src={figmaIcon} alt="code" className="w-4" />
              </a>
            </div>
          </div>
        </section>
      );
    case "5":
      return (
        <section className={layout.sectionReverse}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading5}>K2Cloud</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
              Website for K2Cloud, a startup that provides cloud security
              solutions to the businesses.
            </p>
            <p className={styles.paragraph}>
              Built using{" "}
              <span className="font-semibold text-white dark:text-white">
                HTML, CSS, JS and BootStrap
              </span>
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/sourabhsikarwar/K2Cloud"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-blue-gradient dark:bg-blue-gradient rounded font-semibold"
              >
                Source Code
                <img src={github} alt="code" className="w-4" />
              </a>
            </div>
          </div>
          <div className={layout.sectionImg}>
            <img src={project4} alt="card" />
          </div>
        </section>
      );
    default:
      return <></>;
  }
};

export default Project;
