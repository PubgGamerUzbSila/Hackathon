import React from 'react';
import styles from './SafeFromCovid.module.css';
import covid from '../../assets/img/Covid/CleaningCovid.png'
import phone from '../../assets/icons/Covid/phone.svg'

function SafeFromCovid() {
    return (
        <>
            <div className={styles.covid}>
                <div className={styles["covid-img-side"]}>
                    <img src={covid} alt="" />
                </div>
                <div className={styles["covid-right-side"]}>
                    <div className="textBox">
                        <h3 className={styles.subTitle}>Covid-19 sanitization</h3>
                        <h2 className={styles.title}>We follow guidelines to keep you safe from the COVID-19 virus</h2>
                        <p className={styles.text}>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                    </div>
                    <div className={styles.bottom}>
                        <button>Get a free quote</button>
                        <div className="phoneBox">
                            <div className="phoneIcon">
                                <img src={phone} alt="" />
                            </div>
                            <div className="phoneText">
                                <span>Call us now</span>
                                <span className={styles.telNumber}>(414) 567 - 2109</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SafeFromCovid