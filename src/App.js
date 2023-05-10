import PathRoutes from "./components/helpers/Routes.heper.js";
//commons imports
import { useEffect, useState } from "react";
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
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

const EMAIL = "ejemplo@gmail.com";
const PASSWORD = "1Password";


function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
    }
 }

  const [characters, setCharacters] = useState([]);

  const { pathname } = useLocation();

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

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  

  return (
    // <div className="App">
    //   <NavBar onSearch={onSearch} />
    //   <Cards characters={characters} onClose={onClose} />
    // </div>

    <div className="App">
      {pathname !== "/" && <NavBar onSearch={onSearch} />}

      <Routes>
        <Route path={"/"} element={<Form login={login}/>} />,
        <Route
          path={PathRoutes.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        ,
        <Route path={PathRoutes.ABOUT} element={<About />} />,
        <Route path={PathRoutes.DETAIL} element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
