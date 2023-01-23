import React from 'react'
import { useState } from 'react'

const initialState = {
  date: '',
}
const Booking = () => {
  const [state, setState] = useState(initialState)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name)
  }
  return (
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
  )
}

export default Booking
