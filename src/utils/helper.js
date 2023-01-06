//==================filter===============

// get unique values for filter declare variable
// const categories = getUniqueValues(data,'categories')

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  // if its an array pass error array = [1,2,3]
  if (type === 'array') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}

//=================payments============

// format price for payments like stripe

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
  }).format(number / 100)
}

// ============Scroll up============
window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

// ==========bill calculator========

export const totalBill = (cart) => {
  const TotalAmount = cart.reduce((total, cart) => {
    let productQuantity = cart.quantity
    let productAmount = cart.amount * productQuantity
    total += productAmount

    return total
  }, 0)
  return TotalAmount
}
// =============Paragraph limit==========

export const paragraphLimit = (string, length) => {
  var trimmedString = string.substring(0, length) + '...'
  return trimmedString
}
