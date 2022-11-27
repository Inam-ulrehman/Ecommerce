import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { verifyUserThunk } from '../features/user/userSlice'

const VerifyUser = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(verifyUserThunk(id))
    // eslint-disable-next-line
  }, [])
  return <div>VerifyUser</div>
}

export default VerifyUser
