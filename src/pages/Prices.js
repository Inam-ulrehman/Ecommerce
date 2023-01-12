import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Category } from '../components/prices'
import { getUniqueValues } from '../utils/helper'

const Prices = () => {
  const { initialProductList: products } = useSelector((state) => state.product)

  const uniqueValues = (product, value) => {
    const result = products
      .map((item) => item[value])
      .filter((item) => item !== '')
    return [...new Set(result)]
  }
  const category = uniqueValues(products, 'category')

  return (
    <Wrapper>
      {category.map((item, index) => {
        return (
          <div className='container' key={index}>
            <h3>{item}</h3>
            <Category category={item} products={products} />
          </div>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .container {
    margin: 1rem;
    border: 2px solid black;
  }
`
export default Prices
