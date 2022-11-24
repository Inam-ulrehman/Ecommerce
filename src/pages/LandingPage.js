import React from 'react'
import { Helmet } from 'react-helmet-async'
import GoogleMaps from '../components/GoogleMaps'

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Welcome to our home Page' />
        <link rel='canonical' href='/' />
      </Helmet>
      <h1>this is our landing page</h1>
      <GoogleMaps />
    </>
  )
}

export default LandingPage
