import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="wallet" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[60%] h-[90%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        CoinInn Wallet <br className="sm:block hidden" /> Explore The New World
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Coininn Exchange is an important partner of ours, distinguished in the
        blockchain exchange industry for its outstanding business strength and
        excellent user experience. They are committed to providing users with a
        secure, convenient, and transparent trading platform. We have
        collaborated with Coininn Exchange with the aim of delivering the best
        trading experience and services to our users.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a
          href="https://apps.apple.com/us/app/coininn-wallet-crypto-web3/id6448525015"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={apple}
            alt="google_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.coininn.wallet"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </a>
      </div>
    </div>
  </section>
);

export default Billing;
