import React, { Suspense, useState, useContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect
} from 'react-router-dom'

// Styles
import { GlobalStyle } from './styles/GlobalStyles'
import { Sidebar } from './components/Dashboard/Components/Sidebar copy 2'
import { DashboardContainer } from './components/Dashboard/DashboardElements'
// import '../../styles/styles.css'
import './styles/styles.css'
import { Users } from './components/Users'
import { Dashboard2 } from './components/Dashboard'
import { Context } from './core/context/UserContext'

// Pages
const Home = React.lazy(() => import('./pages/HomePage'))
const LogIn = React.lazy(() => import('./pages/LoginPage'))
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'))

export const AppRouter = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
          <Route path="/usuarios">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
          <Route path="/entrevistas">
            {isAuth ? <Dashboard2 /> : <LogIn />}
          </Route>
          <Route path="/login">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Suspense>
  )
}
