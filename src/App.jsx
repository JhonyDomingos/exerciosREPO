import FooterComponent from "./components/footer"
import AboutSectionComponent from "./components/about"
import HeaderComponent from "./components/header"

function App() {

 
//Aqui posso fazer o javaScript 
  return (
    //Aqui é somente o JSX 
    <main className="App">
      <HeaderComponent />
        <AboutSectionComponent />
        <FooterComponent />
    </main>
  )
}

export default App
