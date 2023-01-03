import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customFetch } from '../../utils/axios'

const initialState = {
  sectionOne: '',
  sectionTwo: '',
  sectionThree: '',
  contentContacts: '',
  contentSocialLinks: '',
  isLoading: false,
}

export const websiteContentThunk = createAsyncThunk(
  'websiteContent/websiteContentThunk',
  async (_, thunkAPI) => {
    try {
      const resultOne = await customFetch.get('/sectionOne')
      const resultTwo = await customFetch.get('/sectionTwo')
      const resultThree = await customFetch.get('/sectionThree')
      const resultContact = await customFetch.get('/contentContact')
      const resultSocialLinks = await customFetch.get('/contentSocialLinks')

      const sectionOne = resultOne.data.sectionOne
      const sectionTwo = resultTwo.data.sectionTwo
      const sectionThree = resultThree.data.sectionThree
      const contentContacts = resultContact.data.contentContact
      const contentSocialLinks = resultSocialLinks.data.contentSocialLink
      const data = [
        sectionOne,
        sectionTwo,
        sectionThree,
        contentContacts,
        contentSocialLinks,
      ]

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
      state.contentContacts = payload[3]
      state.contentSocialLinks = payload[4]
      state.isLoading = false
    },
    [websiteContentThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
  },
})
export const { createFunction } = websiteContentSlice.actions
export default websiteContentSlice.reducer
