import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation userLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      value
    }
  }
`
