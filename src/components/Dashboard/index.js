import { useState } from 'react'

import { Main } from './Components/Main'
import { Sidebar } from './Components/Sidebar'
import { DashboardContainer } from './DashboardElements'

export const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <DashboardContainer>
      <Sidebar showSidebar={showSidebar} />
      <Main />
    </DashboardContainer>
  )
}
