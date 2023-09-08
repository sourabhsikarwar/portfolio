import styles, {layout} from "../style"
import { features } from "../constants"

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-4 rounded-[20px]
  ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className={styles.heading6}>
        {title}
      </h4>
      <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="about" className={layout.section}>
      <div className={layout.seciontInfo}>
        <h2 className={styles.heading4}>You do the business, <br className="sm:block hidden"/> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laudantium magnam quibusdam sunt voluptas, perferendis sint animi hic ducimus veritatis, quos reprehenderit consequuntur odit?
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