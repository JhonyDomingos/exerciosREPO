import { CardSection } from "./components/CardSection";
import "./styles/index.css";
function App() {

  return (    
    <div className="App">
      <CardSection name="João" age={28} country="Brasil"/>
      <CardSection name="Gabriel" age={18} country="Argentina"/>
      <CardSection name="Luiza" age={28} country="França"/>
    </div>

  );
}

export default App
