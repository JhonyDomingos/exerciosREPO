import { ProductCard } from "./ProductCard";

export const ProductSection = () => {
  return (
    <div className="container">
      <section>
        <h2 className="title2">Produtos em Destaque</h2>
        <ul>
          <ProductCard title="Blazer Braco Elegante" img="#" price={490.0} />
          <ProductCard title="Sapatos Amarelos" img="#" price={490.0} />
        </ul>
      </section>
    </div>
  );
};
