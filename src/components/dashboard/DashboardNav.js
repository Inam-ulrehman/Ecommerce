import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { dashboardNavLink } from '../../utils/data'

const DashboardNav = () => {
  return (
    <Wrapper>
      {dashboardNavLink.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  li {
    padding: 1rem;
    a {
      color: black;
    }
  }

  background-color: var(--primary-1);
`

export default DashboardNav
