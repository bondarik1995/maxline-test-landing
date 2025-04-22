import Header from "../components/Header";
import Promo from "../components/Promo";
import Form from "../components/Form";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.promo}>
        <Header />
        <Promo />
      </div>
      <Form />
    </div>
  );
};

export default App;
