import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import styled from 'styled-components'

const Stars = ({ rating }) => {
  console.log(Math.round(rating))

  return (
    <Wrapper>
      <span>{rating >= rating ? <AiFillStar /> : <AiOutlineStar />}</span>
      <span>{rating >= rating ? <AiFillStar /> : <AiOutlineStar />}</span>
      <span>{rating >= rating ? <AiFillStar /> : <AiOutlineStar />}</span>
      <span>{rating >= rating ? <AiFillStar /> : <AiOutlineStar />}</span>
      <span>{rating >= rating ? <AiFillStar /> : <AiOutlineStar />}</span>
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
