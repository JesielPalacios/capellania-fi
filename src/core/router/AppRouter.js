import React, { Suspense } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from '../styles/GlobalStyles'

// Pages
// const Home = React.lazy(() => import('../../pages/HomePage'))
const Dashboard = React.lazy(() => import('../../pages/DashboardPage'))
const LogIn = React.lazy(() => import('../../pages/LoginPage'))
// const SignUp = React.lazy(() => import('../../pages/SignUpPage'))
const ErrorPage = React.lazy(() => import('../../pages/ErrorPage'))

export const AppRouter = () => {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />

      <Router>
        <Switch>
          {/* <Route exact path="/" component={<Home />} /> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={LogIn} />
          {/* <Route exact path="signup" component={SignUp} /> */}
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Suspense>
  )
}
