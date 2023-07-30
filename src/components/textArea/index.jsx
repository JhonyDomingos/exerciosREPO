export const Textarea = ({ label, id, placeholder, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></textarea>
    </div>
  );
};
