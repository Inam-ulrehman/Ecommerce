import React from 'react'
import { useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import AddressForm from '../components/AddressForm'
import { loadStripe } from '@stripe/stripe-js'
// eslint-disable-next-line
import { customFetch } from '../utils/axios'
import CheckoutForm from '../components/CheckoutForm'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { STRIPE_PUBLISHABLE_KEY } from '../utils/data'

const CheckOut = () => {
  const { cart } = useSelector((state) => state.product)

  const [clientSecret, setClientSecret] = useState('')
  // eslint-disable-next-line
  const [stripePromise, setStripePromise] = useState(() =>
    loadStripe(STRIPE_PUBLISHABLE_KEY)
  )

  const getClientSecret = async () => {
    try {
      const response = await customFetch.post('/stripe', cart)
      const { client_secret } = response.data
      setClientSecret(client_secret)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    getClientSecret()
    // eslint-disable-next-line
  }, [])

  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  }
  return (
    <div>
      <p> Success card : 4242 4242 4242 4242</p>
      <p> fail card : 4000000000009995</p>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
          <AddressForm />
        </Elements>
      )}
    </div>
  )
}

export default CheckOut

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
