import styles, { layout } from "../style";
import { card, project2 } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Scene - OTT Platform
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5s`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In numquam
          nisi ipsam pariatur molestias, sunt tempora eos quaerat atque
          asperiores, ullam quam cupiditate alias.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={project2} alt="card" />
      </div>
    </section>
  );
};

export default CardDeal;
