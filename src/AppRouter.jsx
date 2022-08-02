import React, { Suspense, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Context providers
import { UserContextProvider } from './core/context/UserContext'

// Components
import { Dashboard } from './components/Start'
import { Interviews } from './components/Interviews'
import { NewInterview } from './components/NewInterview'

// Styles
import { GlobalStyle } from './styles/GlobalStyles'
import { Sidebar } from './components/Dashboard/Components/Sidebar copy 2'
import { DashboardContainer } from './components/Dashboard/DashboardElements'
// import '../../styles/styles.css'
import './styles/styles.css'
import { Users } from './components/Users'
import { Dashboard2 } from './components/Dashboard'

// Pages
const Home = React.lazy(() => import('./pages/HomePage'))
const LogIn = React.lazy(() => import('./pages/LoginPage'))
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'))

export const AppRouter = () => {
  return (
    <UserContextProvider>
      <Suspense fallback={<div />}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard2} />
            <Route path='/usuarios' component={Dashboard2} />
            <Route path='/entrevistas' component={Dashboard2} />
            <Route path='/login' component={LogIn} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </Suspense>
    </UserContextProvider>
  )
}
