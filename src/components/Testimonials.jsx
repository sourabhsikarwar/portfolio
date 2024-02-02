import styles, { layout } from "../style";
import { dennisPhoto, quotes } from "../assets";

const Testimonials = () => {
  return (
    <section
      id="projects"
      className={`${layout.sectionCol} ${styles.marginY} items-center gap-8`}
    >
      <div className="w-24 aspect-square">
        <img
          src={quotes}
          alt="quotes"
          className="w-full h-full object-cover rotate-180"
        />
      </div>
      <p
        className="w-full text-gray-100 md:w-4/5 mx-auto text-center text-md md:text-xl paragraph"
      >
        Sourabh's ability to bring fresh ideas to the table was truly
        commendable. He took the time to understand my vision and business
        needs, offering innovative solutions that exceeded my expectations.
        Throughout the entire process, Sourabh exhibited remarkable patience,
        ensuring that every detail was meticulously addressed and that I was
        comfortable with each stage of development.
      </p>
      <div className="h-2 w-12 bg-secondary dark:bg-secondary rounded-full mb-2" />
      <div className="flex flex-col gap-1 items-center">
        <div className="w-24 aspect-square rounded-full overflow-hidden p-1 bg-secondary">
          <img
            src={dennisPhoto}
            alt="client_photo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="handWritten text-white text-5xl mt-2">Dennis Dubbala</h1>
        <p className={styles.paragraph}>
          Product Lead, <span className="text-gradient">K2Cloud</span>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
