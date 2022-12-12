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

  :hover {
    box-shadow: var(--shadow-3);
    transform: scale(1.03);
    z-index: -1;
  }
  margin: 5px;
  .title {
    color: var(--primary-7);
    background-color: var(--white);

    margin-bottom: 0px;
  }
  .img-container {
    max-width: 250px;
    max-height: 250px;

    img {
      width: 100%;
    }
  }
`
export default ProductDesign
