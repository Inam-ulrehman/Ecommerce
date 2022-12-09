import React from 'react'
import styled from 'styled-components'

const Dashboard = () => {
  return <Wrapper>dashboard</Wrapper>
}

const Wrapper = styled.div`
  min-height: calc(100vh - 3.2rem);
  .empty-cart {
    display: grid;
    place-content: center;
    img {
      width: 400px;
    }
  }
`
export default Dashboard
