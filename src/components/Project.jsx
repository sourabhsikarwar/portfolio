import styles, { layout } from "../style";
import {
  project1,
  project2,
  live,
  github,
  project3,
  project4,
  project5,
} from "../assets";
import useExtractColor from "../hooks/useExtractColor";

const Project = ({ value }) => {
  const dominantColor = useExtractColor("https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/")
  console.log(dominantColor, "Data")
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
            <p className={styles.paragraph}>
              Open Sourced at{" "}
              <span className="font-semibold text-white dark:text-white">
                GirlScript Summer of Code'23
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
                href="https://scene-admin.vercel.app/"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-100 hover:bg-gray-200 rounded font-semibold"
              >
                Live
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
                React.js, Node.js, Express.js, MongoDB, TailwindCSS
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
              {/* <a
                href="https://inabin.vercel.app/"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-100 hover:bg-gray-200 rounded font-semibold"
              >
                Live
                <img src={live} alt="demo" className="w-4" />
              </a> */}
            </div>
          </div>
        </section>
      );
    case "3":
      return (
        <section className={layout.sectionReverse}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading5}>Dennis Dubbala Portfolio</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
              Personal Portfolio website with dynamic content, project and
              testimonial management system. It also has a dark mode toggle
              feature.
            </p>
            <p className={styles.paragraph}>
              Built using{" "}
              <span className="font-semibold text-white dark:text-white">
                React.js, Firebase, TailwindCSS
              </span>
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.dubbala.com/"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-100 hover:bg-gray-200 rounded font-semibold"
              >
                Live
                <img src={live} alt="demo" className="w-4" />
              </a>
            </div>
          </div>
          <div className={layout.sectionImg}>
            <img src={project4} alt="card" />
          </div>
        </section>
      );
    case "4":
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
                HTML, CSS, JS, TailwindCSS
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
    case "5":
      return (
        <section className={layout.section}>
          <div className={layout.sectionImgReverse}>
            <img src={project5} alt="card" />
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading5}>Thread Harvest</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
              Developed a multithreaded web scraper in Node.js with batching,
              achieving a 50% performance boost through parallel processing
              strategies and caching with Redis.
            </p>
            <p className={styles.paragraph}>
              Built using{" "}
              <span className="font-semibold text-white dark:text-white">
                JS, Node.js, Puppeteer, Redis
              </span>
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/sourabhsikarwar/MultiThreaded-WebScraper"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-blue-gradient dark:bg-blue-gradient rounded font-semibold"
              >
                Source Code
                <img src={github} alt="code" className="w-4" />
              </a>
            </div>
          </div>
        </section>
      );
    default:
      return <></>;
  }
};

export default Project;
