import React from "react";
import closedEye from "../../assets/images/closed-eye.svg";
import openedEye from "../../assets/images/opened-eye.svg";
import styles from "./Form.module.css";

const INIT_VALUES = {
  phone: "",
  password: "",
  privacyPolicy: false,
  agree: false,
};
const INIT_ERRORS = {
  phone: "",
  password: "",
  privacyPolicy: "",
  agree: "",
};
const MIN_PASSWORD_LENGTH = 6;

const Form = () => {
  const [values, setValues] = React.useState(INIT_VALUES);
  const [errors, setErrors] = React.useState(INIT_ERRORS);
  const [passwordFieldType, setPasswordFieldType] = React.useState("password");

  const handleInput = (name) => (e) => {
    setValues((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleCheckbox = (name) => (e) => {
    setValues((prev) => ({ ...prev, [name]: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { phone: "", password: "", privacyPolicy: "", agree: "" };
    const { phone, password, privacyPolicy, agree } = values;

    if (!phone) {
      newErrors.phone = "Обязательно к заполнению";
    }
    if (!password) {
      newErrors.password = "Обязательно к заполнению";
    } else if (password.length < MIN_PASSWORD_LENGTH) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
    }
    if (!privacyPolicy) {
      newErrors.privacyPolicy = "Обязательно к заполнению";
    }
    if (!agree) {
      newErrors.agree = "Обязательно к заполнению";
    }

    if (Object.values(newErrors).some((error) => !!error)) {
      setErrors(newErrors);
    } else {
      setValues(INIT_VALUES);
      setErrors(INIT_ERRORS);
      alert("Спасибо");
    }
  };

  const handlePasswordClick = () => {
    setPasswordFieldType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.main}>
        <p className={styles.title}>Регистрация</p>
        <div className={styles.inputList}>
          <div className={styles.inputItem}>
            <label htmlFor="phone">Номер телефона</label>
            <input
              type="text"
              id="phone"
              value={values.phone}
              name="phone"
              placeholder="+375"
              onChange={handleInput("phone")}
            />
            {!!errors.phone && (
              <p className={styles.errorMessage}>{errors.phone}</p>
            )}
          </div>
          <div className={styles.inputItem}>
            <label htmlFor="pwd">Пароль</label>
            <div className={styles.passwordField}>
              <input
                type={passwordFieldType}
                id="pwd"
                value={values.password}
                placeholder="Придумайте пароль"
                name="password"
                onChange={handleInput("password")}
              />
              <button type="button" onClick={handlePasswordClick}>
                {passwordFieldType === "password" ? (
                  <img src={closedEye} alt="Показать пароль" />
                ) : (
                  <img src={openedEye} alt="Скрыть пароль" />
                )}
              </button>
            </div>
            {!!errors.password && (
              <p className={styles.errorMessage}>{errors.password}</p>
            )}
          </div>
        </div>
        <div className={styles.checkboxList}>
          <div className={styles.checkboxItem}>
            <input
              type="checkbox"
              id="check1"
              checked={values.privacyPolicy}
              name="privacyPolicy"
              onChange={handleCheckbox("privacyPolicy")}
            />
            <label htmlFor="check1">
              <p>Мне больше 21 года.</p>
              <p>
                Я согласен и принимаю{" "}
                <a href="/link">"Правила приема ставок"</a> и{" "}
                <a href="/link">"Политику конфиденциальности"</a>
              </p>
            </label>
            {!!errors.privacyPolicy && (
              <p className={styles.errorMessage}>{errors.privacyPolicy}</p>
            )}
          </div>
          <div className={styles.checkboxItem}>
            <input
              type="checkbox"
              id="check2"
              checked={values.agree}
              name="agree"
              onChange={handleCheckbox("agree")}
            />
            <label htmlFor="check2">
              <p>
                Я принимаю участие и согласен с{" "}
                <a href="/link">условиями бонуса</a>
              </p>
            </label>
            {!!errors.agree && (
              <p className={styles.errorMessage}>{errors.agree}</p>
            )}
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Регистрация
        </button>
      </div>
    </form>
  );
};

export default Form;
