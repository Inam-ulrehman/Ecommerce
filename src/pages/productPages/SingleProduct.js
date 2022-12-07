import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import {
  getCart,
  getSingleProductThunk,
} from '../../features/product/productSlice'
const initialState = {
  index: 0,
}

const SingleProduct = () => {
  const { _id } = useParams()
  const dispatch = useDispatch()
  let [state, setState] = useState(initialState)
  const quantityRef = useRef()
  const { isLoading, singleProduct, singleProductImages, cart } = useSelector(
    (state) => state.product
  )

  // ==== handle index

  const handleIndex = (itemIndex) => {
    setState({ ...state, index: itemIndex })
  }

  // ==== handle submit

  const handleSubmit = (e) => {
    e.preventDefault()
    const quantity = Number(quantityRef.current.value)
    if (!quantity) {
      toast.warning('Please select quantity.')
      return
    }
    if (cart.find((item) => item._id === _id)) {
      toast.success('Product is already in cart.')
      return
    }
    const addInCart = { ...singleProduct, quantity }
    dispatch(getCart(addInCart))
    toast.success('Product is added in your cart')
  }
  useEffect(() => {
    dispatch(getSingleProductThunk(_id))

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
      <h3>{singleProduct.category}</h3>
      <div className='container'>
        <div className='img'>
          <div className='main-img'>
            <img
              src={singleProductImages[state.index]?.secure_url}
              alt={singleProduct.title}
            />
          </div>
          <div className='options-img'>
            {singleProductImages?.map((item, index) => {
              return (
                <div onClick={() => handleIndex(index)} key={index}>
                  <img src={item.secure_url} alt='' />
                </div>
              )
            })}
          </div>
        </div>
        <div className='description'>
          <h4 className='title'>{singleProduct.title}</h4>
          <div>
            <p>{singleProduct.inStock ? 'in-stock' : 'out-of-stock'}</p>
            <p>
              {singleProduct.inStock
                ? `Total in-stock ${singleProduct.totalStock}`
                : null}
            </p>
          </div>
          <div>
            <p>Total Price: {singleProduct.amount}</p>
          </div>
          {/* ========== CART======START*/}
          {singleProduct.inStock && (
            <div>
              <form onSubmit={handleSubmit}>
                <label>
                  Quantity: between 1 and {singleProduct.totalStock}:
                </label>
                <input
                  ref={quantityRef}
                  type='number'
                  defaultValue={1}
                  min='1'
                  max={singleProduct.totalStock}
                ></input>
                <button className='btn' type='submit'>
                  Add to cart
                </button>
              </form>
            </div>
          )}

          {/* ========== CART======END*/}
          <div>
            <p>{singleProduct.description}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .container {
    display: flex;
  }
  .img,
  .description {
    min-height: 100vh;
    border: 2px solid black;
    min-width: 45vw;
    margin: 0 auto;
  }
  .main-img {
    text-align: center;
    img {
      width: 300px;
    }
  }
  .options-img {
    display: flex;
    flex-wrap: wrap;
    img {
      max-width: 80px;
      margin-left: 1rem;
      border: 2px solid black;
      :hover {
        cursor: pointer;
      }
    }
  }
`
export default SingleProduct
