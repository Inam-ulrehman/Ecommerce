import moment from 'moment/moment'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FormInput from '../../components/FormInput'
import { customFetch } from '../../utils/axios'

const initialState = {
  category: '',
  date: '',
  bookingId: '',
  slot: [],
}

const Booking = () => {
  const [state, setState] = useState(initialState)
  const { initialProductList } = useSelector((state) => state.product)

  const uniqueCategory = [
    'select',
    ...new Set(initialProductList.map((item) => item.category)),
  ]
  moment(state.date).format('dddd')

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit form')
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setState({ ...state, [name]: value })
  }

  const handleBooking = async (_id) => {
    setState({ ...state, bookingId: _id })
  }

  const getSlots = async () => {
    const result = await customFetch.get('/slots')
    console.log('hello')
    setState({ ...state, slot: result.data.slots })
  }
  useEffect(() => {
    getSlots()
    // eslint-disable-next-line
  }, [state.date])
  return (
    <Wrapper>
      {/* ===== Category ====== */}

      <div>
        <label htmlFor='category'>Pick a category</label>
        <select
          name='category'
          id='category'
          value={state.category}
          onChange={handleChange}
        >
          {uniqueCategory.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            )
          })}
        </select>
      </div>

      {/* ====date======= */}

      {state.category && state.category !== 'select' && (
        <div>
          <div>
            <h1>Please pick a date</h1>
          </div>
          <input
            type='date'
            name='date'
            id='date'
            value={state.date}
            onChange={handleChange}
          />
        </div>
      )}

      {/* ======Show day====== */}
      {moment(state.date).format('dddd') === 'Sunday' && (
        <h4>Sorry we're closed sundays.</h4>
      )}
      {state.category &&
        state.category !== 'select' &&
        state.date &&
        moment(state.date).format('dddd') !== 'Sunday' && (
          <div className='day-container'>
            <div className='date-holder'>
              <span>{moment(state.date).format('dddd')} </span>
              <span>Available Dates</span>
            </div>
            <div className='day-body'>
              {state.slot.map((item, index) => {
                return (
                  <div
                    className={
                      item._id === state.bookingId
                        ? 'day-holder active'
                        : 'day-holder'
                    }
                    onClick={() => handleBooking(item._id)}
                    key={index}
                  >
                    {item.startTime} - {item.endTime}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      {/* =====Customer Details ====== */}
      {state.category &&
        state.category !== 'select' &&
        state.date &&
        state.bookingId &&
        moment(state.date).format('dddd') !== 'Sunday' && (
          <div className='customer-details'>
            <form className='form' onSubmit={handleSubmit}>
              {/* name */}
              <FormInput
                name='name'
                value={state.name}
                onChange={handleChange}
              />
              {/* email */}
              <FormInput
                name='email'
                value={state.email}
                onChange={handleChange}
              />
              {/* Note */}
              <div>
                <label className='form-label' htmlFor='note'>
                  Note
                </label>
                <textarea
                  className='form-textarea'
                  name='note'
                  id='note'
                  cols='30'
                  rows='10'
                ></textarea>
              </div>
              <button type='submit' className='btn'>
                Submit
              </button>
            </form>
          </div>
        )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .day-container {
    .date-holder {
      span {
        margin: 1rem;
      }
    }

    .day-body {
      display: flex;
      flex-wrap: wrap;
      border: 2px solid black;
    }
    .day-holder {
      box-shadow: var(--shadow-1);
      margin: 1rem;
      padding: 1rem;
      transition: var(--transition-1);
      :hover {
        background-color: var(--green-light);

        cursor: pointer;
      }
    }
  }
  .active {
    background-color: var(--green-light);
  }
`
export default Booking
