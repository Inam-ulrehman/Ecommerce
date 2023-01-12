import React from 'react'

const SubCategoryHolder = ({ subCategoryProducts }) => {
  return (
    <div>
      {subCategoryProducts.map((item, index) => {
        return <div key={index}>{item.title}</div>
      })}
    </div>
  )
}

export default SubCategoryHolder
