import { Fragment } from 'react'
import { AppRouter } from './core/router/AppRouter'
import LoginPage from './pages/LoginPage'

export const App = () => {
  return (
    <Fragment>
      <LoginPage />
      {/* <AppRouter /> */}
    </Fragment>
  )
}
