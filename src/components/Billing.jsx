import { apple, bill, google, project1 } from "../assets"
import styles, { layout } from "../style"

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={project1} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>In A Bin</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, aliquid sed quas placeat facere consectetur, mollitia explicabo provident reprehenderit commodi, molestias dolore aliquam! Dolorum.</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt:6">
          <img src={apple} alt="apple" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default Billing