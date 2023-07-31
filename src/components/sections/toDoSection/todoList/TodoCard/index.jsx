import styles from "./style.module.scss";

export const TodoCard = ({ title, message, category, removeNote, id }) => {
  return (
    <li
      className={`${styles.todoCard} 
      ${category === "tarefas" ? styles.orange : styles.blue}`}
    >
      <h2 className="titulo two">{title}</h2>
      <p className="paragraph">{message}</p>
      <button className="button sm" onClick={() => removeNote(id)}>
        Excluir
      </button>
    </li>
  );
};
