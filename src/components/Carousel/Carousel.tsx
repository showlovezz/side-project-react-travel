import React from 'react'
import { Image, Carousel as AntdCarousel } from 'antd'

import carouselImage1 from '../../assets/images/carousel_1.jpg'
import carouselImage2 from '../../assets/images/carousel_2.jpg'
import carouselImage3 from '../../assets/images/carousel_3.jpg'

import styles from './Carousel.module.css'

const Carousel: React.FC = () => {
  return (
    <AntdCarousel autoplay className={styles.slider}>
      <Image src={carouselImage1} />
      <Image src={carouselImage2} />
      <Image src={carouselImage3} />
    </AntdCarousel>
  )
}

export default Carousel
