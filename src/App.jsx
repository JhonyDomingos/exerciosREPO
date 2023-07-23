import { CardList } from "./components/CardList"
import { fruits } from "./darta/data"
function App() {

 
//Aqui posso fazer o javaScript 
  return (
    fruits.map(fruit => (<CardList key={fruit.id} name={fruit.name} category={fruit.category} price={fruit.price}/>))
   
  )
}

export default App
