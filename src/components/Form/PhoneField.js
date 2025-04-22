import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "./Form.module.css";

const PhoneField = ({ value, error, onChange }) => {
  return (
    <div className={styles.inputItem}>
      <label htmlFor="phone">Номер телефона</label>
      <PhoneInput
        international
        defaultCountry="BY"
        placeholder="+375"
        value={value}
        onChange={onChange}
        className={styles.phoneInput}
      />
      {!!error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default PhoneField;
