import React from "react";
import styles from "./Article.module.css";
// import img from "../../assets/img/Article_img/properly.png";

export const Article = () => {
  return (
    <>
      <div className={styles.articles}>
        <div className={styles.box}>
          <div className={styles.first_box}>
            <h1 className={styles.article}>Articles & resources</h1>
            <p className={styles.text}>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
          </div>
          <div className={styles.second_box}>
            <button className={styles.get}>Get a free quote</button>
            <button className={styles.browse}>Browse articles</button>
          </div>
        </div>
        <div className={styles.box_2}>
          <div className={styles.best}>
            <img src={""} alt='' />
            <div className={styles.modal}>
              <h2 className={styles.mess}>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h2>
              <p className={styles.lorem}>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className={styles.flex_box}>
                <h2 className={styles.jan}>Jan 28, 2022</h2>
                <div className={styles.rectangle}></div>
              </div>
            </div>
          </div>
          <div className={styles.hello}>
            <img src={""} alt='' />
            <div className={styles.modal_1}>
              <h2 className={styles.mess}>
                How to properly disinfect your phone and other electronics
              </h2>
              <p className={styles.lorem}>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className={styles.flex_box}>
                <h2 className={styles.jan}>Feb 1, 2022</h2>
                <div className={styles.rectangle}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
