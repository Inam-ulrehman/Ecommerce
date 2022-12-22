import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import { TeamMember } from '../components'
import { aboutHeading, teamMembers } from '../utils/data'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Developers Team</title>
        <meta
          name='description'
          content='We have very hardworking and dedicated team members, teamwork play a huge role in a project and outcomes shine when it comes to good understanding.'
        />
        <link rel='canonical' href='/about' />
      </Helmet>
      <Wrapper>
        {/* headings */}
        <div className='box-1'>
          <div className='heading'>
            <h1 className='title'>{aboutHeading.title}</h1>
            <div className='title-underline'></div>
            <p className='small'>{aboutHeading.paragraph}</p>
          </div>
        </div>
        {/* Team Members */}
        <div className='box-2'>
          {teamMembers.map((item, index) => {
            const { img, titleName, titleJob, description } = item
            return (
              <TeamMember
                key={index}
                img={img}
                titleJob={titleJob}
                titleName={titleName}
                description={description}
              />
            )
          })}
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  display: grid;
  .box-1 {
    padding: 2rem;
    h1 {
      padding-top: 1.5rem;
      font-size: 2rem;
    }
    p {
      margin: 1rem auto;
    }
  }
  /* Team Members */

  .box-2 {
    display: flex;
    flex-wrap: wrap;
  }
`
export default About
