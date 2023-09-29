import React from 'react'

import { Slider, HomeInfoBox, CarouselItem, ProductsCarousel, ProductCategory, FooterLinks } from '../../components'
import { productData } from '../../constants/product-data'

const SectionHeading = ({ heading, btnText }) => {

  return (
    <React.Fragment>
      <div className='--flex-between'>
        <h2 className='--fw-thin'>{heading}</h2>
        <button className='--btn'>{btnText}</button>
      </div>
      <div className='--hr'></div>
    </React.Fragment>
  )
}

const products = productData.map((item) => (
  <div key={item.id}>
    <CarouselItem name={item.name} url={item.imageurl} description={item.description} price={item.price} />
  </div>
))

const Home = () => {
  return (
    <React.Fragment>
      <Slider />
      <section>
        <div className='container'>
          <HomeInfoBox />
          <SectionHeading heading="Largest Products" btnText="Shop Now >" />
          <ProductsCarousel products={products} />
        </div>
      </section>
      <section className='--bg-grey'>
        <div className='container'>
          <h2>Categories</h2>
          <ProductCategory />
        </div>
      </section>
      <section>
        <div className='container'>
          <SectionHeading heading="Smart Phones" btnText="Shop Now >" />
          <ProductsCarousel products={products} />
        </div>
      </section>
      <FooterLinks />
    </React.Fragment>
  )
}

export default Home