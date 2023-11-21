import React from "react";
import styles from "./OurService.module.css";
import table from "../../assets/img/table.svg";
import cards from "../../assets/img/cards.svg"
import vacuumCleaner from "../../assets/img/vacuum cleaner.svg"
function OurService() {
  return (
    <div className={styles.ourService}>
      <div className={styles.title}>
        <h3>How our service works?</h3>
        <p>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
          nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <img src={table} alt="table" />
          <h4>1. Schedule online</h4>
          <p>
            Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
            sed n.
          </p>
        </div>
        
        <div className={styles.box}>
          <img src={cards} alt="cards" />
          <h4>2. Pay online easily</h4>
          <p>
          Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.
          </p>
        </div>

        <div className={styles.box}>
          <img src={vacuumCleaner} alt="vacuumCleaner" />
          <h4>3. Get your house cleaned</h4>
          <p>
          Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button>Get a free quote</button>
        <button>Explore services</button>
      </div>
    </div>
  );
}

export default OurService;
