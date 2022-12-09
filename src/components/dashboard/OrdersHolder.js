import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Pagination from '../Pagination'

const OrdersHolder = () => {
  const { paginateOrders, ordersList } = useSelector((state) => state.order)
  const [index, setIndex] = useState(0)
  return (
    <Wrapper className='orders'>
      <div className='total-page'>
        <strong>Total Orders: {ordersList.length}</strong>
        <strong>Page No : {index + 1}</strong>
      </div>
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
      <Pagination
        index={index}
        setIndex={setIndex}
        productsList={paginateOrders}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .total-page {
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
  }
`

export default OrdersHolder
