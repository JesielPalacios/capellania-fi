// import React from 'react'
// import { React } from 'react'
import { StrictMode } from 'react'
// import ReactDOM from 'react-dom/client'
// import * as ReactDOM from 'react-dom/client'

import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import reportWebVitals from './reportWebVitals'

import { App } from './App.jsx'
// import './index.css'

// Supported in React 18+
// const root = ReactDOM.createRoot(document.getElementById('root'))
const rootElement = document.getElementById('app')
const root = createRoot(rootElement)
// const root = ReactDOM.createRoot(rootElement)

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache()
})

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
)

// ReactDOM.createRoot(document.getElementById('app')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
