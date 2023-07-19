export const ProductCard = ({title, img, price}) => {

    return( 
        <li>
            <img src={img} alt={title} />
            <h3 className="title3">{title}</h3>
            <span className="price">{title}</span>
        </li>
    )
}