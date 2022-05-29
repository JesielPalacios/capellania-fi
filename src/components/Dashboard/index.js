import { useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import { DashboardContainer } from './DashboardElements'
import { Sidebar } from './Components/Sidebar copy 2'
import { Main } from './Components/Main'

export const Dashboard = () => {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch()

  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <DashboardContainer sidebar={sidebar}>
      {console.log(path,'-', url)}
      <Sidebar showSidebar={showSidebar} sidebar={sidebar} />

      {/* <Switch> */}
        {/* <Route exact path="info-general" component={Home} /> */}
        {/* <Route path="info-general" component={Home} /> */}
        {/* <Route exact path="/interviews"> */}
          <Main sidebar={sidebar} />
        {/* </Route> */}
      {/* </Switch> */}
    </DashboardContainer>
  )
}
