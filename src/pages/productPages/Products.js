import React, { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getProductThunk } from '../../features/product/productSlice'

const Products = () => {
  const dispatch = useDispatch()
  const [filterProducts, setFilterProducts] = useState([])
  const { product } = useSelector((state) => state)
  const { category, isLoading } = product

  useEffect(() => {
    dispatch(getProductThunk())
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
        <div className='loading'></div>
      </div>
    )
  }
  return (
    <Wrapper>
      <Helmet>
        <title>Product</title>
        <meta name='description' content='Welcome to our Product Page.' />
        <link rel='canonical' href='/product' />
      </Helmet>
      {/*===== filter category =======Start */}
      <div className='category-holder'>
        {category.map((item, index) => {
          return (
            <div key={index}>
              <button type='button' className='btn'>
                {item}
              </button>
            </div>
          )
        })}
      </div>
      {/*===== filter category =======End */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .category-holder {
    display: flex;
    justify-content: center;
    button {
      margin: 1rem;
    }
  }
`
export default Products
