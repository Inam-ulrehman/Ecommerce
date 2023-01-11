import React from 'react'
import {
  FaCartArrowDown,
  FaSignInAlt,
  FaSignOutAlt,
  FaPhoneAlt,
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { logOut } from '../../features/user/userSlice'
import { navbar } from '../../utils/data'
import Logo from '../Logo'

const DesktopNavbar = () => {
  const { user, product, websiteContent } = useSelector((state) => state)
  const { mobileNumber } = websiteContent.contentContacts
  const mobileLink = `tel:${mobileNumber}`

  const dispatch = useDispatch()
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
        {user.isMember && (
          <li>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
          </li>
        )}
        {user.isMember ? (
          <li onClick={() => dispatch(logOut())}>
            <Link to='/'>
              <FaSignOutAlt /> LogOut
            </Link>
          </li>
        ) : (
          <li>
            <Link to='/register'>
              <FaSignInAlt /> LogIn
            </Link>
          </li>
        )}
        {product.cart.length > 0 && (
          <li>
            <Link to='/cart'>
              <FaCartArrowDown /> Cart
            </Link>
          </li>
        )}
      </ul>
      <div className='number'>
        <a href={mobileLink}>
          <span>
            <FaPhoneAlt />
          </span>
          {mobileNumber}
        </a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  box-shadow: var(--shadow-2);
  height: 3.2rem;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
  .number {
    position: absolute;
    right: 0%;
    top: 100%;
    border: 2px solid black;
    padding-right: 2rem;

    span {
      margin-right: 1rem;
    }
  }
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
