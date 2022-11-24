import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { navbar } from '../../utils/data'
import Logo from '../Logo'

const DesktopNavbar = () => {
  return (
    <Wrapper>
      <Logo />
      <ul>
        {navbar.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  overflow: hidden;
  box-shadow: var(--shadow-2);
  height: 3.2rem;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100vw;
  ul {
    display: flex;
    margin-right: 1rem;
    li {
      margin-top: -5px;
      a {
        padding: 1rem;
        color: var(--black);
        transition: var(--transition);
        :hover {
          background-color: var(--primary-5);
          color: var(--white);
        }
      }
    }
  }
  /* nav active */
  .active {
    background-color: var(--primary-5);
    color: var(--white);
  }
  @media (max-width: 600px) {
    display: none;
  }
`
export default DesktopNavbar
