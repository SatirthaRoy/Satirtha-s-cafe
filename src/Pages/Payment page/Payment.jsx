import React from 'react'
import SectionTitle from '../../Shared components/SectionTitle'
import { FaCreditCard } from 'react-icons/fa'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)

const Payment = () => {
  return (
    <div className='w-full'>
      <SectionTitle title='Payment' phrase='Pay'/>
      <div className='max-w-lg mx-auto'>
        {/* <div className='flex gap-4 '>
          <div className='relative'>
            <FaCreditCard className='text-[#5D647F] text-xl absolute top-5 left-4'/>
            <input type="text" placeholder='Card Number' className='p-4 pl-12 rounded-lg'/>
          </div>
          <input type="text" placeholder='MM/YY/CVC' className='p-4 rounded-lg'/>
        </div> */}
        <Elements stripe={stripePromise}>
          <CheckoutForm/>
        </Elements>
      </div>
    </div>
  )
}

export default Payment