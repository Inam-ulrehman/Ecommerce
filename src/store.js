import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/product/productSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
  },
})

export default store
