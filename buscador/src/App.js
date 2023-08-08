import { FiSearch } from "react-icons/fi";
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite Aqui" required />
        <button className="buttonSearch">
          <FiSearch size={25} color="white"/>
        </button> 
      </div>
    </div>
  );
}

export default App;