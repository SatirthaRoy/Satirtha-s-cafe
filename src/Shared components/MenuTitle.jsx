import React from 'react'

const MenuTitle = ({bg, title, para}) => {
  return (
    <div style={{backgroundImage: `url("${bg}")`}} className={`bg-fixed bg-cover bg-no-repeat py-44`}>
      <div className='bg-[#15151599] md:w-1/2 w-11/12 mx-auto p-20 text-center text-white'>
        <h1 className='uppercase cinzel text-4xl font-semibold'>{title}</h1>
        <p className='text-base font-normal'>{para}</p>
      </div>
    </div>
  )
}

export default MenuTitle