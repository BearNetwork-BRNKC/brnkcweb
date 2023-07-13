import { card } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Security <br className="sm:block hidden" /> Trustworthiness.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We strive to provide a healthy, secure, and stable financial environment
        for sectors such as finance, supply chain management, and digital asset
        management.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
