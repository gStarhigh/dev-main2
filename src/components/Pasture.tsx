import styles from "../styles/Pasture.module.css";
import btnstyles from "../styles/Buttons.module.css";

export function Pasture() {
  return (
    <div className={styles.PastureCont}>
      <h1>Lösdrift</h1>
      <p>Information om lösdriften</p>
      <button className={btnstyles.SocialButtons}>Läs mer</button>
    </div>
  );
}
