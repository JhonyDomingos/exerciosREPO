import { useState } from "react";

function App() {
  // const [variável, funcaoParaModificarEssaVariavel] = useState(0)
  // funcaoParaModificarEssaVariavel(novoValor)
  // funcaoParaModificarEssaVariavel(1)

  //O estado ele é semelhante a uma variável no sentido que é capaz de armazenar qualquer valor do javascript.

  //O estado ao ter seu valor alterado , reconstrói tudo que está vinculado a ele. isso se chama reatividade

  //O estado é imutavel, não pode ser alterado de forma direta
  /*
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  const removeCount =() => {
    setCount(count - 1)
  }
  */
  const [fruitList, setFruitList] = useState([
    {
      id: 1,
      name: "banana",
      price:5.08,
    },
    {
      id: 2,
      name: "Kiwi",
      price:8.03,
    },
  ]);

  const total = fruitList.reduce((prevValue, fruit) => {
    return prevValue + fruit.price
  },0)

  console.log(total)
  const newItem = { id: 3, name: "Morango", price:13.89, };
  const addFruit = () => {    
     setFruitList([ ...fruitList ,newItem])
  };

  return (
    <div className="App">
      <button onClick={addFruit}>Adicionar Fruta</button>
      {fruitList.map(fruit => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
      <p>{total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</p>
    </div>
  );
}

export default App;
