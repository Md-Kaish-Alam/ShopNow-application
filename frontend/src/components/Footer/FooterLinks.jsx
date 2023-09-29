import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

import styles from './FooterLinks.module.scss'
import logo from '../../assets/logo.png'

const FooterLinks = () => {
    return (
        <React.Fragment>
            <section className={styles["contact-section"]}>
                <div className={`${styles.contact} container`}>
                    <div className={styles["contact-icon"]}>
                        <FaFacebook className={styles.i} />
                        <FaTwitter className={styles.i} />
                        <FaInstagram className={styles.i} />
                        <FaYoutube className={styles.i} />
                    </div>
                    <h2>Let's Talk !</h2>
                    <a href='#home' className={`${styles.btn} ${styles["btn-dark"]}`}>Make an enquiry ?</a>
                </div>
            </section>
            <section className={styles["footer-section"]}>
                <div className={`${styles.footer} container`}>
                    <div className={styles["footer-logo"]}>
                        <img src={logo} alt='ShopNow logo' />
                    </div>
                    <div className={styles["footer-menu"]}>
                        <p className={styles["link-heading"]}>Featuares</p>
                        <ul className={`${styles["nav-ul"]} ${styles["footer-links"]}`}>
                            <li><a href='#home'>Link Shortening</a></li>
                            <li><a href='#home'>Branded Links</a></li>
                            <li><a href='#home'>Analytics</a></li>
                            <li><a href='#home'>Blogs</a></li>
                        </ul>
                    </div>
                    <div className={styles["footer-menu"]}>
                        <p className={styles["link-heading"]}>Resources</p>
                        <ul className={`${styles["nav-ul"]} ${styles["footer-links"]}`}>
                            <li><a href='#home'>Link Shortening</a></li>
                            <li><a href='#home'>Branded Links</a></li>
                            <li><a href='#home'>Analytics</a></li>
                            <li><a href='#home'>Blogs</a></li>
                        </ul>
                    </div>
                    <div className={styles["footer-menu"]}>
                        <p className={styles["link-heading"]}>Company</p>
                        <ul className={`${styles["nav-ul"]} ${styles["footer-links"]}`}>
                            <li><a href='#home'>Link Shortening</a></li>
                            <li><a href='#home'>Branded Links</a></li>
                            <li><a href='#home'>Analytics</a></li>
                            <li><a href='#home'>Blogs</a></li>
                        </ul>
                    </div>
                    <div className={styles["footer-menu"]}>
                        <p className={styles["link-heading"]}>Partners</p>
                        <ul className={`${styles["nav-ul"]} ${styles["footer-links"]}`}>
                            <li><a href='#home'>Link Shortening</a></li>
                            <li><a href='#home'>Branded Links</a></li>
                            <li><a href='#home'>Analytics</a></li>
                            <li><a href='#home'>Blogs</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default FooterLinks