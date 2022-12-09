import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getOrdersThunk } from '../../features/order/orderSlice'
import emptyCart from '../../images/empty_cart.svg'

const Orders = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOrdersThunk())
    // eslint-disable-next-line
  }, [])
  return (
    <Wrapper>
      <div className='empty-cart'>
        <h3>Your cart is empty.</h3>
        <img src={emptyCart} alt='' />
      </div>
      {/* ===holding orders */}
      <div className='orders'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - 3.2rem);
  .empty-cart {
    display: grid;
    place-content: center;
    img {
      width: 400px;
    }
  }
`

export default Orders
