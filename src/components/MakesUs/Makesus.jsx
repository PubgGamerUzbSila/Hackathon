import React from 'react'
import styles from './Makeus.module.css'
import makesUsImg from '../../assets/img/IMAGE.svg'
import { Button } from '../UI/Button/Button';

function Makesus() {
    return (
        <div className={styles.makesUs}>
            <div className={styles.left}>
                <h2>What makes us different?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam.
                </p>
                <span>Sed ut perspiciatis unde omnis iste natus error sit atem accusantium doloremque <br /> laudantiu sed ut.</span>
                <div className={styles.boxInfo}>
                    <div className={styles.info}>
                        <h2>10<span>+</span></h2>
                        <h4>Years</h4>
                    </div>

                    <div className={styles.info}>
                        <h2>5k<span>+</span></h2>
                        <h4>Clients</h4>
                    </div>
                    <div className={styles.info}>
                        <h2>20k<span>+</span></h2>
                        <h4>Jobs done</h4>
                    </div>

                </div>
                <Button padding="padding__type2">Get a free quote</Button>

            </div>
            <div className={styles.right}>
                <img src={makesUsImg} alt="makesUsImg" />
            </div>
        </div>
    )
}

export default Makesus;
