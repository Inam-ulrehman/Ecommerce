import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import {
  LandingPortFolio,
  LandingProduct,
  LandingShare,
} from '../components/landing'

const LandingPage = () => {
  const { sectionOne, sectionTwo, sectionThree } = useSelector(
    (state) => state.websiteContent
  )
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Welcome to our home Page' />
        <link rel='canonical' href='/' />
      </Helmet>
      <LandingShare landingPage={sectionOne} />
      <LandingProduct />
      <LandingShare landingPage={sectionTwo} />
      <LandingPortFolio />
      <LandingShare landingPage={sectionThree} />
    </>
  )
}

export default LandingPage
