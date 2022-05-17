import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { UserContextProvider } from '../context/UserContext'

// Styles
import { GlobalStyle } from '../../styles/GlobalStyles'

// Pages
const Home = React.lazy(() => import('../../pages/HomePage'))
const Dashboard = React.lazy(() => import('../../pages/DashboardPage'))
const LogIn = React.lazy(() => import('../../pages/LoginPage'))
// const SignUp = React.lazy(() => import('../../pages/SignUpPage'))
const ErrorPage = React.lazy(() => import('../../pages/ErrorPage'))

export const AppRouter = () => {
  return (
    <UserContextProvider>
      <Suspense fallback={<div />}>
        <GlobalStyle />

        {/* Router */}
        <Router>
          <Switch>
            <Route exact path="home" component={<Home />} />
            <Route path="/" component={Dashboard} />
            <Route path="/" component={Dashboard} />
            <Route path="/" component={Dashboard} />
            <Route path="/" component={Dashboard} />
            <Route path="/" component={Dashboard} />
            <Route path="/" component={Dashboard} />
            <Route path="login" component={LogIn} />
            {/* <Route exact path="signup" component={SignUp} /> */}
            <Route component={ErrorPage} />
          </Switch>
        </Router>
        {/* Router */}
      </Suspense>
    </UserContextProvider>
  )
}
