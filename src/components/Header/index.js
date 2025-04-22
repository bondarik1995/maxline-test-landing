import logoLg from "../../assets/images/logo-lg.svg";
import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <picture>
        <source media="(min-width:1024px)" srcSet={logoLg} />
        <img src={logo} alt="CasinoBet" />
      </picture>
    </header>
  );
};

export default Header;
