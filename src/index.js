import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { App } from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div />}>
      <Router>
        <Switch>
          <Route path="/" component={App} />
          <Route path="statistics" component={App} />
          <Route path="customers" component={App} />
          <Route path="diagrams" component={App} />
        </Switch>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('app')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
