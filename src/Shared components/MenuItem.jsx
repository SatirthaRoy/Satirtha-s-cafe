import React from 'react'

const MenuItem = ({item}) => {
  return (
    <div className='flex md:flex-row flex-col gap-5'>
      <img src={item?.image} alt="" className='w-32 object-cover rounded-tr-full rounded-br-full rounded-bl-full'/>
      <div>
        <h3 className='cinzel text-xl'>{item?.name}------------</h3>
        <p className='text-base'>{item.recipe}</p>
      </div>
      <p className='text-[#BB8506]'>${item.price}</p>
    </div>
  )
}

export default MenuItem