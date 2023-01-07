import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { paragraphLimit } from '../../utils/helper'

const LandingFeatureProduct = () => {
  const { featureProducts } = useSelector((state) => state.product)

  return (
    <Wrapper>
      <div className='container-header'>
        <h3 className='title'>Feature Products</h3>
        <div className='title-underline'></div>
      </div>
      <div className='container'>
        {featureProducts
          .map((item, index) => {
            return (
              <div className='container-holder' key={index}>
                <div className='container-image'>
                  <img src={item.uploadImage[0].secure_url} alt='' />
                </div>
                <div className='container-body'>
                  <div className='heading'>
                    <span>
                      <strong>{item.title}</strong>
                    </span>
                    <span>
                      <strong>{item.category}</strong>
                    </span>
                  </div>
                  <p>{paragraphLimit(item.description, 120)}</p>
                </div>
                <div className='container-footer'>
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

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem;
  }
  .container-holder {
    max-width: 280px;
    box-shadow: var(--shadow-2);
  }
  .container-image {
    width: 280px;
    height: 280px;
    img {
      width: 100%;
    }
  }
  .container-body {
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
    span {
      overflow: hidden;
      white-space: nowrap;
    }
    p {
      padding: 0 5px;
      margin: 0;
      height: 71px;
    }
  }
  .container-footer {
    display: grid;
    text-align: center;
  }
  @media (max-width: 1024px) {
    .container-holder {
      max-width: 230px;
    }

    .container-image {
      width: 230px;
      height: 230px;
    }
    .container-body {
      p {
        height: 91px;
      }
    }
  }
  @media (max-width: 992px) {
    .container-holder {
      max-width: 180px;
    }

    .container-image {
      width: 180px;
      height: 180px;
    }
    .container-body {
      p {
        height: 121px;
      }
    }
  }
  @media (max-width: 768px) {
    .container-holder {
      margin-top: 1rem;
      max-width: 300px;
    }

    .container-image {
      width: 300px;
      height: 300px;
    }
    .container-body {
      p {
        height: 81px;
      }
    }
  }
  @media (max-width: 620px) {
    .container-holder {
      max-width: 180px;
    }

    .container-image {
      width: 180px;
      height: 180px;
    }
    .container-body {
      p {
        height: 112px;
      }
    }
  }
  @media (max-width: 480px) {
    .container-holder {
      max-width: 160px;
    }

    .container-image {
      width: 160px;
      height: 160px;
      img {
        width: 100%;
      }
    }
    .container-body {
      p {
        height: 137px;
      }
    }
  }
  .container-footer {
    font-size: 12px;
  }
`
export default LandingFeatureProduct
