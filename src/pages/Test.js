import React from 'react'
import { Helmet } from 'react-helmet-async'

const Test = () => {
  return (
    <>
      <Helmet>
        <title>Test</title>
        <meta name='description' content='Welcome to our Test Page' />
        <link rel='canonical' href='/about' />
      </Helmet>
      <div></div>
    </>
  )
}

export default Test
