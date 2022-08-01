import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NotFound = () => {
  return (
    <Message>
      <h1>Error</h1>
      <h2>
        We're sorry!, page not found.{' '}
        {/* <Link to="/"> */}
        {/* <Link to="dashboard"> */}
        <Link to="/interviews">
          {' '}
          <button>Go to home page</button>{' '}
        </Link>{' '}
      </h2>
    </Message>
  )
}

const Message = styled.div`
  font-size: 25px;

  a {
    text-decoration: none;
    color: #000;
  }

  button {
    background: unset;
    border: unset;
    cursor: pointer;
    font-size: 25px;
    padding: 15px;
    border-radius: 5px;
    border: 5px solid #000;
  }
`
