import React from "react";
import styles from "./Button.module.css";
export const Button = ({ children, padding }) => {
  return (
    <>
      <button className={`${styles["btn"]} ${styles[padding]}`}>{children}</button>
    </>
  );
};
