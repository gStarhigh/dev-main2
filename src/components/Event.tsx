import styles from "../styles/Event.module.css";
import btnstyles from "../styles/Buttons.module.css";

export function Event() {
  return (
    <div className={styles.EventCont}>
      <h1>Evenemang</h1>
      <p>
        lite info här om olika typer av enemang..Gärna text på en bakgrundsbild
      </p>
      <button className={btnstyles.SocialButtons}>Läs mer</button>
    </div>
  );
}
