function App() {
  const myDatas = {
    nome: "Jhonatan Domingos",  
    module: "Modúlo 3",
    age: 31, 
  }   
//Aqui posso fazer o javaScript 
  return (
    //Aqui é somente o JSX 
    <>
      <li>{myDatas.nome}</li>
      <li>{myDatas.module}</li>
      <li>{myDatas.age}</li>
    </>
  )
}

export default App
