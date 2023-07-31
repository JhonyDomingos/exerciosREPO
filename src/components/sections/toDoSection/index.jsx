import { useState } from "react";
import { TodoForm } from "../toDoForm";
import { TodoList } from "./todoList";
// import { v4 as uuidv4 } from "uuid"; //Usando o uuid
import styles from "./style.module.scss"
export const ToDoSection = () => {
  const [noteList, setNoteList] = useState([]);

  const addNote = (formData) => {
    //uuid é uma lib que gera id unicos

    //  const newNote = {...formData, id: uuidv4() }; //usando o uuid
    const newNote = { ...formData, id: crypto.randomUUID() };
    setNoteList([...noteList, newNote]);
    //crypto.randomUUID é um metodo nativo do js, tbm gera id unico
    console.log("FormData: ", formData);
    console.log("New Note: ", newNote);
  };

  const removeNote = (removeId) => {
    const newList = noteList.filter((note) => note.id != removeId);
    setNoteList(newList);
  };
  return (
    <section>
      <div className="container">
        <div className={styles.flexBox}>
        <TodoForm addNote={addNote} />
        <TodoList noteList={noteList} removeNote={removeNote} />
        </div>
      </div>
    </section>
  );
};
