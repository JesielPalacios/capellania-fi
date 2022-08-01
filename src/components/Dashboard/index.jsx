import useUser from '../../core/hooks/useUser'
import { DashboardContainer } from './DashboardElements'

export const Dashboard2 = ({ children }) => {
  const { sidebar } = useUser()

  return (<DashboardContainer sidebar={sidebar}>{children}</DashboardContainer>
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
