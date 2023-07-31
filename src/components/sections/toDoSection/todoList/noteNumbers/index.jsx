import styles from "./style.module.scss"
export const NoteNumbers = ({NoteNumbers, totalChar}) => {
  return (
    <div className={styles.numbersBox}>
      <span className="paragraph">Notas: <strong>{NoteNumbers}</strong></span>
      <span className="paragraph">Caracteres:<strong>{totalChar}</strong></span>
    </div>
  );
};
