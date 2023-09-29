import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import styles from './Slider.module.scss'
import { sliderData } from '../../constants/slider-data'

const Slider = () => {

    const navigate = useNavigate()

    const [currentSlide, setCurrentSlide] = useState(0)

    const autoScroll = true

    let slideInterval;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1)
    };
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? sliderData.length - 1 : currentSlide - 1)
    };

    useEffect(() => {
        if(autoScroll) {
            const auto = () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                slideInterval = setInterval(nextSlide, 5000)
            }

            auto();
        }
        return () => clearInterval(slideInterval)
    },[currentSlide, autoScroll])

    return (
        <div className={styles.slider}>
            <AiOutlineArrowLeft className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide} />
            <AiOutlineArrowRight className={`${styles.arrow} ${styles.next}`} onClick={nextSlide} />
            {sliderData.map((slide, index) => {
                const { image, heading, desc } = slide

                return (
                    <div key={index} className={index === currentSlide ? `${styles.slide} ${styles.current}` : `${styles.slide}`}>
                        {index === currentSlide && (
                            <React.Fragment>
                                <img src={image} alt='slide' />
                                <div className={styles.content}>
                                    <span className={styles.span1}></span>
                                    <span className={styles.span2}></span>
                                    <span className={styles.span3}></span>
                                    <span className={styles.span4}></span>
                                    <h2>{heading}</h2>
                                    <p>{desc}</p>
                                    <hr />
                                    <button className='--btn --btn-primary' onClick={() => navigate("/shop")}>Shop Now</button>
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Slider