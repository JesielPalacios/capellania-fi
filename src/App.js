import { Fragment } from 'react'
import { Login } from './components/Login/index 2'
import { AppRouter } from './core/router/AppRouter'

export const App = () => {
  return (
    <Fragment>
      <Login />
      {/* <AppRouter /> */}
    </Fragment>
  )
}
