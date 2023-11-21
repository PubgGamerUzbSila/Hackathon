import React from "react";
//container uchun
import "../../App.css";
//component uchun
import styles from "./Navbar.module.css";
//Logo
import logo from "../../assets/icons/logo.svg";
//components
import { Button } from "../../components/UI/Button/Button";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav>
          <div className={styles.links}>
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
          </div>
          <div className={styles.btns}>
            <p>Cart (0)</p>
            <Button padding="padding__type1">Get a free quote</Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
