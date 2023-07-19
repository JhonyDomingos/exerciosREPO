import { Fragment } from "react";
import { BannerSection } from "../../components/BannerSection";
import { CategorySection } from "../../components/CategorySection";
import { Footer } from "../../components/Footer";
import { NewsletterSection } from "../../components/NewsLetterSection";
import { ProductSection } from "../../components/ProductSection";
import { Header } from "../../components/header";

//Fragment - TAG FANTASMA
// <></> - Essa sintaxe não pode receber uma chave
//<Fragment> </Fragment> - Essa pode receber uma chave
export const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <BannerSection />
        <CategorySection />
        <ProductSection />
        <NewsletterSection />
      </main>
      <Footer />
    </Fragment>
  );
};
