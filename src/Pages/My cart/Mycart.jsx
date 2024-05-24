import React from 'react'
import useCart from '../../hooks/useCart'
import SectionTitle from '../../Shared components/SectionTitle';
import CartTable from './components/CartTable';
import useAxios from '../../hooks/useAxios';

const Mycart = () => {

  const [cart] = useCart();

  return (
    <div className='flex-grow '>
       <SectionTitle title='wanna add more' phrase='My cart'/>
       <div className='p-3 md:p-6 w-full space-y-10'>
        <div className='w-full flex justify-between items-center'>
          <h1 className='cinzel text-lg md:text-3xl font-bold'>Total orders: {cart.length}</h1>
          <h1 className='cinzel text-lg md:text-3xl font-bold'>total price: ${cart.reduce((ini, curr) => ini + curr?.price, 0)}</h1>
          <button className='cinzel p-3 bg-[#D1A054] rounded-lg font-bold text-white'>Pay</button>
        </div>
        <CartTable cart={cart}/>
       </div>
    </div>
  )
}

export default Mycart