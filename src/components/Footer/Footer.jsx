import React from "react";
import styles from "./Footer.module.css";
import { Button } from "../UI/Button/Button";
import logo from "../../assets/icons/logo.svg";
const Footer = () => {
  return (
    <>
      <div className="container">
        <footer>
          <div className={styles["footer-top"]}>
            <div className={styles["footer-content"]}>
              <div className={styles.content}>
                <h1>Quality cleaning for your home</h1>
                <p>
                  Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                  eiusmo.
                </p>
              </div>
              <div className={styles.spans}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles.contact}>
              <h1>Contact us</h1>
              <ul>
                <li>
                  <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
                </li>
                <li>
                  <p href="#">(414) 567 - 2109</p>
                </li>
                <li>
                  <p>contact@cleaning.com</p>
                </li>
              </ul>
            </div>
            <div className={styles.hours}>
              <h1>Hours</h1>
              <div className={styles.datas}>
                <h1>Monday to Friday</h1>
                <p>6:00 AM - 9:00 PM</p>
              </div>
              <div className={styles.datas}>
                <h1>Saturday & Sunday</h1>
                <p>8:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className={styles["free-time"]}>
              <h1>Get a free estimate</h1>
              <span>(414) 567 - 2109</span>
              <p>
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <Button padding="padding__type2">Request a free quote</Button>
            </div>
          </div>
          <div className={styles["footer-bottom"]}>
            <div className={styles["footer-logo"]}>
              <img src={logo} alt="logo" />
            </div>
            <p>
              Copyright © Cleaning X | Designed by <span>BRIX Templates</span>-
              Powered by <span>Webflow</span>-<span>Licenses</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
