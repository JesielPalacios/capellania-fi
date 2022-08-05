import React from 'react'
// import { React } from 'react'
import ReactDOM from 'react-dom'
// import * as ReactDOM from 'react-dom'
// import { StrictMode } from 'react'
// // import ReactDOM from 'react-dom/client'
// // import * as ReactDOM from 'react-dom/client'

// import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import reportWebVitals from './reportWebVitals'

import { App } from './App.jsx'
import Context from './core/context/UserContext'

const client = new ApolloClient({
  // uri: 'https://flyby-gateway.herokuapp.com/',
  // uri: 'http://localhost:4000',
  // uri: 'http://192.168.58.100:4000/',
  uri: 'http://192.168.58.100:4000/',
  cache: new InMemoryCache()
})

// // Supported in React 18+
// // const root = ReactDOM.createRoot(document.getElementById('root'))
// const rootElement = document.getElementById('app')
// const root = createRoot(rootElement)
// // const root = ReactDOM.createRoot(rootElement)

// root.render(
//   <StrictMode>
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   </StrictMode>
// )

// ReactDOM.createRoot(document.getElementById('app')).render(
//   <React.StrictMode>
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   </React.StrictMode>,
// )

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('app')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
