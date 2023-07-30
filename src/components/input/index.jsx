import styles from "./style.module.scss";
export const Input = ({ label, id, type, placeholder, value, setValue }) => {
  return (
    <div className={styles.inputBox}>
      <label className="paragraph" htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />      
    </div>
  );
};


