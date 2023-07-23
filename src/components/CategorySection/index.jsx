import category1 from "../../assets/category1.svg";
import category2 from "../../assets/category2.svg";
import { CategoryCard } from "./CategoryCard";

export const CategorySection = () => {
  return (
    <div className="container">
      <section>
        <h2 className="title2">Categorias</h2>
        <div>
          <ul>
            <CategoryCard title="Sapatos" img={category1} />
            <CategoryCard title="Bolsas" img={category2} />
          </ul>
        </div>
      </section>
    </div>
  );
};
