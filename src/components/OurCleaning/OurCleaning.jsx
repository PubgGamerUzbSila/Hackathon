import React from "react";
import styles from "./OurCleaning.module.css";

export default function OurCleaning() {
  return (
    <div className={styles.ourCleaning}>
      <div className={styles.container}>
        <h2>
          Our cleaning services have <br /> no comparison
        </h2>
        <p>
          Lobortis mattis odio leo eget mauris met aliquet semper molestie
          <br /> sollicitudin congue massa mauris lectus vitae cras viverra
          gravida sapien.
        </p>
        <div className={styles.parent}>
          <div className={styles.clients}>
            <img src="/src/assets/img/clients.png" alt="clients" />
            <div className={styles.client}>
              <p>CLIENTS</p>
              <span>3,480+</span>
            </div>
          </div>
          <div className={styles.clients}>
            <img src="/src/assets/img/jobs_done.png" alt="clients" />
            <div className={styles.client}>
              <p>JOBS DONE</p>
              <span>12,540+</span>
            </div>
          </div>
          <div className={styles.clients}>
            <img src="/src/assets/img/employess.png" alt="" />
            <div className={styles.client}>
              <p>EMPLOYESS</p>
              <span>100+</span>
            </div>
          </div>
        </div>
      </div>
    
      <img src="/src/assets/img/rectangle.png" alt= "" className={styles.rectangle} />
      <img src="/src/assets/img/rectangle_play.png"alt=""className={styles.play}/>
    </div>
  );
}
