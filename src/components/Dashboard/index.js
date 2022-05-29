import { useState } from 'react'
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom'

import { DashboardContainer } from './DashboardElements'
import { Sidebar } from './Components/Sidebar copy 2'
import { Intervies } from './Components/Interview'

export const Dashboard = () => {
  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <DashboardContainer sidebar={sidebar}>
      <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
      <Intervies sidebar={sidebar} />
    </DashboardContainer>
  )
}
