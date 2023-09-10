import styles from "../style";

const CTA = () => (
  <section id="contact"
    className={`bg-white dark:bg-white dark:bg-opacity-10 rounded-xl relative overflow-hidden bg-opacity-10 ${styles.marginY}`}
  >
    <div className="w-64 h-64 bg-blue-gradient dark:bg-blue-gradient -top-28 -right-12 absolute rounded-full md:block hidden"/>
    <div className="flex flex-col gap-20 p-8 sm:p-12 items-center">
      <div className={styles.heading4}>
        Code That Drives Results!
        <span className="block text-gradient dark:text-gradient font-bold">Let's Get Started.</span>
      </div>
      <div className="flex flex-col md:flex-row justify-end items-start gap-8 sm:gap-16 md:items-end w-full">
        <div className="flex flex-col rounded-md shadow">
          <p className="text-white dark:text-white sm:text-[16px] text-[12px]">
            Mail me at
          </p>
          <p className={`${styles.heading6} text-gradient dark:text-gradient`}>
            work.sourabh@gmail.com
          </p>
        </div>
        <div className="flex flex-col rounded-md shadow">
          <p className="text-white dark:text-white sm:text-[16px] text-[12px]">
            or call me at
          </p>
          <p className={`${styles.heading6} text-gradient dark:text-gradient`}>
            +91 8989151788
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
