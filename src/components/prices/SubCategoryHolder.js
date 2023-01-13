import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../../utils/helper'

const SubCategoryHolder = ({ subCategoryProducts }) => {
  return (
    <Wrapper>
      {subCategoryProducts.map((item, index) => {
        return (
          <div className='container' key={index}>
            <div className='box-holder'>
              <span className='box-1'> {item.title}</span>
              <span className='box-2'> {formatPrice(item.amount)}</span>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-shadow: var(--shadow-2);
  background-color: var(--grey-05);
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  span {
    text-transform: capitalize;
  }
  .box-holder {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .box-2 {
  }
`

export default SubCategoryHolder
