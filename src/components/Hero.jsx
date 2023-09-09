import styles from "../style";
import { profile } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={styles.heading2}>
            Hi, I am <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Sourabh Sikarwar</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A passionate Full Stack Web Developer 🚀 having an experience of
          building Web applications with JavaScript / Reactjs / Nodejs /
          Expressjs / MongoDB and some other cool libraries and frameworks.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={profile} alt="robot" className="w-[80%] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
