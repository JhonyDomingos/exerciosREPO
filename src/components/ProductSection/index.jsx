import { ProductCard } from "./ProductCard"

export const ProductSection = () => {
    return (
        <section>
            <h2 className="title2">Produtos em Destaque</h2>
            <ul>
            <ProductCard title="Blazer Braco Elegante" img="#" price={490.00}/>
            <ProductCard title="Sapatos Amarelos" img="#" price={490.00}/>
        
        
            </ul>
        </section>
    )
}