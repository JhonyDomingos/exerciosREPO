import { Header } from "../../components/header";
import { ToDoSection } from "../../components/sections/toDoSection";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <ToDoSection />
      </main>
    </>
  );
};
