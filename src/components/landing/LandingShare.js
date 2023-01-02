import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { landingPage } from '../../utils/data'

const LandingShare = ({ landingPage }) => {
  return (
    <Wrapper>
      <div className='box box-mobile'>
        <h1>{landingPage.heading}</h1>
        <img src={landingPage.desktopImage} alt='Inam web Solutions' />
        <p>{landingPage.paragraph}</p>
        <Link to={'/products'} className='btn'>
          {landingPage.buttonTitle}
        </Link>
      </div>
      <div className='box box-desktop'>
        <img src={landingPage.desktopImage} alt='computerPicture' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  h1 {
    margin-left: 0;
  }
  p {
    font-size: 1.2rem;
  }
  .box {
    min-height: 100vh;
  }
  .box-mobile {
    display: grid;
    padding: 2rem;
    align-content: center;
    justify-items: center;

    img {
      max-width: 300px;
    }
  }
  .box-desktop {
    display: none;
    img {
      width: 90%;
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: 1.5fr 1fr;
    .box-desktop {
      display: grid;
      align-content: end;
    }
    .box-mobile {
      padding: 4rem;
      background: linear-gradient(
        90deg,
        rgba(100, 116, 139, 1) 0%,
        rgba(226, 232, 240, 1) 94%,
        rgba(248, 250, 252, 1) 100%
      );
      img {
        display: none;
      }
    }
  }
`
export default LandingShare
