import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customFetch } from '../../utils/axios'

const initialState = {
  sectionOne: '',
  sectionTwo: '',
  sectionThree: '',
  isLoading: false,
}

export const websiteContentThunk = createAsyncThunk(
  'websiteContent/websiteContentThunk',
  async (_, thunkAPI) => {
    try {
      const resultOne = await customFetch.get('/sectionOne')
      const resultTwo = await customFetch.get('/sectionTwo')
      const resultThree = await customFetch.get('/sectionThree')

      const sectionOne = resultOne.data.sectionOne[0]
      const sectionTwo = resultTwo.data.sectionTwo[0]
      const sectionThree = resultThree.data.sectionThree[0]
      const data = [sectionOne, sectionTwo, sectionThree]

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const websiteContentSlice = createSlice({
  name: 'websiteContent',
  initialState,
  reducers: {
    createFunction: (state, { payload }) => {
      console.log('function call')
    },
  },
  extraReducers: {
    [websiteContentThunk.pending]: (state, { payload }) => {
      state.isLoading = true
    },
    [websiteContentThunk.fulfilled]: (state, { payload }) => {
      state.sectionOne = payload[0]
      state.sectionTwo = payload[1]
      state.sectionThree = payload[2]
      state.isLoading = false
    },
    [websiteContentThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
  },
})
export const { createFunction } = websiteContentSlice.actions
export default websiteContentSlice.reducer
