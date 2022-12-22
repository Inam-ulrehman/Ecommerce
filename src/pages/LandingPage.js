import React from 'react'
import { Helmet } from 'react-helmet-async'
import {
  LandingPortFolio,
  LandingProduct,
  LandingShare,
} from '../components/landing'

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Welcome to our home Page' />
        <link rel='canonical' href='/' />
      </Helmet>
      <LandingShare />
      <LandingProduct />
      <LandingShare />
      <LandingPortFolio />
      <LandingShare />
    </>
  )
}

export default LandingPage
