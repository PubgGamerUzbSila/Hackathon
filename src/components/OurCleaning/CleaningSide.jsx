import React from "react";
import styles from "./CleaningSide.module.css";
import home from "../../assets/img/IMAGE.png";
import true_img from "../../assets/icons/true.svg";
import { Button } from "../UI/Button/Button";

function CleaningSide() {
  return (
    <div className={styles.cleaning}>
      <div className={styles.left}>
        <img src={home} alt='' />
      </div>
      <div className={styles.right}>
        <h2>We cover all areas of your home or office</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className={styles.trues}>
          <div>
            <img src={true_img} alt='check mark' />
            <span>Bathrooms</span>
          </div>
          <div>
            <img src={true_img} alt='check mark' />
            <span>Kitchens</span>
          </div>
          <div>
            <img src={true_img} alt='check mark' />
            <span>Living Rooms</span>
          </div>
          <div>
            <img src={true_img} alt='check mark' />
            <span>Carpets</span>
          </div>
          <div>
            <img src={true_img} alt='check mark' />
            <span>Bedrooms</span>
          </div>
          <div>
            <img src={true_img} alt='check mark' />
            <span>Offices</span>
          </div>
          <div>
            <img src={true_img} alt='check mark' />
            <span>Businesses</span>
          </div>
          <div>
            <img src={true_img} alt='check mark' />
            <span>Windows</span>
          </div>
        </div>
        <Button padding='padding__type2'>Get a free quote</Button>
      </div>
    </div>
  );
}

export default CleaningSide;
