import React from "react";
import styles from "./Navbar.module.css";
//Logo
import logo from "../../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className={styles.btns}>
          <p>Cart (0)</p>
          <Button></Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
