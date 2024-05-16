import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '/bistro-boss-restaurant-resources-main/assets/home/01.jpg'
import img2 from '/bistro-boss-restaurant-resources-main/assets/home/02.jpg'
import img3 from '/bistro-boss-restaurant-resources-main/assets/home/03.png'
import img4 from '/bistro-boss-restaurant-resources-main/assets/home/04.jpg'
import img5 from '/bistro-boss-restaurant-resources-main/assets/home/05.png'
import img6 from '/bistro-boss-restaurant-resources-main/assets/home/06.png'

const Banner = () => {
  return (
      <Carousel showArrows={true} className=''>
          <div>
              <img src={img1} />
          </div>
          <div>
              <img src={img2} />
          </div>
          <div>
              <img src={img3} />
          </div>
          <div>
              <img src={img4} />
          </div>
          <div>
              <img src={img5} />
          </div>
          <div>
              <img src={img6} />
          </div>
      </Carousel>
    
  )
}

export default Banner