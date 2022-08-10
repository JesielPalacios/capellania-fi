import React, { Suspense, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Context } from './core/context/UserContext'
import { Dashboard2 } from './components/Dashboard'

// Styles
import { GlobalStyle } from './styles/GlobalStyles'
import './styles/styles.css'

// Pages
const Home = React.lazy(() => import('./pages/HomePage'))
const LogIn = React.lazy(() => import('./pages/LoginPage'))
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'))

export const AppRouter = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback="Cargando...">
      <GlobalStyle />
      <Router basename="_#">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
          <Route path="/usuarios">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
          <Route path="/entrevistas">
            {isAuth ? <Dashboard2 /> : <LogIn />}
          </Route>
          <Route path="/entrevista">
            {isAuth ? <Dashboard2 /> : <LogIn />}
          </Route>
          <Route path="/login">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Suspense>
  )
}
