import React from 'react'

const SubCategory = ({ item, products }) => {
  const singleProduct = products.filter((items) => items.subCategory === item)
  return (
    <div>
      {item}
      {/* sub category holder */}
      <div>{singleProduct.map((item) => item.title)}</div>
    </div>
  )
}

export default SubCategory
