import React from 'react'
import { useState } from 'react'

import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import ProductDesign from '../../components/ProductDesign'
import { productsCategories } from '../../features/product/productSlice'
const Products = () => {
  const dispatch = useDispatch()
  const { product } = useSelector((state) => state)
  const { category, isLoading, productList } = product
  const [value, setValue] = useState(0)
  // ==== handle Category button

  const handleCategory = (e) => {
    const value = e.target.value
    dispatch(productsCategories(value))
  }
  if (productList.length === 0) {
    return (
      <Wrapper>
        <h1 className='title'>Waiting For Products</h1>loading
      </Wrapper>
    )
  }
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
      <ul className='category-holder'>
        {category.map((item, index) => {
          return (
            <li onClick={handleCategory} key={index}>
              <button
                onClick={() => setValue(index)}
                type='button'
                className={value === index ? 'btn active' : 'btn'}
                value={item}
              >
                {item}
              </button>
            </li>
          )
        })}
      </ul>
      {/*===== filter category =======End */}
      {/*===== filter Product =======Start */}
      <div className='product-holder'>
        {productList.map((item, index) => {
          return <ProductDesign key={item._id} item={item} />
        })}
      </div>
      {/*===== filter Product =======End */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - 61px);
  .category-holder {
    background: var(--primary-8);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    button {
      margin: 0.5rem;
    }
  }
  /* ====Product */
  .product-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .btn {
    background: var(--primary-8);
    :hover {
      background: var(--primary-5);
    }
  }
  .active {
    background: var(--primary-5);
  }
`
export default Products
