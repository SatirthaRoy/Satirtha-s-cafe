import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios';
import useCart from '../../hooks/useCart';
import useData from '../../hooks/useData';
import toast from 'react-hot-toast';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cart] = useCart();
  const {user} = useData();
  const totalPrice = cart.reduce((ini, curr) => ini + curr?.price, 0);
  console.log(totalPrice);
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('')
  const myAxios = useAxios();
  useEffect(() => {
    myAxios.post('/payment', {price: Number(totalPrice) * 100})
    .then(res => {
      console.log(res.data?.clientSecret);
      setClientSecret(res.data?.clientSecret);
    })
    .catch(e => {
      console.log(e);
    })
  }, [myAxios, totalPrice])

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);
    if(card === null) {
      return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    // confirm payment
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName,
          email: user?.email,
        }
      }
    })

    if(confirmError) {
      console.log('confirm error: ', confirmError);
    } else {
      console.log('payment Intent: ', paymentIntent);
      if(paymentIntent?.status === 'succeeded') {
        console.log('transaction id: ', paymentIntent.id);
        toast.success('Success payment');

        // save the payment in the database
        const payment = {
          uid: user?.uid,
          email: user?.email,
          totalPrice,
          transactionId: paymentIntent?.id,
          date: new Date(), // use moment js to convert time to utc formate
          cartItemIds: cart.map(item => item?.itemId),
        }
        myAxios.post('/payments', payment)
        .then(res => {
          console.log('payment: ',res);
        })
      }

    }

    if(error) {
      console.log('payment error: ',error);
      setError(error?.message)
    } else {
      console.log('payment method', paymentMethod);
      setError('');
    }

  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      >

      </CardElement>
      <button className='btn hover:bg-blue-500 text-white font-semibold p-4 bg-blue-500' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-red-500 '>{error && error}</p>
    </form>
  )
}

export default CheckoutForm