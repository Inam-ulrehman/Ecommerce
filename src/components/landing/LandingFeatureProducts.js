import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { paragraphLimit } from '../../utils/helper'

const LandingFeatureProduct = () => {
  const { featureProducts } = useSelector((state) => state.product)

  return (
    <Wrapper>
      <h3 className='title'>feature Products</h3>
      <div className='title-underline'></div>
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

  display: grid;
  align-items: center;
  .container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 1rem;
  }
  .container-holder {
    max-width: 280px;
    box-shadow: var(--shadow-2);
  }
  .image-container {
    width: 280px;
    height: 280px;
    img {
      width: 100%;
    }
  }
  .body-container {
    .heading {
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
      text-transform: capitalize;
    }
    p,
    span {
      font-size: small;
    }
    p {
      padding: 0 5px;
      margin: 0;
      height: 91px;
    }
  }
  .footer-container {
    display: grid;
    text-align: center;
  }
  @media (max-width: 1024px) {
    .container-holder {
      max-width: 230px;
    }

    .image-container {
      width: 230px;
      height: 230px;
    }
  }
  @media (max-width: 992px) {
    .container-holder {
      max-width: 180px;
    }

    .image-container {
      width: 180px;
      height: 180px;
    }
  }
  @media (max-width: 768px) {
    .container-holder {
      margin-top: 1rem;
      max-width: 300px;
    }

    .image-container {
      width: 300px;
      height: 300px;
    }
  }
  @media (max-width: 620px) {
    .container-holder {
      max-width: 180px;
    }

    .image-container {
      width: 180px;
      height: 180px;
    }
  }
`
export default LandingFeatureProduct
