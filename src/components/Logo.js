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
      <img src={image} alt='' />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-left: 1rem;
  margin-top: -75px;
  img {
    width: 100%;
  }
  transition: var(--transition-1);
  :hover {
    cursor: pointer;
    scale: 1.1;
  }
`
export default Logo
