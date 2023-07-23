import { NewsletterForm } from "./NewsletterForm";
import styles from "./style.module.css";
export const NewsletterSection = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className="container sm">
        <h2 className="title2 center">INSCREVA-SE NA NEWSLETTER</h2>
        <NewsletterForm />
      </div>
    </section>
  );
};
