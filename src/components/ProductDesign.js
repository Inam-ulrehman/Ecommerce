import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductDesign = ({ item }) => {
  const image = item.uploadImage[0].secure_url

  return (
    <Link to={item._id}>
      <Wrapper>
        <p className='title'>
          <strong>{item.title}</strong>
        </p>
        <div className='img-container'>
          <img src={image} alt='' />
        </div>
      </Wrapper>
    </Link>
  )
}
const Wrapper = styled.div`
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  margin: 5px;
  position: relative;
  .title {
    padding: 5px;
    width: 100%;
    position: absolute;
    top: -17px;
    color: var(--primary-7);
    background-color: var(--white);

    margin-bottom: 0px;
  }
  .img-container {
    max-width: 250px;
    max-height: 250px;
    transition: var(--transition-1);
    :hover {
      box-shadow: var(--shadow-3);
      p {
        background-color: pink;
      }
    }

    img {
      width: 100%;
    }
  }
  @media (max-width: 620px) {
    .img-container {
      max-width: 180px;
      max-height: 180px;
    }
  }
  @media (max-width: 400px) {
    .img-container {
      max-width: 160px;
      max-height: 160px;
    }
  }
`
export default ProductDesign
