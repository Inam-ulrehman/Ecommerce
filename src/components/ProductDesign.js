import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProductDesign = ({ item }) => {
  const image = item.uploadImage[0].secure_url
  return (
    <Link to={item._id}>
      <Wrapper>
        <div className='img-container'>
          <img src={image} alt='' />
        </div>
      </Wrapper>
    </Link>
  )
}
const Wrapper = styled.div`
  padding: 1rem;
  .img-container {
    max-width: 250px;
    img {
      width: 100%;
    }
  }
`
export default ProductDesign
