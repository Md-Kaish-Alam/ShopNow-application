import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart, FaTimes } from 'react-icons/fa'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'


import styles from './Header.module.scss'

export const Logo = () => (
    <div className={styles.logo}>
        <Link to="/">
            <h2>Shop<span>Now</span>.</h2>
        </Link>
    </div>
)


const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "")

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [scrollPage, setScrollPage] = useState(false);

    const fixNavbar = () => {
        if (window.scrollY > 50) {
            setScrollPage(true);
        } else {
            setScrollPage(false);
        }
    };

    window.addEventListener('scroll', fixNavbar);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const hideMenu = () => {
        setShowMenu(false)
    }

    const Cart = () => (
        <span className={styles.cart}>
            <Link to="/cart">
                Cart
                <FaShoppingCart size={20} />
                <p>5</p>
            </Link>
        </span>
    )

    return (
        <header className={scrollPage ? `${styles.fixed}` : null}>
            <div className={styles.header}>
                <Logo />
                <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>

                    <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`} onClick={hideMenu}></div>
                    <ul>
                        <li className={styles["logo-mobile"]}>
                            <Logo />
                            <FaTimes size={22} color='#fff' onClick={hideMenu} />
                        </li>
                        <li>
                            <NavLink to="/shop" className={activeLink}>Shop</NavLink>
                        </li>
                    </ul>

                    <div className={styles["header-right"]}>
                        <span className={styles.links}>
                            <NavLink to={"login"} className={activeLink}>Login</NavLink>
                            <NavLink to={"register"} className={activeLink}>Register</NavLink>
                            <NavLink to={"order-history"} className={activeLink}>My Order</NavLink>
                        </span>
                        <Cart />
                    </div>
                </nav>
                <div className={styles["menu-icon"]}>
                    <Cart/>
                    <HiOutlineMenuAlt3 size={20} onClick={toggleMenu}/>
                </div>
            </div>
        </header>
    )
}

export default Header