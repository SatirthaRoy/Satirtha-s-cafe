import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Card from '../../../Shared components/Card';

const PagingItems = ({items}) => {

  const pageCount = Math.ceil(items.length/6);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper w-full h-screen"
      >
        {Array(pageCount).fill(0).map(( c,i) => {
          return (
            <SwiperSlide key={i}>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-28'>
              {items.slice(6*i, 6*i+6).map((item, i) => <Card key={i} item={item}/>)}
              
              </div>
            </SwiperSlide>)})}
      </Swiper>
    </div>
  )
}

export default PagingItems