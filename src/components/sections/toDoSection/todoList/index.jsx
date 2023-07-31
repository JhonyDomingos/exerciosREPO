import { TodoCard } from "./TodoCard";
import { NoteNumbers } from "./noteNumbers";
import styles from "./style.module.scss"

export const TodoList = ({ noteList, removeNote }) => {
  const totalChar = noteList.reduce((preValue, note) => {
    return preValue + note.title.length + note.message.length;
  }, 0);

  return (
    <div className={styles.todoList}>
      <h1 className="title one">Lista de notas</h1>
      <NoteNumbers NoteNumbers={noteList.length} totalChar={totalChar} />
        {noteList.length > 0 ? (
                <ul>
                {noteList.map((note) => {
                  return (
                    <TodoCard
                      key={note.id}
                      id={note.id}
                      category={note.category}
                      title={note.title}
                      message={note.message}
                      removeNote={removeNote}
                    />
                  );
                })}
              </ul>          
        ): (
          <p className="paragraph ">Cadastre sua primeira nota</p>
        )}

    </div>
  );
};
