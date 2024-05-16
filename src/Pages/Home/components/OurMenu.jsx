import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Shared components/SectionTitle'

const OurMenu = () => {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('/bistro-boss-restaurant-resources-main/menu.json')
    .then(res => res.json())
    .then(data => {
      data.length > 6 && setMenu(data.slice(0,6))
    })
  }, [])


  return (
    <div className='w-11/12 mx-auto space-y-5'>
      <SectionTitle title='from our menu' phrase='Check it Out'/>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* a menu item */}
        {menu.map((item, i) => {
          return (
            <div key={i} className='flex gap-5'>
              <img src={item?.image} alt="" className='w-32 object-cover rounded-tr-full rounded-br-full rounded-bl-full'/>
              <div>
                <h3 className='cinzel text-xl'>{item?.name}------------</h3>
                <p className='text-base'>{item.recipe}</p>
              </div>
              <p className='text-[#BB8506]'>${item.price}</p>
            </div>
          )
        })}
        
        
      </div>

      <div className='flex items-center justify-center'>
        <button className='uppercase border-b-4 rounded-3xl border-black p-6 font-semibold'>View Full Menu</button>
      </div>
      
    </div>
  )
}

export default OurMenu