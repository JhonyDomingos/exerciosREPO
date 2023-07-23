

export const CardList = ({name,category,price}) => {
    return (
        <ul>
            <li>
                <p>{name}</p>
                <p>{category}</p>
                <p>{price}</p>                
            </li>
        </ul>
    )
}