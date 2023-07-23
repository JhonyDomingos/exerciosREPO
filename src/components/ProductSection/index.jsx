import { products } from "../../data/product";
import { ProductCard } from "./ProductCard";
import styles from "./style.module.css"


//todo map precisa de uma chave unica para diferenciar os itens
export const ProductSection = () => {
  return (
    <section className={styles.productSection}>
    <div className="container">     
        <h2 className="title2">Produtos em Destaque</h2>
        <ul className={styles.productList}>
          {products.map(product => {     
            //a chave é obrigatoria para DOM virtural conseguir diferenciar os diferentes itens       
            return <ProductCard key={product.id} title={product.name} img={product.img} price={product.price}/>
          })}
        </ul>     
    </div>
    </section>
  );
};
