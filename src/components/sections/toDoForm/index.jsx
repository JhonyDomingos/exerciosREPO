import { useState } from "react";
import { Input } from "../../input";
import { Textarea } from "../../textArea";

export const TodoForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const submit = (event) => {
    event.preventDefault();
    addNote({ title, message });
    setTitle("");
    setMessage("");
  };

  //reatividade para valores inciais de campos
  //reatividade para resetar os campos ao enviar

  return (
    <div>
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
        />

        <Textarea
          label="Mensagem: "
          id="message"
          placeholder="Mensagem"
          value={message}
          setValue={setMessage}
        />
        <button className="button lg full" type="submit">
          Criar nota
        </button>
      </form>
    </div>
  );
};
