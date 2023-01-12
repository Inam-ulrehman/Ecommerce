import React from 'react'
import { formatPrice } from '../../utils/helper'

const SubCategoryHolder = ({ subCategoryProducts }) => {
  return (
    <div>
      {subCategoryProducts.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <span> {item.title}</span>{' '}
              <span> {formatPrice(item.amount)}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SubCategoryHolder
