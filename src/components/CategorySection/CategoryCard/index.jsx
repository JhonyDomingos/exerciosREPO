export const CategoryCard = ({title, img}) => {
    console.log(title, img)
    return (
        <li>
            <img src={img} alt={title} />
            <h3 className="title3">{title}</h3>
        </li>
    )
}