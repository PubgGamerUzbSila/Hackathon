import React from 'react'
import styles from './Sumbit.module.css'
import { IoMdCall } from "react-icons/io";
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';

const Sumbit = () => {
  return (
    <>
       <div className={styles.submitt}>
        <div className="container">
        <div className={styles.submit}>
            <div className={styles.info}>
                <h2>Request a free cleaning quote today</h2>
                <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                <div className={styles.call}>
                    <span className={styles.icon}><IoMdCall /></span>
                    <div className={styles.callNum}>
                        <span>Call us now</span>
                        <span>(414) 567 - 2109</span>
                    </div>
                </div>
                <div className={styles.line}></div>
                <h3>Not convinced yet?</h3>
                <p>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                <Button padding={"padding__type2"}>Browse our packages</Button>
            </div>
            <form>
                <Input type={"text"} value={"Full name"}/>
                <Input type={"text"} value={"Phone number"}/>
                <Input type={"text"} value={"Address"}/>
                <Input type={"email"} value={"Email"}/>
                <Input type={"text"} value={"Requested service"}/>
                <Input type={"text"} value={"Day of service"}/>
                <Input type={"area"} value={"Add a note"} />
                <Button padding={"padding__type2"}>Browse our packages</Button>
            </form>
        </div>
        </div>
       </div>
    </>
  )
}

export default Sumbit