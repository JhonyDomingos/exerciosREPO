export const TodoCard = ({ title, message, removeNote, id}) => {
  return (
    <li>
      <h2 className="titulo two">{title}</h2>
      <p className="paragraph">{message}</p>
      <button className="button sm" onClick={() => removeNote(id)}>Excluir</button>
    </li>
  );
};
