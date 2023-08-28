import styles, { layout } from "../style";
import { card, project1, project2 } from "../assets";
import Button from "./Button";

const Project = ({ value }) => {
  switch (value) {
    case "1":
      return (
        <section className={layout.section}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Scene - OTT Platform</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              numquam nisi ipsam pariatur molestias, sunt tempora eos quaerat
              atque asperiores, ullam quam cupiditate alias.
            </p>
            <Button styles="mt-10" />
          </div>
          <div className={layout.sectionImg}>
            <img src={project2} alt="card" />
          </div>
        </section>
      );
    case "2":
      return (
        <section className={layout.sectionReverse}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>In A Bin</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              numquam nisi ipsam pariatur molestias, sunt tempora eos quaerat
              atque asperiores, ullam quam cupiditate alias.
            </p>
            <Button styles="mt-10" />
          </div>
          <div className={layout.sectionImg}>
            <img src={project1} alt="card" />
          </div>
        </section>
      );
    case "3":
      return (
        <section className={layout.section}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Scene - OTT Platform</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              numquam nisi ipsam pariatur molestias, sunt tempora eos quaerat
              atque asperiores, ullam quam cupiditate alias.
            </p>
            <Button styles="mt-10" />
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
