import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="honors" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
      src={bill}
      alt="billing"
      className="w-[100%] h-[90%] relative z-[5]"
    />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[80%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[80%] h-[65%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        全球永續數位生態貢獻<br className="sm:block hidden" />Global Sustainable Digital Ecosystem Contribution
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        BearNetworkChain 透過與「臺中市室內設計文教協會 (Interior Design Culture Education Association, IDCEA)」的深度合作，成功將民政選務系統，部署於其去中心化架構之上。
      </p>


    </div>
  </section>
);

export default Billing;
