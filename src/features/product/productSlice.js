import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils/axios'
import { getUniqueValues } from '../../utils/helper'
import {
  getCartFromLocalStorage,
  setCartInLocalStorage,
} from '../../utils/localStorage'

const cart = getCartFromLocalStorage()
const initialState = {
  category: [],
  initialProductList: [],
  productList: [],
  singleProduct: '',
  singleProductImages: [],
  nbHits: '',
  cart: cart || [],
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
//  ==== Get Single Products
export const getSingleProductThunk = createAsyncThunk(
  'product/getSingleProductThunk',
  async (_id, thunkAPI) => {
    try {
      const response = await customFetch.get(`products/static/${_id}`)

      return response.data.products
    } catch (error) {
      console.log(error.response)
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
    getCart: (state, { payload }) => {
      state.cart = [...state.cart, payload]
      setCartInLocalStorage(state.cart)
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
    //  ==== Get Single Product ====
    [getSingleProductThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getSingleProductThunk.fulfilled]: (state, { payload }) => {
      state.singleProduct = payload
      state.singleProductImages = payload.uploadImage
      state.isLoading = false
    },
    [getSingleProductThunk.rejected]: (state, { payload }) => {
      toast.error(`${payload?.msg ? payload.msg : payload}`)
      state.isLoading = false
    },
  },
})
export const { createFunction, productsCategories, getCart } = userSlice.actions
export default userSlice.reducer
