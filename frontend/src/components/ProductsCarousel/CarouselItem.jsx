import React from 'react'
import {Link} from 'react-router-dom'

import styles from './ProductsCarousel.module.scss'
import { shortenText } from '../../utils'

const CarouselItem = ({ url, name, price, description }) => {
    return (
        <div className={styles.carouselItem}>
            <Link to='/product-details'>
                <img src={url} alt={name} className={styles.productImage} />
                <p className={styles.price}>{`$ ${price}`}</p>
                <h4>{shortenText(name, 18)}</h4>
                <p className='--mb'>{shortenText(description, 26)}</p>
            </Link>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <button className='--btn --btn-primary'>Add to Cart</button>
            </div>
        </div>
    )
}

export default CarouselItem