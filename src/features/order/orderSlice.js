import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customFetch } from '../../utils/axios'
import { getUserFromLocalStorage } from '../../utils/localStorage'

const { token } = getUserFromLocalStorage('user')
  ? getUserFromLocalStorage('user')
  : { token: '' }

const initialState = {
  ordersList: [],
  isLoading: false,
}

export const orderThunk = createAsyncThunk(
  'order/orderThunk',
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
// Create Order
export const createOrderThunk = createAsyncThunk(
  'order/createOrderThunk',
  async (order, thunkAPI) => {
    try {
      const response = await customFetch.post('orders', order, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
// ====Get Orders====

export const getOrdersThunk = createAsyncThunk(
  'order/getOrdersThunk',
  async (_, thunkAPI) => {
    try {
      console.log('order there')
      // const response = await customFetch.get('orders', {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // })
      // console.log(response)
      // return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {
      console.log('function call')
    },
  },
  extraReducers: {
    [orderThunk.pending]: (state, { payload }) => {
      console.log('promise pending')
      state.isLoading = true
    },
    [orderThunk.fulfilled]: (state, { payload }) => {
      console.log('promise full filled')
      state.isLoading = false
    },
    [orderThunk.rejected]: (state, { payload }) => {
      console.log('promise rejected')
      state.isLoading = false
    },
    // Create Order
    [createOrderThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [createOrderThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
    },
    [createOrderThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
    // get Order
    [getOrdersThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [getOrdersThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
    },
    [getOrdersThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
  },
})
export const { createFunction } = orderSlice.actions
export default orderSlice.reducer
