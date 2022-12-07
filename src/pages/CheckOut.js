import React from 'react'
import { useEffect } from 'react'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { customFetch } from '../utils/axios'
import CheckoutForm from '../components/CheckoutForm'
import { useState } from 'react'

const PUBLISHABLE_KEY =
  'pk_test_51MCOOyAWL09tx3q3PEZKwZOjJyC94URRgxK9l8Efy9siYmXPybFxYhj3ByPZnjZfvaVmyvCpcT6NaLZogWkiUKK700XGTZL0aq'

const CheckOut = () => {
  const [clientSecret, setClientSecret] = useState('')
  // eslint-disable-next-line
  const [stripePromise, setStripePromise] = useState(() =>
    loadStripe(PUBLISHABLE_KEY)
  )

  const getClientSecret = async () => {
    try {
      const response = await customFetch.get('/stripe')
      const { client_secret } = response.data
      setClientSecret(client_secret)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    getClientSecret()
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
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default CheckOut

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
