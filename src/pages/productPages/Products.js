import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import ProductDesign from '../../components/ProductDesign'
import {
  getProductThunk,
  productsCategories,
} from '../../features/product/productSlice'
const Products = () => {
  const dispatch = useDispatch()
  const { product } = useSelector((state) => state)
  const { category, isLoading, productList } = product

  // ==== handle Category button

  const handleCategory = (e) => {
    const value = e.target.value
    dispatch(productsCategories(value))
  }

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
      <div className='category-holder' id='category-holder'>
        {category.map((item, index) => {
          return (
            <div onClick={handleCategory} key={index}>
              <button type='button' className='btn' value={item}>
                {item}
              </button>
            </div>
          )
        })}
      </div>
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
  .category-holder {
    background: var(--primary-8);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    button {
      margin: 1rem;
    }
  }
  /* ====Product */
  .product-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .active {
    background: var(--primary-8);
  }
`
export default Products
