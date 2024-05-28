import React from 'react'
import { HomeCard } from '../Admin home/AdminHome'
import { IoWallet } from 'react-icons/io5'
import { FaShop } from 'react-icons/fa6'
import { MdPhoneInTalk } from 'react-icons/md'
import useAxios from '../../hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import useMenuFetch from '../../hooks/useMenuFetch'
import useData from '../../hooks/useData'
import { FaCalendarAlt, FaShoppingCart, FaStar } from 'react-icons/fa'
import useCart from '../../hooks/useCart'

const Userhome = () => {
  const myAxios = useAxios();
  const [menu] = useMenuFetch();
  const [cart] = useCart()
  const {user} = useData();
  // querying payment history data
  const {data:Payments=[]} = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await myAxios.get('/history')
      return res.data;
    }
  });
  return (
    <div className="w-11/12 mx-auto space-y-8 mt-16">
      <h1 className="text-3xl cinzel font-semibold">Hi, Welcome Back.</h1>
      <div className="flex flex-col md:flex-row gap-5 w-full justify-center">
        <HomeCard icon={<IoWallet/>} data={Payments} title='Payments' bg='bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]'/>
        <HomeCard icon={<FaShop/>} data={menu} title='Shop' bg='bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]'/>
        <HomeCard icon={<MdPhoneInTalk/>} data={new Array(3)} title='Contact' bg='bg-gradient-to-r from-[#FE4880] to-[#FECDE9]'/>
      </div>
      <div className={`flex md:flex-row flex-col divide-[#D1A054] ${window.innerWidth > 715 ? 'divide-x-4' : 'divide-y-4'} `}>
        <div className="flex-1 bg-[#FFEDD5] grid place-content-center gap-5 py-20">
          <img src={user?.photoURL} alt="" className='size-48 rounded-full border-4 border-[#D1A054]'/>
          <h1 className='cinzel text-3xl text-center'>{user?.displayName}</h1>
        </div>
        <div className="flex-1 bg-[#FEF9C3]">
          <div className="h-full grid place-content-center gap-4 p-4">
            <h1 className='text-4xl cinzel font-semibold'>Your activities</h1>
            <h1 className='text-2xl text-blue-600 cinzel flex items-center gap-2 font-semibold'><FaShoppingCart/>Orders: {cart.length}</h1>
            <h1 className='text-2xl text-[#00C4A1] cinzel flex items-center gap-2 font-semibold'><FaStar/>Reviews: {cart.length}</h1>
            <h1 className='text-2xl text-[#FFBB28] cinzel flex items-center gap-2 font-semibold'><FaCalendarAlt/>Bookings: {cart.length}</h1>
            <h1 className='text-2xl text-[#FF8042] cinzel flex items-center gap-2 font-semibold'><IoWallet/>Payments: {cart.length}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userhome