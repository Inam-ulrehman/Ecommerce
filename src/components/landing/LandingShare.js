import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { landingPage } from '../../utils/data'
const url =
  'https://res.cloudinary.com/inam6530/image/upload/v1667055870/inamwebsolutions/Untitled_design_qebmwe.svg'

const LandingShare = ({ landingPage }) => {
  if (!landingPage) {
    return (
      <Wrapper>
        <div className='box box-mobile'>
          <h1>Waiting For Results...</h1>
          <img src={url} alt='Inam web Solutions' />
          <p>Waiting For Results...</p>
          <Link to={'/products'} className='btn'>
            Products
          </Link>
        </div>
        <div className='box box-desktop'>
          <img src={url} alt='computerPicture' />
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className='box box-mobile'>
        <h1>{landingPage?.heading}</h1>
        <img
          src={landingPage?.uploadImage[0]?.secure_url}
          alt='Inam web Solutions'
        />
        <p>{landingPage?.paragraph}</p>
        <Link to={'/products'} className='btn'>
          {landingPage?.buttonTitle}
        </Link>
      </div>
      <div className='box box-desktop'>
        <img
          src={landingPage?.uploadImage[0]?.secure_url}
          alt='computerPicture'
        />
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
    min-height: calc(100vh - 3.2rem);
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
