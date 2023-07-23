import banner from "../../assets/banner.svg";
import styles from "./style.module.css"
export const BannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <div className="container">
        <div className={styles.flexbox}>
          <img  className="imgbanner" src={banner} alt="Banner Principal" />
          <div>
            <h1 className="title">Fashion Store</h1>
            <p className="paragraph">
              Fique por dentro das nossas últimas promoções e novidades
            </p>
            <a className="btn" href="#">
              Confira as ofertas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
