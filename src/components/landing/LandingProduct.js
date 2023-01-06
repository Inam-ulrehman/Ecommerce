import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { paragraphLimit } from '../../utils/helper'

const LandingProduct = () => {
  const { featureProducts } = useSelector((state) => state.product)

  return (
    <Wrapper>
      <div className='container'>
        {featureProducts
          .map((item, index) => {
            return (
              <div className='container-holder' key={index}>
                <div className='image-container'>
                  <img src={item.uploadImage[0].secure_url} alt='' />
                </div>
                <div className='body-container'>
                  <div className='heading'>
                    <span>
                      <strong>{item.title}</strong>
                    </span>
                    <span>
                      <strong>{item.category}</strong>
                    </span>
                  </div>
                  <p>{paragraphLimit(item.description, 130)}</p>
                </div>
                <div className='footer-container'>
                  <Link className='btn' to={`/products/${item._id}`}>
                    Order Now
                  </Link>
                </div>
              </div>
            )
          })
          .slice(0, 4)}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: calc(100vh - 54px);
  border: 2px solid black;

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;

    place-items: center;
    justify-content: center;
    min-height: calc(100vh - 54px);
  }
  .container-holder {
    max-width: 300px;
    box-shadow: var(--shadow-2);
  }
  .image-container {
    width: 300px;
    height: 300px;
    img {
      width: 100%;
    }
  }
  .body-container {
    .heading {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      text-transform: capitalize;
    }
    p {
      padding: 0 1rem;
      margin: 0;
    }
  }
  .footer-container {
    display: grid;
    text-align: center;
  }
`
export default LandingProduct
