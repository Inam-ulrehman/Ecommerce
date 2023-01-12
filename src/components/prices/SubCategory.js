import React from 'react'
import SubCategoryHolder from './SubCategoryHolder'

const SubCategory = ({ item, products }) => {
  const subCategoryProducts = products.filter(
    (items) => items.subCategory === item
  )
  return (
    <div>
      <h5 className='title'>{item}</h5>
      {/* sub category holder */}
      <SubCategoryHolder subCategoryProducts={subCategoryProducts} />
    </div>
  )
}

export default SubCategory
