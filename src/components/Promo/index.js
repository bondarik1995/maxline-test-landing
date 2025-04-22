import promoLg from "../../assets/images/promo-lg.png";
import promo from "../../assets/images/promo.png";
import promoSubtitleLg from "../../assets/images/promo-subtitle-lg.png";
import promoSubtitle from "../../assets/images/promo-subtitle.png";
import styles from "./Promo.module.css";

const Promo = () => {
  return (
    <div className={styles.container}>
      <picture className={styles.image}>
        {/* <source media="(min-width:1024px)" srcSet={promoLg} /> */}
        <source media="(min-width:1440px)" srcSet={promoLg} />
        <img src={promo} alt="200 фриспинов" />
      </picture>
      <picture className={styles.imageSubtitle}>
        {/* <source media="(min-width:1024px)" srcSet={promoSubtitleLg} /> */}
        <source media="(min-width:1440px)" srcSet={promoSubtitleLg} />
        <img src={promoSubtitle} alt="за регистрацию" />
      </picture>
    </div>
  );
};

export default Promo;
