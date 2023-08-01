
import {PrimeiroComponente} from "./components/components"

import FooterComponent from "./components/footer"
import AboutSectionComponent from "./components/about"
import HeaderComponent from "./components/header"

function App() {


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
        
      
   
 
    
=======
    //Aqui é somente o JSX 
    <main className="App">
      <HeaderComponent />
        <AboutSectionComponent />
        <FooterComponent />
    </main>

  )
}

export default App
