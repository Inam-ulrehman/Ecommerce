import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import {
  getCart,
  getSingleProductThunk,
} from '../../features/product/productSlice'
import { formatPrice } from '../../utils/helper'

// import { formatPrice } from '../../utils/helper'
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
  // eslint-disable-next-line
  const handleSubmit = (e) => {
    e.preventDefault()
    const quantity = Number(quantityRef.current.value)
    if (!quantity) {
      toast.warning('Please select quantity.')
      return
    }
    if (cart.find((item) => item._id === _id)) {
      toast.success('Already in your Cart.', {
        position: toast.POSITION.TOP_CENTER,
      })
      return
    }
    const addInCart = { ...singleProduct, quantity }
    dispatch(getCart(addInCart))
    toast.success('Added in your Cart.', {
      position: toast.POSITION.TOP_CENTER,
    })
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
      <span className='category'>
        <Link className='btn' to={'/products'}>
          Products
        </Link>
        / <strong>{singleProduct.category}</strong>
      </span>
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
        {/* ====box divider========= */}
        <div className='description'>
          <div>
            <h3 className='title'>{singleProduct.title}</h3>
            <div className='title-underline'></div>
          </div>
          <div>
            <h3 className='title'>{singleProduct.subCategory}</h3>
          </div>
          <div className='description-heading'>
            <span className='title'>PRICE:</span>
            <strong>{formatPrice(singleProduct.amount)}</strong>
          </div>
          <div className='description-box'>
            <p>{singleProduct.description}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: calc(100vh - 59px);
  padding: 1rem;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .category {
    background-color: var(--primary-1);
    padding: 10px 0;
    font-size: 1.2rem;
    padding-right: 5px;

    a {
      padding: 5px;
      margin-right: 5px;
    }
    strong {
      text-transform: capitalize;
    }
  }
  .img,
  .description {
    min-width: 45vw;
    margin: 0 auto;
  }
  .main-img {
    text-align: center;
    margin-top: 1rem;

    img {
      box-shadow: var(--shadow-2);
      border-radius: var(--radius);
      width: 300px;
    }
  }
  /* === small images */
  .options-img {
    border-top: 2px solid var(--primary-5);
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;

    img {
      box-shadow: var(--shadow-2);
      max-width: 80px;
      margin-left: 0.5rem;
      transition: var(--transition);
      :hover {
        cursor: pointer;
        box-shadow: var(--shadow-4);
      }
    }
  }
  /*=== Description=== box divider */
  .description-heading {
    background-color: var(--grey-3);
    box-shadow: var(--shadow-2);
    display: flex;
    align-items: center;
    place-content: center;
    span {
      margin: 1rem;
    }
  }
  .description-box {
    padding: 1rem;
    background-color: var(--grey-1);
  }

  @media (max-width: 600px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`
export default SingleProduct
