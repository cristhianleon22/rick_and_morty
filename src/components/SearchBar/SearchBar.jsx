import { useState } from 'react';
import styles from './searchBar.module.css';

export default function SearchBar(props) {
   const{onSearch}=props;
   const [id, setId] = useState ();

   const handleChange =(e) => {
      setId(e.target.value);
      
   };

   return (
      <div className={styles.navbar}>
         <div className={styles.wrapperSearch}>
            <input className={styles.input} type='search'  onChange={handleChange} value={id}/>
            <button className={styles.btn} onClick={() =>{onSearch(id)}}> ➕ Agregar</button>
         </div>
      </div>
      
   );
}
