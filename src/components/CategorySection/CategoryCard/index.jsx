import styles from "./style.module.css"
export const CategoryCard = ({title, img}) => {
    console.log(title, img)
    return (
        <li className={styles.categoryCard}>
            <img className="categoryImG " src={img} alt={title} />
            <h3 className="title3 center">{title}</h3>
        </li>
    )
}