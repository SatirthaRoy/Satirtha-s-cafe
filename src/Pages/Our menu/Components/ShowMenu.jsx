
import React from 'react'
import MenuItem from '../../../Shared components/MenuItem'
import { Link } from 'react-router-dom'

const ShowMenu = ({items}) => {
  return (
    <div className='w-11/12 mx-auto space-y-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {items.map((item, i) => <MenuItem key={i} item={item}/>)}
      </div>
      <Link to={`/shop/${items[0]?.category === 'offered' && 'salad'}`}>
        <button className='mx-auto block border-b-4 border-b-black rounded-3xl p-4 text-black font-semibold text-xl hover:bg-black hover:text-white mt-16'>ORDER YOUR FAVOURITE FOOD</button>
      </Link>
    </div>
    
  )
}

export default ShowMenu