import React from 'react'

const PageBanner = ({img, title, para}) => {
  return (
    <div style={{backgroundImage: `url(${img})`}} className='bg-fixed bg-cover bg-no-repeat py-44'>
      <div className='bg-[#15151599] md:w-1/2 w-11/12 mx-auto p-20 text-center text-white'>
        <h1 className='uppercase cinzel text-4xl md:text-8xl font-semibold'>{title}</h1>
        <p className='text-2xl font-semibold cinzel'>{para}</p>
      </div>
    </div>
  )
}

export default PageBanner