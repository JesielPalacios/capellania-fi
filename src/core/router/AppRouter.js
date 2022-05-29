import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Context providers
import { UserContextProvider } from '../context/UserContext'

// Styles
import { GlobalStyle } from '../../styles/GlobalStyles'
import '../../styles/styles.css'

// Pages
const Home = React.lazy(() => import('../../pages/HomePage'))
const InterViews = React.lazy(() => import('../../pages/InterViewsPage'))
const LogIn = React.lazy(() => import('../../pages/LoginPage'))
// const SignUp = React.lazy(() => import('../../pages/SignUpPage'))
const ErrorPage = React.lazy(() => import('../../pages/ErrorPage'))

export const AppRouter = () => {
  return (
    <UserContextProvider>
      <Suspense fallback={<div />}>
        <GlobalStyle />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/interviews" component={InterViews} />
            <Route path="/interviews/:id" component={InterViews} />
            {/* <Route path="/interview/:nueva" component={InterViews} /> */}
            <Route path="/login" component={LogIn} />
            {/* <Route exact path="signup" component={SignUp} /> */}
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </Suspense>
    </UserContextProvider>
  )
}
