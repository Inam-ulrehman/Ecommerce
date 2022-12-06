import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils/axios'
import { getUniqueValues } from '../../utils/helper'

const initialState = {
  category: [],
  initialProductList: [],
  productList: [],
  nbHits: '',
  isLoading: false,
}

export const productThunk = createAsyncThunk(
  'product/productThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get()
      console.log('hello Thunk')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
//  ==== Get Products
export const getProductThunk = createAsyncThunk(
  'product/getProductThunk',
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get('/products')

      const { products, nbHits } = response.data
      const category = getUniqueValues(products, 'category')

      return { category, products, nbHits }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const userSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {
      console.log('function call')
    },
    productsCategories: (state, { payload }) => {
      if (payload === 'all') {
        state.productList = state.initialProductList
        return
      }
      const category = state.initialProductList.filter(
        (item) => item.category === payload
      )
      state.productList = category
    },
  },
  extraReducers: {
    [productThunk.pending]: (state, { payload }) => {
      console.log('promise pending')
      state.isLoading = true
    },
    [productThunk.fulfilled]: (state, { payload }) => {
      console.log('promise full filled')
      state.isLoading = false
    },
    [productThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
    // ==== get products

    [getProductThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getProductThunk.fulfilled]: (state, { payload }) => {
      const { category, products, nbHits } = payload
      state.category = category
      state.initialProductList = products
      state.productList = products
      state.nbHits = nbHits
      state.isLoading = false
    },
    [getProductThunk.rejected]: (state, { payload }) => {
      toast.error(`${payload?.msg ? payload.msg : payload}`)

      state.isLoading = false
    },
  },
})
export const { createFunction, productsCategories } = userSlice.actions
export default userSlice.reducer
