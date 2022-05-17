import { useState } from 'react'

import { DashboardContainer } from './DashboardElements'
import { Sidebar } from './Components/Sidebar copy 2'
import { Main } from './Components/Main'

export const Dashboard = () => {
  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <DashboardContainer sidebar={sidebar}>
      <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
      <Main sidebar={sidebar} />
    </DashboardContainer>
  )
}
