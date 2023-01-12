import React from 'react'
import styled from 'styled-components'
import SubCategoryHolder from './SubCategoryHolder'

const SubCategory = ({ item, products }) => {
  const subCategoryProducts = products.filter(
    (items) => items.subCategory === item
  )
  return (
    <Wrapper>
      <h5 className='title'>{item}</h5>
      {/* sub category holder */}
      <SubCategoryHolder subCategoryProducts={subCategoryProducts} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  h5 {
    text-transform: uppercase;
  }
`
export default SubCategory
