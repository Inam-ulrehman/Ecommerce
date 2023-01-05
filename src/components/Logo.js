import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Logo = () => {
  const navigate = useNavigate()
  const { logo } = useSelector((state) => state.websiteContent)
  const image = logo?.uploadImage?.secure_url
  const handleClick = () => {
    navigate('/')
  }

  return (
    <Wrapper onClick={handleClick}>
      <img style={{ width: '60px', height: '60px' }} src={image} alt='' />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  transition: var(--transition-1);
  :hover {
    cursor: pointer;
    scale: 1.1;
  }
`
export default Logo
