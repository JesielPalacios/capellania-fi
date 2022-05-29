import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Context providers
import { UserContextProvider } from '../context/UserContext'

// Styles
import { GlobalStyle } from '../../styles/GlobalStyles'
import '../../styles/styles.css'

// Pages
const Home = React.lazy(() => import('../../pages/HomePage'))
const Dashboard = React.lazy(() => import('../../pages/DashboardPage'))
const LogIn = React.lazy(() => import('../../pages/LoginPage'))
const SignUp = React.lazy(() => import('../../pages/LoginPage'))
const ErrorPage = React.lazy(() => import('../../pages/ErrorPage'))

export const AppRouter = () => {
  return (
    <UserContextProvider>
      <Suspense fallback={<div />}>
        <GlobalStyle />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/start" component={Dashboard} />
            <Route path="/users" component={Dashboard} />
            <Route exact path="/interviews" component={Dashboard} />
            <Route exact path="/interviews/:sessionId" component={Dashboard} />
            {/* <Route
              exact path="/interviews/crear-entrevista"
              component={Dashboard}
            /> */}
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </Suspense>
    </UserContextProvider>
  )
}
