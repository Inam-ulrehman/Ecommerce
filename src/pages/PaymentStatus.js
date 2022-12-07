import React from 'react'
import queryString from 'query-string'
import { useEffect } from 'react'
// import { postOnlineOrderThunk } from '../../features/cart/cartSlice'

import { useState } from 'react'
const PaymentStatus = () => {
  const [value, setValue] = useState(false)

  const parsed = queryString.parse(window.location.search)
  // payment_intent, payment_intent_client_secret,
  const { redirect_status } = parsed

  // succeeded
  // I have created this function to cancel double order behavior caused by double render.
  const callFunction = () => {
    // dispatch(
    //   postOnlineOrderThunk({
    //     payment_intent,
    //     payment_intent_client_secret,
    //     redirect_status,
    //   })
    // )
  }
  useEffect(() => {
    setValue(true)
    if (value) {
      callFunction()
    }
    // eslint-disable-next-line
  }, [value])
  if (redirect_status === 'succeeded') {
    return (
      <div>
        <h4>Success! Payment received..</h4>
      </div>
    )
  }

  if (redirect_status === 'processing') {
    return (
      <div>
        <h4>Payment processing. We'll update you when payment is received.</h4>
      </div>
    )
  }
  if (redirect_status === 'requires_payment_method') {
    return (
      <div>
        <h4>Payment failed. Please try another payment method..</h4>
      </div>
    )
  } else {
    return (
      <div>
        <h4>Something went wrong.</h4>
      </div>
    )
  }
}

export default PaymentStatus
