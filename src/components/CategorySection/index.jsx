import { CategoryCard } from "./CategoryCard"

export const CategorySection = () => {
    return ( 
        <section>
            <h2 className="title2">Categorias</h2>
            <div>
                <ul>
                    <CategoryCard title="Sapatos" img="#" />
                    <CategoryCard title="Bolsas" img="#" />
                </ul>
            </div>
        </section>
    )
}