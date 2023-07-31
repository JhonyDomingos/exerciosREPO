import { useState } from "react";
import { Input } from "../../input";
import { Textarea } from "../../textArea";
import { Select } from "../../select";
import styles from "./style.module.scss"

export const TodoForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("tarefas");

  const submit = (event) => {
    event.preventDefault();
    addNote({ title, message, category });
    setTitle("");
    setMessage("");
    setCategory("tarefas");
  };
  //reatividade para valores inciais de campos
  //reatividade para resetar os campos ao enviar

  return (
    <div className={styles.formBox}>
      <h2 className="title two">Cadastre uma nota</h2>
      <form onSubmit={submit}>
        <Input
          label="Titulo: "
          id="title"
          type="text"
          name="title"
          placeholder="Titulo da nota"
          value={title}
          setValue={setTitle}
          required={true}
        />

        <Textarea
          label="Mensagem: "
          id="message"
          placeholder="Mensagem"
          value={message}
          setValue={setMessage}
          required={true}
        />
        <Select
          label="Categoria: "
          id="category"
          value={category}
          setValue={setCategory}
        >
          <option value="tarefas">Tarefas</option>
          <option value="recados">Recados</option>
        </Select>
        <button className="button lg full" type="submit">
          Criar nota
        </button>
      </form>
    </div>
  );
};
