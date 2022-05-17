import { useState } from 'react'

import { Main } from './Components/Main'
import { Sidebar } from './Components/Sidebar copy 2'
// import { Sidebar } from './Components/ToolBar copy 5/Sidebar'
import { DashboardContainer } from './DashboardElements'

export const Dashboard = () => {
  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <DashboardContainer sidebar={sidebar}>
      {/* <Sidebar showSidebar={showSidebar} /> */}
      <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
      <Main sidebar={sidebar} />
    </DashboardContainer>
  )
}
