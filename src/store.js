import { configureStore } from '@reduxjs/toolkit'
import orderSlice from './features/order/orderSlice'
import productSlice from './features/product/productSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    order: orderSlice,
  },
})

export default store
