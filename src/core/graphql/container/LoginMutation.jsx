import React from 'react'
import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
  mutation userLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      value
    }
  }
`

export const LoginMutation = ({ children }) => {
  const [login, { data, loading, error }] = useMutation(LOGIN)

  return (
    <div
      // {...login,data, loading, error}
      {...login}
      data={data}
      loading={loading}
      error={error}
    >
      {children}
    </div>
  )
}
