import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom'

import { DashboardContainer } from './DashboardElements'
import { Sidebar } from './Components/Sidebar copy 2'
import { Main } from './Components/Main'

export const Dashboard = () => {


  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <DashboardContainer sidebar={sidebar}>
      <Sidebar showSidebar={showSidebar} sidebar={sidebar} />

      <Router>
        <Switch>
          {/* <Route exact path="info-general" component={Home} /> */}
          <Route exact path="/interviews">
            <Main sidebar={sidebar} />
          </Route>
        </Switch>
      </Router>
    </DashboardContainer>
  )
}
