import styles from "./style.module.scss"
export const Textarea = ({ label, id, required, placeholder, value, setValue }) => {
  return (
    <div className={styles.textareaBox}>
      <label className="paragraph" htmlFor={id}>{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required={required}
      ></textarea>
    </div>
  );
};
