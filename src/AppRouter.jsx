import React, { Suspense, useContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
  // HashRouter as Routing
} from 'react-router-dom'

// Styles
import { GlobalStyle } from './styles/GlobalStyles'
// import '../../styles/styles.css'
import './styles/styles.css'
import { Dashboard2 } from './components/Dashboard'
import { Context } from './core/context/UserContext'
import { Interview } from './components/Interviews/components/Interview'

// Pages
const Home = React.lazy(() => import('./pages/HomePage'))
const LogIn = React.lazy(() => import('./pages/LoginPage'))
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'))

export const AppRouter = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback="Cargando...">
      <GlobalStyle />
      <Router>
        {/* <Router basename="_#"> */}
        {/* <Routing basename="/_#"> */}
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
          {/* <Route exactpath="entrevista:interviewId">{isAuth ? <Interview /> : <LogIn />}</Route> */}
          <Route path="/login">{isAuth ? <Dashboard2 /> : <LogIn />}</Route>
          <Route component={ErrorPage} />
        </Switch>
        {/* </Routing> */}
      </Router>
    </Suspense>
  )
}

// https://www.google.com/search?q=routes+with+dash+on+react&oq=routes+with+dash+on+react&aqs=chrome..69i57.14101j0j1&sourceid=chrome&ie=UTF-8
// https://stackoverflow.com/questions/50088100/matching-routes-with-hyphens-in-react-router
