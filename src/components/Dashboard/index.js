import { useState } from 'react'
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom'

import { DashboardContainer } from './DashboardElements'
import { Sidebar } from './Components/Sidebar copy 2'
import { Main } from './Components/Main'

export const Dashboard = () => {
  let { path, url } = useRouteMatch()

  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <DashboardContainer sidebar={sidebar}>
      <h2>Entrevistas</h2>
      <Link to='crear-entrevista'/>
      {/* <Switch> */}
      {/* <Route exact path="info-general" component={Home} /> */}
      {/* <Route path="info-general" component={Home} /> */}
      {/* <Route exact path="/interviews"> */}
      {/* </Route> */}
      {/* </Switch> */}
      {/* <Main sidebar={sidebar} /> */}

      {/* <Switch>
        <Route exact path={path}>
      <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch> */}
    </DashboardContainer>
  )
}
