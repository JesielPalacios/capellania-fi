import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from '../../styles/GlobalStyles'

// Pages
const Home = React.lazy(() => import('../../pages/Home'))
const ErrorPage = React.lazy(() => import('../../pages/ErrorPage'))

export const AppRouter = () => {
  return (
    <Suspense fallback={'Cargando...'}>
      <Router>
        <GlobalStyle />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </Suspense>
  )
}
