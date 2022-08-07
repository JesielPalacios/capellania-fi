import { useContext, useEffect } from 'react'
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom'
import { Context } from '../../core/context/UserContext'
import { useUser } from '../../core/hooks/useUser'
import { Interviews } from '../Interviews'
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
    // switch (path) {
    //   case '/dashboard':
    //     return Dashboard
    //   case '/users':
    //     return Users
    //   case '/entrevistas':
    //     return Interviews
    //   default:
    //     return Dashboard
    // }
    switch (path) {
      case '/dashboard':
        return <Route path={`${path}`} component={Dashboard} />
      case '/usuarios':
        return <Route path={`${path}`} component={Users} />
      case '/entrevistas':
        return <Route path={`${path}`} component={Interviews} />
      case '/entrevista':
        return <Route path={`${path}`} component={Interviews} />
      case '/login':
        return <Route path={`${path}`} component={Dashboard} />
      default:
        return ''
    }
  }

  // useEffect(() => {
  // if (isAuth) {
  //   return history.push('/dashboard')
  // } else {
  //   return history.push('/login')
  // }
  // })

  // if (isAuth) {
  //   return history.push('/dashboard')
  // } else {
  //   return history.push('/login')
  // }

  return (
    <DashboardContainer sidebar={sidebar}>
      {/* <Route exact path={path}>
        <Sidebar />
      </Route> */}
      <Sidebar />

      {/* {() => console.log('Hola')} */}
      <Switch>
        {show()}
        {/* {show()} */}
        {/* {()=>show} */}
        {/* {()=>show()} */}
        {/* <Route path={`${path}/dashboard`} component={Dashboard} /> */}
        {/* <Route path={`${path}/dashboard`} component={Dashboard} /> */}
        {/* <Route path={`${path}/usuarios`} component={Users} /> */}
        {/* <Route path={`${path}/entrevistas`} component={Interviews} /> */}
      </Switch>
    </DashboardContainer>
  )
}

// import { useState } from 'react'
// import { Route, Switch, useRouteMatch, Link } from 'react-router-dom'

// import { DashboardContainer } from './DashboardElements'
// import { Sidebar } from './Components/Sidebar copy 2'
// import { Interviews, NewInterview } from './Components/Interview'

// export const Dashboard = () => {
//   const [sidebar, setSidebar] = useState(true)

//   const showSidebar = () => setSidebar(!sidebar)

//   let { path, url } = useRouteMatch()

//   return (
//     <DashboardContainer sidebar={sidebar}>
//       <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
//           {console.log(path)}

//       <Switch>
//         <Route exact path={path}>
//           <Interviews sidebar={sidebar} />
//         </Route>
//         <Route exact path={`${path}/:sessionId`}></Route>
//         <Route path={`${path}/crear-entrevista`}>
//           <NewInterview sidebar={sidebar} />
//         </Route>
//       </Switch>
//     </DashboardContainer>
//   )
// }
