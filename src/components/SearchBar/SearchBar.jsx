import styles from './searchBar.module.css';

export default function SearchBar(props) {
   const{onSearch}=props;
   return (
      <div className={styles.wrapperSearch}>
         <input className={styles.input} type='search' />
         <button clssNAme={styles.btn}onClick={onSearch}> ➕ Agregar</button>
      </div>
   );
}
