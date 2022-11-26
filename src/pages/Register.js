import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const Register = () => {
  const [login, setLogin] = useState(true)
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = nameRef.current?.value
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (!email || !password || (!login && !name)) {
      toast.error('Please enter your credentials.')
      return
    }
    if (login) {
      console.log(` Email: ${email}, Password: ${password}`)
      return
    } else {
      console.log(`Name: ${name} Email: ${email}, Password: ${password}`)
    }
    // const name = nameRef.current.value
  }
  // handle Login
  const handleLogin = () => {
    setLogin(!login)
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        {/* name input */}
        {!login && (
          <div>
            <label className='form-label' htmlFor='name'>
              Name
            </label>
            <input className='form-input' ref={nameRef} type='text' />
          </div>
        )}
        {/* email input */}
        <label className='form-label' htmlFor='email'>
          Email
        </label>
        <input className='form-input' ref={emailRef} type='text' />
        {/* name input */}
        <label className='form-label' htmlFor='password'>
          Password
        </label>
        <input className='form-input' ref={passwordRef} type='password' />
        <div>
          {login ? (
            <button type='submit' className='btn'>
              LogIn
            </button>
          ) : (
            <button type='submit' className='btn'>
              Register
            </button>
          )}
        </div>

        <p>
          {login ? 'You are not a member ?' : 'Are you a member ?'}
          <button className='login-button' onClick={handleLogin} type='button'>
            {login ? 'Register' : 'LogIn'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: calc(100vh - 3.2rem);
  form {
    margin-top: 6rem;
  }
  .login-button {
    background: var(--grey-3);
    border: transparent;
    font-size: large;
    border-bottom: 2px solid var(--primary-7);
    margin-left: 1rem;
    border-radius: var(--radius);

    padding: 5px;
    transition: var(--transition);

    :hover {
      cursor: pointer;
      background: var(--primary-5);
      color: white;
    }
  }
`
export default Register
