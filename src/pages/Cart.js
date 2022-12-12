import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaPlusSquare, FaMinusSquare, FaTrash } from 'react-icons/fa'
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeCartItem,
} from '../features/product/productSlice'
import { formatPrice, totalBill } from '../utils/helper'
import EmptyCart from '../components/EmptyCart'

const Cart = () => {
  const dispatch = useDispatch()
  const { product, user } = useSelector((state) => state)
  const { cart } = product

  // ==== Calculator function=====
  const TotalAmount = totalBill(cart)

  // ===== Remove Item =====
  const handleRemove = (_id) => {
    dispatch(removeCartItem(_id))
  }

  const handleIncrease = (_id) => {
    dispatch(increaseItemQuantity(_id))
  }
  // ==== handle Decrease =====

  const handleDecrease = (_id) => {
    dispatch(decreaseItemQuantity(_id))
  }
  if (cart.length === 0) {
    return <EmptyCart />
  }
  return (
    <Wrapper>
      <table className='table'>
        <tbody>
          <tr>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>ACTION</th>
          </tr>

          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td className='img'>
                  <img src={item.uploadImage[0].secure_url} alt='' />
                </td>
                <td className='name'>
                  <p>{item.title}</p>
                </td>
                <td>
                  <div className='quantity'>
                    <button
                      className='btn'
                      type='button'
                      onClick={() => handleDecrease(item._id)}
                    >
                      <FaMinusSquare />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className='btn'
                      type='button'
                      onClick={() => handleIncrease(item._id)}
                    >
                      <FaPlusSquare />
                    </button>
                  </div>
                </td>
                <td className='price'>{formatPrice(item.amount)}</td>
                <td className='action'>
                  <button
                    className='btn'
                    type='button'
                    onClick={() => handleRemove(item._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='total'>
        <p>
          <strong>Total Bill</strong>
        </p>
        <p>
          <strong>TOTAL: {formatPrice(TotalAmount)}</strong>
        </p>
      </div>
      <div className='checkout'>
        <Link
          to={`${user.isMember ? '/dashboard/checkout' : '/register'}`}
          className='btn'
        >
          CheckOut
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  /* table */
  .table {
    text-align: center;
  }
  /* Quantity */
  .quantity {
    span {
      padding: 0.1rem 1.2rem;
      background-color: var(--white);
      border-top: 2px solid black;
      border-bottom: 2px solid black;
    }
  }
  .checkout {
    text-align: center;
    margin: 1rem;
  }
  .img {
    border: transparent;
    img {
      max-width: 100px;
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    border: 2px solid black;
  }
  @media (max-width: 600px) {
    .quantity {
      display: grid;
    }
  }
`

export default Cart
