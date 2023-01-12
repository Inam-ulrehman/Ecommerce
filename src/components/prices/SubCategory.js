import React from 'react'
import SubCategoryHolder from './SubCategoryHolder'

const SubCategory = ({ item, products }) => {
  const subCategoryProducts = products.filter(
    (items) => items.subCategory === item
  )
  return (
    <div>
      {item}
      {/* sub category holder */}
      <SubCategoryHolder subCategoryProducts={subCategoryProducts} />
    </div>
  )
}

export default SubCategory
