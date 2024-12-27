import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="wallet" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
      src={bill}
      alt="billing"
      className="w-[90%] h-[60%] relative z-[5]"
    />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[70%] h-[40%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[70%] h-[40%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      遊戲名稱:浮鏈星域 <br className="sm:block hidden" /> Floatchain Starrealm
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      遊戲風格 : 浮鏈星域是一款 3D RPG，帶你穿梭在充滿奇幻與科技交織的星域中。
      在這裡，你將化身成為冒險者，透過冒險、經營、交易，解鎖區塊鏈的奧秘，塑造屬於自己的星域傳奇。

      系統 : Windows，

      預計發行日 : 未定，

      預計發行平台 : Steam，Epic Games，熊網鏈官網。     
      </p>


    </div>
  </section>
);

export default Billing;
