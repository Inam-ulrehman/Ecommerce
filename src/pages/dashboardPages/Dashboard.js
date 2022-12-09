import React from 'react'
import styled from 'styled-components'
import emptyCart from '../../images/empty_cart.svg'
const Dashboard = () => {
  return (
    <Wrapper>
      <div className='empty-cart'>
        <h3>Your cart is empty.</h3>
        <img src={emptyCart} alt='' />
      </div>
      <div className='cart'></div>
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
export default Dashboard
