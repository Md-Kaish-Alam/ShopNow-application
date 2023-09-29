import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './ProductCategory.module.scss'

const categories = [
    {
        id: 1,
        title: "Gadgets",
        image: "https://i.ibb.co/5GVkd3m/c1.jpg",
    },
    {
        id: 2,
        title: "Womens Fashion",
        image: "https://i.ibb.co/nQKLjrW/c2.jpg",
    },
    {
        id: 3,
        title: "Sport Sneakers",
        image: "https://i.ibb.co/fNkBYgr/c3.jpg",
    },
];

const CategoryCard = ({ title, image }) => {

    const navigate = useNavigate()

    return (
        <div className={styles.category}>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <button className='--btn' onClick={() => navigate("/shop")}>{"Shop Now"}</button>
        </div>
    )
}

const ProductCategory = () => {
    return (
        <div className={styles.categories}>
            {categories.map((category) => (
                <div key={category.id} className='--flex-center'>
                    <CategoryCard title={category.title} image={category.image} />
                </div>
            ))}
        </div>
    )
}

export default ProductCategory