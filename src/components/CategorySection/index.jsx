import { CategoryCard } from "./CategoryCard";
import { category } from "../../data/category";
import styles from "./style.module.css"

export const CategorySection = () => {
  return (
    <section className={styles.categorySection}>
      <div className="container">
        <h2 className="title2">Categorias</h2>
        <ul className={styles.categoryList}>
          {category.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              img={category.img}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
