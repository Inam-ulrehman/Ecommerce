import React from 'react'
import styled from 'styled-components'
import DashboardNav from '../components/dashboard/DashboardNav'

const Dashboard = () => {
  return (
    <Wrapper>
      <DashboardNav />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - 3.2rem);
`
export default Dashboard
