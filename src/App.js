import PathRoutes from "./components/helpers/Routes.heper.js"
//commons imports
import { useState } from "react";
import axios from "axios";
//Styles
import "./App.css";
//components
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBAr/NavBar.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/From.jsx";
// router-dom
import { Routes, Route } from "react-router-dom";



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
  };

  const onClose = (id) => {
    const characterFiltered = characters.filter(
      (char) => char.id !== Number(id)
    );
    setCharacters(characterFiltered);
  };

  return (
    // <div className="App">
    //   <NavBar onSearch={onSearch} />
    //   <Cards characters={characters} onClose={onClose} />
    // </div>

    <div className="App">
     
        <NavBar onSearch={onSearch} />
        <Routes>
        <Route path={'/'} element={<Form />}/>,
          <Route
            path={PathRoutes.HOME} element={<Cards characters={characters} onClose={onClose} />}/>,
          <Route path={PathRoutes.ABOUT} element={<About />}/>,
          <Route path={PathRoutes.DETAIL} element={<Detail />} />

        </Routes>
     
    </div>
  );
}

export default App;
