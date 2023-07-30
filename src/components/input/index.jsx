export const Input = ({ label, id, type, placeholder, value, setValue }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
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


