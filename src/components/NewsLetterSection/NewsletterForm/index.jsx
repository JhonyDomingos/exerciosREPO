import styles from "./style.module.css"

export const NewsletterForm = () => {
    return(
        <form className={`form ${styles.form}`}>
            <input  type="email" name="email" id="email" placeholder="e-mail"/>
            <button  className="btn" type="submit">Cadastre-se</button>
        </form>
    )
}