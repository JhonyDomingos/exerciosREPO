import { BannerSection } from "../../components/BannerSection";
import { CategorySection } from "../../components/CategorySection";
import { NewsletterSection } from "../../components/NewsLetterSection";
import { ProductSection } from "../../components/ProductSection";
import { DefaultTemplate } from "../../components/DefaultTemplate"

//Fragment - TAG FANTASMA
// <></> - Essa sintaxe não pode receber uma chave
//<Fragment> </Fragment> - Essa pode receber uma chave
export const HomePage = () => {
  return (

    <DefaultTemplate>
      {/* Isso é o valor de children para DefaltTemplate*/}
        <BannerSection />
        <CategorySection />
        <ProductSection />
        <NewsletterSection />     
    </DefaultTemplate>

  );
};
