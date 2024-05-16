
import React from 'react'
import MenuItem from '../../../Shared components/MenuItem'

const ShowMenu = ({items}) => {
  return (
    <div className='w-11/12 mx-auto space-y-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {items.map((item, i) => <MenuItem key={i} item={item}/>)}
      </div>
      <button className='mx-auto block border-b-4 border-b-black rounded-3xl p-4 text-black font-semibold text-xl hover:bg-black hover:text-white'>ORDER YOUR FAVOURITE FOOD</button>
    </div>
    
  )
}

export default ShowMenu