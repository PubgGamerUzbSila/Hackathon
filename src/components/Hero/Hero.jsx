import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../../assets/img/Group.png";
export const Hero = () => {
  return (
    <div className='container'>
      <div className={styles.HeroContainer}>
        <div className={styles.HeroContainerLeft}>
          <h2 className={styles.heroH2}>Quality cleaning for your home</h2>
          <p className={styles.heroP}>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className={styles.heroBtnSection}></div>
        </div>
        <div className={styles.HeroContainerRight}>
          <img src={HeroImg} alt='HeroImg edi' loa />
        </div>
      </div>
    </div>
  );
};
