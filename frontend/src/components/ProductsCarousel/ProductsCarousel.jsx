import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { responsive } from '../../constants/responsive-data'

const ProductsCarousel = ({ products }) => {
  return (
    <div className=''>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customTransition="all 500ms ease"
        transitionDuration={1000}
      >
        {products}
      </Carousel>
    </div>
  )
}

export default ProductsCarousel
