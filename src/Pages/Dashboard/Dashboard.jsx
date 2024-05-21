import React from 'react'
import { BsCalendar2Date } from 'react-icons/bs'
import { FaHome, FaMoneyCheck, FaShoppingBag, FaShoppingCart } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { LiaComment } from 'react-icons/lia'
import { MdEmail } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import { SlCalender } from 'react-icons/sl'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex justify-start gap-6 h-screen'>
      <div className="drawer lg:drawer-open max-w-0 md:max-w-80">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="text-4xl drawer-button lg:hidden absolute top-4 left-4"><GiHamburgerMenu /></label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content *:p-1 space-y-2">
            {/* close drawer */}
            <label htmlFor="my-drawer-2" className="text-4xl drawer-button lg:hidden absolute top-6 right-4"><RxCross1/></label>
            {/* Sidebar content here */}
            <h1 className='text-3xl cinzel font-black'>Satirtha's <br /> <span className='text-2xl font-bold cinzel'>Cafe</span></h1>
            <NavLink  className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><FaHome className='text-2xl'/>User Home</NavLink>
            <NavLink  className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><SlCalender className='text-2xl'/>Reservation</NavLink>
            <NavLink  className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><FaMoneyCheck className='text-2xl'/>payment history</NavLink>
            <NavLink to='/dashboard/mycart' className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><FaShoppingCart className='text-2xl'/>my cart</NavLink>
            <NavLink  className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><LiaComment className='text-2xl' />add review</NavLink>
            <NavLink  className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><BsCalendar2Date className='text-2xl'/>my booking</NavLink>
            <div className='divider before:bg-white after:bg-white'></div>
            <NavLink to='/' className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><FaHome className='text-2xl'/>home</NavLink>
            <NavLink to='/menu' className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><GiHamburgerMenu className='text-2xl'/>menu</NavLink>
            <NavLink to='/shop' className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><FaShoppingBag className='text-2xl' />shop</NavLink>
            <NavLink  className={({isActive}) => isActive ? 'text-white cinzel flex gap-4 items-center text-base' : `cinzel flex gap-4 items-center text-base`}><MdEmail className='text-2xl'/>contact</NavLink>
          </ul>
        
        </div>
      </div>


      <div className='w-full flex items-center justify-center'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard