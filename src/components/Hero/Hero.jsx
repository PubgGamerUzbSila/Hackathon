import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../../assets/img/Group.png";
import HeroPhoneImg from "../../assets/icons/IMAGE.svg";

export const Hero = () => {
  return (
    <div className='container'>
      <div className={styles.HeroContainer}>
        <div className={styles.HeroContainerLeft}>
          a<h2 className={styles.heroH2}>Quality cleaning for your home</h2>
          <p className={styles.heroP}>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className={styles.heroBtnSection}>
            <button className={styles.heroBtn}>Get a free quote</button>
            <img
              className={styles.HeroPhoneImg}
              src={HeroPhoneImg}
              alt='phone number'
            />
            <div className={styles.heroAtributs}>
              <p className={styles.heroP}>Call us now</p>
              <h6 className={styles.heroH6}>(414) 567 - 2109</h6>
            </div>
          </div>
        </div>
        <div className={styles.HeroContainerRight}>
          <img className={styles.heroImg} src={HeroImg} alt='HeroImg edi' />
        </div>
      </div>
    </div>
  );
};
