import React from 'react';
import styles from "./ProfService.module.css";
import house from "../../assets/img/house.png";
import office from "../../assets/img/office.png";
import industrial from "../../assets/img/industrial.png";

function ProfService() {
    return (
        <>
            <div className={styles.profservice}>
                <div className={styles.top}>
                    <h2>Take a look at our <br /> professional services</h2>
                    <button>Explore services</button>
                </div>
                <div className={styles.middle}>
                    <div className={styles.box}>
                        <img src={house} alt="house" />
                        <h5>House cleaning</h5>
                        <p>Lorem ipsum dolor sit amet <br /> consecte tur
                            adipiscing elit <br /> semper dalaracc lacus
                            vel <br /> facilisis volutpat est.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <img src={office} alt="office" />
                        <h5>Office cleaning</h5>
                        <p>Lorem ipsum dolor sit amet <br /> consecte tur
                            adipiscing elit <br /> semper dalaracc lacus
                            vel <br /> facilisis volutpat est.
                        </p>
                    </div>
                    <div className={styles.box}>
                        <img src={industrial} alt="industrial" />
                        <h5>Industrial cleaning</h5>
                        <p>Lorem ipsum dolor sit amet <br /> consecte tur
                            adipiscing elit <br /> semper dalaracc lacus
                            vel <br /> facilisis volutpat est.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfService;