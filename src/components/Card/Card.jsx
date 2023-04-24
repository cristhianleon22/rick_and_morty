import styles from './Card.module.css';

export default function Card(props) {
   const{name, status, species, gender, origin, image, onClose}=props;
   return (
      <div className={styles.wrapperCard}>
         <button className={styles.btn} onClick={onClose}>X</button>
         <img className={styles.img} src={image} alt='character image' />
         <div>
         <h2 className={styles.name}> {name}</h2>
         <h2 className={styles.status}> ❤️: {status}</h2>
         <h2 className={styles.species}>👽: {species}</h2>
         <h2 className={styles.gender}>🚻: {gender}</h2>
         <h2>{origin.name}</h2>
         </div>
        
      </div>
   );
}
