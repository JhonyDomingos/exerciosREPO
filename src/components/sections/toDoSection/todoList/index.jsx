import { TodoCard } from "./TodoCard";

export const TodoList = ({ noteList, removeNote }) => {
  return (
    <section>
      <h1>Lista de notas</h1>
      <span>{noteList.length}</span>
      <ul>
        {noteList.map((note) => {
             return <TodoCard key={note.id} id={note.id} title={note.title} message={note.message} removeNote={removeNote}/>;

        })}
      </ul>
    </section>
  );
};
