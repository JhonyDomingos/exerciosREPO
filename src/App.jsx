import { blogApi, fruitApi } from "./services/api";
import { useState } from "react";
import { NewsSection } from "./components/section";



const App = () => {
  //função de estado para armazenar o json da  API
  const [fruitList, setFruitList] = useState([]);
  const [blogList, setBlogList] = useState([]);

  const getFruits = async () => {
    //await para lidar com promisses
    //Podemos fazer as requisições do tipo GET só com o endereço da API
    // const response = await fetch("https://fruit-fake-api.onrender.com/fruits");
    // setFruitList(response);

    // //retorna dados no formato JSON
    // const json = await response.json();
    // console.log(json);
    const { data } = await fruitApi.get("fruits");
    setFruitList(data);
  };
  const getNews = async () => {
    try {
      const { data } = await blogApi.get("news");
      setBlogList(data);
      console.log(data);
    } catch (error ){
      console.log("Deu Ruim");
      console.log(error)
    //  throw new Error("Deu ruim")
    //  trhow quando é ultilizado , porém ele interrompe a execução do código.

    }
  };
  return (
    <>
      <div className="App">
      <NewsSection />
        <ul>
          {fruitList.map((fruit) => {
            return (
              <li key={fruit.id}>
                <h3>{fruit.name}</h3>
                <p>{fruit.category}</p>
                <p>{fruit.price}</p>
              </li>
            );
          })}
        </ul>
        <button onClick={getFruits}>Carregar Frutas</button>
        <button onClick={getNews}>Carregar noticias</button>
      </div>
    </>
  );
};

export default App;
