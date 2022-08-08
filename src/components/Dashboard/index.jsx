import { useContext, useEffect } from 'react'
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom'
import { Context } from '../../core/context/UserContext'
import { useUser } from '../../core/hooks/useUser'
import { Interviews } from '../Interviews'
import { Login } from '../Login/index copy 6'
import { Dashboard } from '../Start'
import { Users } from '../Users'
import { Sidebar } from './Components/Sidebar copy 2'
import { DashboardContainer } from './DashboardElements'

export const Dashboard2 = () => {
  const { sidebar } = useUser()
  let { path, url } = useRouteMatch()
  const history = useHistory
  const { isAuth } = useContext(Context)

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
