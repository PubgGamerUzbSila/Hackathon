import React from 'react'
import styles from './Sumbit.module.css'
import { IoMdCall } from "react-icons/io";
const Sumbit = () => {
  return (
    <>
        <div className={styles.submit}>
            <div className={styles.info}>
                <h2>Request a free cleaning quote today</h2>
                <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                <div className={styles.call}>
                    <span><IoMdCall /></span>
                    <div className={styles.callNum}>
                        <span>Call us now</span>
                        <span>(414) 567 - 2109</span>
                    </div>
                </div>

            </div>
            <form>

            </form>
        </div>
    </>
  )
}

export default Sumbit