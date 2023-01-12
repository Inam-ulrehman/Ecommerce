import React from 'react'
import SubCategory from './SubCategory'

const Category = ({ category, products }) => {
  const filterSubCategory = products.filter(
    (item) => item.category === category
  )
  const data = filterSubCategory.map((item) => item.subCategory)
  const uniqueSubCategory = [...new Set(data)]
  return (
    <div>
      {uniqueSubCategory.map((item, index) => {
        return <SubCategory key={index} item={item} products={products} />
      })}
    </div>
  )
}

export default Category
