import React from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneField from "./PhoneField";
import PasswordField from "./PasswordField";
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

  const handleInput = (name) => (e) => {
    setValues((prev) => ({
      ...prev,
      [name]: name === "phone" ? e : e.target.value,
    }));
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
    } else if (!isValidPhoneNumber(phone)) {
      newErrors.phone = "Введите корректный номер телефона";
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

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.main}>
        <p className={styles.title}>Регистрация</p>
        <div className={styles.inputList}>
          <PhoneField
            value={values.phone}
            onChange={handleInput("phone")}
            error={errors.phone}
          />
          <PasswordField
            value={values.password}
            onChange={handleInput("password")}
            error={errors.password}
          />
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
