import styles, { layout } from "../style";
import { project1, project2, live, github } from "../assets";

const Project = ({ value }) => {
  switch (value) {
    case "1":
      return (
        <section className={layout.sectionReverse}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading5}>Scene - OTT Platform</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
            Scene brings a world of content right to your fingertips, offering a rich library of movies, TV shows, and exclusive content, all designed to captivate and entertain.
            </p>
            <p className={styles.paragraph}>Built using <span className="font-semibold text-white">React.js and Firebase</span></p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.github.com"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-blue-gradient rounded font-semibold"
              >
                Source Code
                <img src={github} alt="code" className="w-4" />
              </a>
              <a
                href="https://www.github.com"
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded font-semibold"
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
            In A Bin is a comprehensive waste management platform designed to address the growing environmental concerns related to improper waste disposal and streamline waste management operations.
            </p>
            <p className={styles.paragraph}>Built using <span className="font-semibold text-white">React.js, Node.js, Express.js and MongoDB</span></p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.github.com"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-blue-gradient rounded font-semibold"
              >
                Source Code
                <img src={github} alt="code" className="w-4" />
              </a>
              <a
                href="https://www.github.com"
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded font-semibold"
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
            <h2 className={styles.heading5}>Scene - OTT Platform</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              numquam nisi ipsam pariatur molestias, sunt tempora eos quaerat
              atque asperiores, ullam quam cupiditate alias.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.github.com"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-blue-gradient rounded font-semibold"
              >
                Source Code
                <img src={github} alt="code" className="w-4" />
              </a>
              <a
                href="https://www.github.com"
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded font-semibold"
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
    default:
      return <></>;
  }
};

export default Project;
