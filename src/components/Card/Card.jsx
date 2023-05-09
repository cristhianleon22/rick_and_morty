import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { name, id, status, species, gender, origin, image, onClose } = props;
  return (
    <div className={styles.wrapperCard}>
      <button
        className={styles.btn}
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <img className={styles.img} src={image} alt="character image" />
      <div>
        <Link to={`/detail/${id}`}>
          <h2 className={styles.name}> {name}</h2>
        </Link>
        <h2 className={styles.status}> ❤️: {status}</h2>
        <h2 className={styles.species}>👽: {species}</h2>
        <h2 className={styles.gender}>🚻: {gender}</h2>
        <h2>{origin.name}</h2>
      </div>
    </div>
  );
}
