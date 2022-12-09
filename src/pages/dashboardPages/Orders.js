import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getOrdersThunk } from '../../features/order/orderSlice'
import emptyCart from '../../images/empty_cart.svg'

const Orders = () => {
  const dispatch = useDispatch()
  const { isLoading, ordersList } = useSelector((state) => state.order)

  useEffect(() => {
    dispatch(getOrdersThunk())
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return (
      <>
        <h1 className='title'>Loading...</h1>
        <div className='loading'></div>
      </>
    )
  }
  return (
    <Wrapper>
      {ordersList.length > 0 ? null : (
        <div className='empty-cart'>
          <h3>Your cart is empty.</h3>
          <img src={emptyCart} alt='' />
        </div>
      )}

      {/* ===holding orders */}
      <div className='orders'>
        <table>
          <tbody>
            <tr>
              <th>image</th>
              <th>name</th>
              <th>total</th>
              <th>date</th>
              <th>details</th>
            </tr>

            {ordersList.map((item) => {
              const names = item.cart.map((item, index) => {
                const name = [item.title]
                return name
              })
              const images = item.cart.map((item, index) => {
                const image = item.uploadImage
                return image
              })

              return (
                <tr className='container' key={item._id}>
                  <td className='image'>
                    {images.map((item, index) => {
                      return (
                        <div key={index}>
                          <img src={item[0].secure_url} alt='' />
                        </div>
                      )
                    })}
                  </td>
                  <td className='name'>
                    {names.map((item, index) => {
                      return <div key={index}>{item}</div>
                    })}
                  </td>
                  <td>{item.total}</td>
                  <td>{item.createdAt}</td>
                  <td>
                    <Link to={`${item._id}`}>More Details</Link>{' '}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
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
  /* ===== Table Data */
  .container {
    text-align: center;
  }
  .image {
    img {
      width: 50px;
    }
  }
`

export default Orders
