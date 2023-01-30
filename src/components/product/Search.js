import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { clearState, getStateValues } from '../../features/product/productSlice'

const Search = () => {
  const dispatch = useDispatch()
  const { searchTitle, sort, limit } = useSelector((state) => state.product)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(getStateValues({ name, value }))
  }

  const handleClear = () => {
    dispatch(clearState())
  }
  return (
    <Wrapper>
      <div className='search'>
        <input
          type='text'
          value={searchTitle}
          name='searchTitle'
          onChange={handleChange}
          placeholder={'Search by Name'}
        />
        <button
          className='btn clear-filter'
          type='button'
          onClick={handleClear}
        >
          Clear Filter
        </button>
      </div>
      {/* =======box divider======= */}
      <div className='sort-limit-feature'>
        <div className='sort-limit'>
          <div className='limit'>
            <label htmlFor='limit'>Limit</label>
            <select
              name='limit'
              value={limit}
              id='limit'
              onChange={handleChange}
            >
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
            </select>
          </div>
          <div className='sort'>
            <label htmlFor='sort'>Sort</label>
            <select name='sort' id='sort' value={sort} onChange={handleChange}>
              <option value='-createdAt'>SELECT OPTIONS</option>
              <option value='-createdAt'>DATE NEW</option>
              <option value='createdAt'>DATE OLD</option>
              <option value='title'>NAME A-Z</option>
              <option value='-title'>NAME Z-A</option>
            </select>
          </div>
          <div className='feature'></div>
          <div className='clear-filter'></div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .sort-limit {
    display: flex;
  }
  @media (max-width: 600px) {
    display: grid;
  }
`
export default Search
