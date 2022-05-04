import { useState } from 'react'
import useUser from '../../core/hooks/useUser'

import { Main } from './Components/Main'
import { Sidebar } from './Components/Sidebar'
import { DashboardContainer } from './DashboardElements'

export const Dashboard = () => {
  const { showSidebar } = useUser()

  return (
    <DashboardContainer>
      <Sidebar showSidebar={showSidebar} />
      <Main />
    </DashboardContainer>
  )
}
