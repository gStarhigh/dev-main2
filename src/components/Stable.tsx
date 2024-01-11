import styles from "../styles/Stable.module.css";
import btnstyles from "../styles/Buttons.module.css";

export function Stable() {
  return (
    <div className={styles.StableCont}>
      <h1>Stall</h1>
      <p>Information om stallet och boxplatser</p>
      <button className={btnstyles.SocialButtons}>Läs mer</button>
    </div>
  );
}
