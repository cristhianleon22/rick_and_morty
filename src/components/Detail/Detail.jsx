import React, { useState, useEffect } from 'react'
import styles from "./Detail.module.css"
import { useParams } from 'react-router-dom';
import axios from "axios";


const Detail = () => {
  const {id} = useParams();
  const [character, setCharacter] = useState({})

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
          
       }
    });
    return setCharacter({});
 }, [id]);

  return (
     <>
     <div className={styles.wrapperDetail}>

     {character?.name && (
         <div> 
      <h1>{character.name}</h1>
      <h1>❤️: {character.status}</h1>
      <h1>👽:{character.species}</h1>
      <h1>🚻: {character.gender}</h1>
      <h1>🪐:{character.origin?.name}</h1>
      <img src={character.image} alt=""/>
      </div>

     )}


     </div>
     
    
     </>
    
      
      
  

  );
};

export default Detail;