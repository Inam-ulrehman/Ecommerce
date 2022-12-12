import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeCartItem,
} from '../features/product/productSlice'
import { formatPrice, totalBill } from '../utils/helper'

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
                <td className='quantity'>
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
                </td>
                <td className='price'>{formatPrice(item.amount)}</td>
                <td className='action'>
                  <button
                    className='btn'
                    type='button'
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove
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
      <div>
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
`

export default Cart
