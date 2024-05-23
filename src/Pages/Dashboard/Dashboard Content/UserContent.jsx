import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCalendar2Date } from 'react-icons/bs'
import { FaHome, FaMoneyCheck,FaShoppingCart } from 'react-icons/fa'
import { LiaComment } from 'react-icons/lia'
import { SlCalender } from 'react-icons/sl'

const UserContent = () => {
  return (
    <>
      <NavLink  className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><FaHome className='text-2xl'/>User Home</NavLink>
      <NavLink  className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><SlCalender className='text-2xl'/>Reservation</NavLink>
      <NavLink  className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><FaMoneyCheck className='text-2xl'/>payment history</NavLink>
      <NavLink to='/dashboard/mycart' className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><FaShoppingCart className='text-2xl'/>my cart</NavLink>
      <NavLink to='/dashboard/addreview' className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><LiaComment className='text-2xl' />add review</NavLink>
      <NavLink  className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><BsCalendar2Date className='text-2xl'/>my booking</NavLink>
    </>
  )
}

export default UserContent