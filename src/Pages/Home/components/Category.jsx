import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from '/bistro-boss-restaurant-resources-main/assets/home/slide1.jpg'
import slide2 from '/bistro-boss-restaurant-resources-main/assets/home/slide2.jpg'
import slide3 from '/bistro-boss-restaurant-resources-main/assets/home/slide3.jpg'
import slide4 from '/bistro-boss-restaurant-resources-main/assets/home/slide4.jpg'
import slide5 from '/bistro-boss-restaurant-resources-main/assets/home/slide5.jpg'
import SectionTitle from '../../../Shared components/SectionTitle';

const Category = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <SectionTitle title='order online' phrase='From 11:00am to 10:00pm'/>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper cinzel"
        >
          <SwiperSlide>
            <h3 className='text-center w-full text-white absolute bottom-10 cinzel text-3xl'>SALADS</h3>
            <img src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <h3 className='text-center w-full text-white absolute bottom-10 cinzel text-3xl'>PIZZAS</h3>
          <img src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <h3 className='text-center w-full text-white absolute bottom-10 cinzel text-3xl'>SOUPS</h3>
            <img src={slide3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <h3 className='text-center w-full text-white absolute bottom-10 cinzel text-3xl'>DESERTS</h3>
          <img src={slide4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <h3 className='text-center w-full text-white absolute bottom-10 cinzel text-3xl'>SALADS</h3>
            <img src={slide5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Category