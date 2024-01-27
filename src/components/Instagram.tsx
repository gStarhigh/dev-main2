import styles from "../styles/Instagram.module.css";

import btnstyles from "../styles/Buttons.module.css";

export function Instagram() {
  return (
    <div className={styles.InstagramCont}>
      <h4>Följ oss på Instagram</h4>
      <p>Visa senaste 6? bilderna från instagram kontot</p>
      <button className={btnstyles.SocialButtons}>@Starhoggard</button>
    </div>
  );
}
