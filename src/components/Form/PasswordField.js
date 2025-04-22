import React from "react";
import closedEye from "../../assets/images/closed-eye.svg";
import openedEye from "../../assets/images/opened-eye.svg";
import styles from "./Form.module.css";

const PasswordField = ({ value, error, onChange }) => {
  const [passwordFieldType, setPasswordFieldType] = React.useState("password");

  const handlePasswordClick = () => {
    setPasswordFieldType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className={styles.inputItem}>
      <label htmlFor="pwd">Пароль</label>
      <div className={styles.passwordField}>
        <input
          type={passwordFieldType}
          id="pwd"
          value={value}
          placeholder="Придумайте пароль"
          name="password"
          onChange={onChange}
        />
        <button type="button" onClick={handlePasswordClick}>
          {passwordFieldType === "password" ? (
            <img src={closedEye} alt="Показать пароль" />
          ) : (
            <img src={openedEye} alt="Скрыть пароль" />
          )}
        </button>
      </div>
      {!!error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default PasswordField;
