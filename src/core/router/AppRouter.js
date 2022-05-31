import React, { Suspense, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Context providers
import Context, { UserContextProvider } from '../context/UserContext'

// Hooks
import useUser from '../hooks/useUser'

// Components
import { Start } from '../../components/Start'
import { Interviews } from '../../components/Interviews'
import { NewInterview } from '../../components/NewInterview'

// Styles
import { GlobalStyle } from '../../styles/GlobalStyles'
import { Sidebar } from '../../components/Dashboard/Components/Sidebar copy 2'
import { DashboardContainer } from '../../components/Dashboard/DashboardElements'
import '../../styles/styles.css'
import { Users } from '../../components/Users'

// Pages
const Home = React.lazy(() => import('../../pages/HomePage'))
const Dashboard = React.lazy(() => import('../../pages/DashboardPage'))
const LogIn = React.lazy(() => import('../../pages/LoginPage'))
const ErrorPage = React.lazy(() => import('../../pages/ErrorPage'))

export const AppRouter = (props) => {
  // const { sidebar, showSidebar } = useContext(Context)
  const { sidebar, showSidebar } = useUser()

  return (
    <UserContextProvider>
      {console.log(sidebar)}

      <Suspense fallback={<div />}>
        <GlobalStyle />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <DashboardContainer sidebar={sidebar}>
              <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
              <Route path="/dashboard" component={Start} />
              <Route path="/usuarios" component={Users} />
              <Route path="/entrevistas" component={Interviews} />
            </DashboardContainer>

            <Route path="/login" component={LogIn} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </Suspense>
    </UserContextProvider>
  )
}
