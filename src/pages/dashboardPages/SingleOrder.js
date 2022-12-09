import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleOrderThunk } from '../../features/order/orderSlice'

const SingleOrder = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.order)
  const { _id } = useParams()

  useEffect(() => {
    dispatch(getSingleOrderThunk(_id))
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    return (
      <>
        <h1 className='title'>Loading...</h1>
        <div className='loading'></div>
      </>
    )
  }
  return (
    <div>
      <h2>{_id}</h2>
    </div>
  )
}

export default SingleOrder
