import { useState } from 'react'

import { Main } from './Components/Main'
import { Sidebar } from './Components/Sidebar'
// import { Sidebar } from './Components/ToolBar copy 5/Sidebar'
import { DashboardContainer } from './DashboardElements'

export const Dashboard = () => {
  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <DashboardContainer sidebar={sidebar}>
      {/* <Sidebar showSidebar={showSidebar} /> */}
      <Sidebar showSidebar={showSidebar} />
      <Main sidebar={sidebar} />
    </DashboardContainer>
  )
}
