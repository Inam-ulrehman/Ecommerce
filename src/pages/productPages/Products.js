import React from 'react'
import { useState } from 'react'

import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import ProductCategory from '../../components/product/ProductCategory'
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
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
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
      <ProductCategory
        category={category}
        value={value}
        setValue={setValue}
        handleCategory={handleCategory}
      />

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
  @media (max-width: 600px) {
    .category-holder {
      padding-right: 0rem;
    }
  }
`
export default Products
