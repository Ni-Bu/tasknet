import styles from "../css/MainPage.module.css";
import logo from "../img/logo_PNG_Transparent.png";
import { useHistory } from "react-router-dom";
function MainPage() {
  let history = useHistory();
  const handleClick = (event) => {
    event.preventDefault();
    history.push("/login");
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.mainContentContainer}>
          <div className={styles.mainContent}>
            <img src={logo} alt="logo" className={styles.logo}></img>
            <div className={styles.text}>
              Welcome to TaskNet. Where we help you help yourself.
            </div>
            <button onClick={handleClick} className={styles.btn}>
              Log In
            </button>
          </div>
        </div>
        <ul className={styles.materials}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default MainPage;
