import styles from "../styles/News.module.css";

export function News() {
  return (
    <div className={styles.NewsContainer}>
      <h4>Nyheter</h4>
      <p>
        Ett inlägg här med bild, header och lite text, en knapp med "läs mer"
      </p>
      <p>
        Ett inlägg här med bild, header och lite text, en knapp med "läs mer"
      </p>
      <p>
        Ett inlägg här med bild, header och lite text, en knapp med "läs mer"
      </p>
    </div>
  );
}
