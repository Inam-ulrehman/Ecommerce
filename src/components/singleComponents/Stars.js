import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import styled from 'styled-components'

const Stars = ({ rating }) => {
  console.log(Math.round(rating))

  return (
    <Wrapper>
      <span>{rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}</span>
      <span>{rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}</span>
      <span>{rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}</span>
      <span>{rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}</span>
      <span>{rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}</span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  span {
    svg {
      path {
        color: orange;
      }
    }
  }
`
export default Stars
