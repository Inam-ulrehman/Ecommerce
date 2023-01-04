import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { customFetch } from '../../utils/axios'

const initialState = {
  sectionOne: '',
  sectionTwo: '',
  sectionThree: '',
  contentContacts: '',
  contentSocialLinks: '',
  aboutUsTitle: '',
  aboutUs: [],
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
      const resultAboutUsTitle = await customFetch.get('/ContentAboutUsTitle')
      const resultAboutUs = await customFetch.get('/ContentAboutUs')

      const sectionOne = resultOne.data.sectionOne
      const sectionTwo = resultTwo.data.sectionTwo
      const sectionThree = resultThree.data.sectionThree
      const contentContacts = resultContact.data.contentContact
      const contentSocialLinks = resultSocialLinks.data.contentSocialLink
      const aboutUsTitle = resultAboutUsTitle.data.contentAboutUsTitle
      const aboutUs = resultAboutUs.data.contentAboutUs

      const data = [
        sectionOne,
        sectionTwo,
        sectionThree,
        contentContacts,
        contentSocialLinks,
        aboutUsTitle,
        aboutUs,
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
      state.aboutUsTitle = payload[5]
      state.aboutUs = payload[6]
      state.isLoading = false
    },
    [websiteContentThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
    },
  },
})
export const { createFunction } = websiteContentSlice.actions
export default websiteContentSlice.reducer
