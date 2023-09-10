import styles, {layout} from "../style"
import { features } from "../constants"

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-4 rounded-[20px]
  ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue dark:bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className={styles.heading6}>
        {title}
      </h4>
      <p className="font-poppins font-normal text-[14px] text-dimWhite dark:text-dimWhite leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="about" className={layout.section}>
      <div className={layout.seciontInfo}>
        <h1 className="bg-white/10 dark:bg-white/10 px-4 py-1 rounded-full text-secondary dark:text-secondary font-semibold mb-2 w-fit">About me</h1>
        <h2 className={styles.heading4}>Transforming ideas into<br className="sm:block hidden"/> interactive digital realities.</h2>
        <p className={`${styles.paragraph2} max-w-[470px] mt-4`}>
        Welcome to my world of full stack development! I am Sourabh Sikarwar, a seasoned full stack developer with a passion for crafting innovative digital solutions that seamlessly blend front-end aesthetics with back-end functionality. With the experience of tech industry through internships and  projects, I have honed my skills to provide comprehensive, end-to-end web development services.
        </p>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business