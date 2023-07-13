import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Learn More</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        This document also includes a series of ecosystem explanations,
        including white papers, development roadmaps, achievement publications,
        and community data.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
