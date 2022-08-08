import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { useUser } from '../../core/hooks/useUser'
import { Interviews } from '../Interviews'
import { Dashboard } from '../Start'
import { Users } from '../Users'
import { Sidebar } from './Components/Sidebar copy 2'
import { DashboardContainer } from './DashboardElements'

export const Dashboard2 = () => {
  const { sidebar } = useUser()
  let { path } = useRouteMatch()

  const show = () => {
    switch (path) {
      case '/dashboard':
        return <Route path={path} component={Dashboard} />
      case '/usuarios':
        return <Route path={path} component={Users} />
      case '/entrevistas':
        return <Route path={path} component={Interviews} />
      case '/entrevista':
        return <Route path={`${path}/:interviewId`} component={Interviews} />

      default:
        return <Route path={path} component={Dashboard} />
    }
  }

  return (
    <DashboardContainer sidebar={sidebar}>
      <Sidebar />

      <Switch>{show()}</Switch>
    </DashboardContainer>
  )
}
g