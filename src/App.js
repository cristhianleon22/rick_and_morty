//commons imports 
import { useState } from "react";
import axios from "axios";
//Styles
import "./App.css";
//components 
import Cards from "./components/Cards/Cards.jsx";
import NAvBar from "./components/NavBAr/NavBar.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  
  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) =>{
   const characterFiltered = characters.filter((char)=> char.id !== Number(id))
   setCharacters(characterFiltered)
  }



  return (
    <div className="App">
      <NAvBar onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
