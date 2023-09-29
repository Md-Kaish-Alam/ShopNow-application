import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className={styles.footer}>
            &copy; {year} All Rights Reserved by Shop <span style={{ color: 'orangered' }}>Now</span>.&ensp; Pvt. Ltd.
        </div>
    )
}

export default Footer