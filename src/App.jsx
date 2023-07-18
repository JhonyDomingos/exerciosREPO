import {PrimeiroComponente} from "./components/components"

function App() {
  const myDatas = {
    nome: "Jhonatan Domingos",  
    module: "Modúlo 3",
    age: 31, 
  }   
      
  return (
        //Aqui é somente o JSX    
  
      
      <div>
        <li>{myDatas.nome}</li>
        <li>{myDatas.module}</li>
        <li>{myDatas.age}</li>
        <PrimeiroComponente />
      </div>
        
      
   
 
    
  )
}

export default App
